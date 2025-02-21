import torch
import torch.nn as nn


class project_analysis(nn.Module):

    def __init__(self, num_dense=16384, latent_dim=1024, grid_size=4):
        super().__init__()

        self.num_dense = num_dense
        self.latent_dim = latent_dim
        self.grid_size = grid_size

        assert self.num_dense % self.grid_size ** 2 == 0

        self.num_coarse = self.num_dense // (self.grid_size ** 2)

        self.first_conv = nn.Sequential(
            nn.Conv1d(3, 128, 1),
            nn.BatchNorm1d(128),
            nn.ReLU(inplace=True),
            nn.Conv1d(128, 256, 1)
        )

        self.second_conv = nn.Sequential(
            nn.Conv1d(512, 512, 1),
            nn.BatchNorm1d(512),
            nn.ReLU(inplace=True),
            nn.Conv1d(512, self.latent_dim, 1)
        )

        self.mlp = nn.Sequential(
            nn.Linear(self.latent_dim, 1024),
            nn.ReLU(inplace=True),
            nn.Linear(1024, 1024),
            nn.ReLU(inplace=True),
            nn.Linear(1024, 3 * self.num_coarse)
        )

        self.final_conv = nn.Sequential(
            nn.Conv1d(1024 + 3 + 2, 512, 1),
            nn.BatchNorm1d(512),
            nn.ReLU(inplace=True),
            nn.Conv1d(512, 512, 1),
            nn.BatchNorm1d(512),
            nn.ReLU(inplace=True),
            nn.Conv1d(512, 3, 1)
        )
        a = torch.linspace(-0.05, 0.05, steps=self.grid_size, dtype=torch.float).view(1, self.grid_size).expand(self.grid_size, self.grid_size).reshape(1, -1)
        b = torch.linspace(-0.05, 0.05, steps=self.grid_size, dtype=torch.float).view(self.grid_size, 1).expand(self.grid_size, self.grid_size).reshape(1, -1)
        
        self.folding_seed = torch.cat([a, b], dim=0).view(1, 2, self.grid_size ** 2).cuda()  # (1, 2, S)

    def forward(self, xyz):
        B, N, _ = xyz.shape
        
        # encoder
        feature = self.first_conv(xyz.transpose(2, 1))                                      
        feature_global = torch.max(feature, dim=2, keepdim=True)[0]                         
        feature = torch.cat([feature_global.expand(-1, -1, N), feature], dim=1)             
        feature = self.second_conv(feature)                                                 
        feature_global = torch.max(feature,dim=2,keepdim=False)[0]                          
    
        # decode
        coarse = self.mlp(feature_global).reshape(-1, self.num_coarse, 3)                   
        point_feat = coarse.unsqueeze(2).expand(-1, -1, self.grid_size ** 2, -1)            
        point_feat = point_feat.reshape(-1, self.num_dense, 3).transpose(2, 1)              
        seed = self.folding_seed.unsqueeze(2).expand(B, -1, self.num_coarse, -1)            
        seed = seed.reshape(B, -1, self.num_dense)                                          
        feature_global = feature_global.unsqueeze(2).expand(-1, -1, self.num_dense)         
        feat = torch.cat([feature_global, seed, point_feat], dim=1)                         

        fine = self.final_conv(feat) + point_feat                                           
        return coarse.contiguous(), fine.transpose(1, 2).contiguous()