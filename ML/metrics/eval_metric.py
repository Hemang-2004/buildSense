import torch

from extensions.chamfer_distance.chamfer_distance import ChamferDistance
from extensions.earth_movers_distance.emd import EarthMoverDistance


CD = ChamferDistance()
EMD = EarthMoverDistance()


def cd_loss_L1(pcs1, pcs2):
    
    dist1, dist2 = CD(pcs1, pcs2)
    dist1 = torch.sqrt(dist1)
    dist2 = torch.sqrt(dist2)
    return (torch.mean(dist1) + torch.mean(dist2)) / 2.0


def cd_loss_L2(pcs1, pcs2):
    
    dist1, dist2 = CD(pcs1, pcs2)
    return torch.mean(dist1) + torch.mean(dist2)


def emd_loss(pcs1, pcs2):
   
    dists = EMD(pcs1, pcs2)
    return torch.mean(dists)