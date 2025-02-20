"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ImageUpload() {
  const [isUploading, setIsUploading] = useState(false)
  const [prediction, setPrediction] = useState<string | null>(null)

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsUploading(true)

    const formData = new FormData(e.currentTarget)
    const file = formData.get("image") as File

    try {
      // Here you would implement the actual image upload and ML prediction
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setPrediction("High Risk - 85% confidence")
    } catch (error) {
      console.error("Upload failed:", error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Image for Analysis
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Image for Risk Analysis</DialogTitle>
          <DialogDescription>Upload an image of the construction site for ML-based risk assessment.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <Label htmlFor="image">Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" required />
          </div>
          {prediction && (
            <div className="rounded-lg bg-muted p-4">
              <p className="font-medium">Prediction Result:</p>
              <p className="text-sm text-muted-foreground">{prediction}</p>
            </div>
          )}
          <Button type="submit" disabled={isUploading}>
            {isUploading ? "Analyzing..." : "Upload & Analyze"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

