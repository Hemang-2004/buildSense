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

export function ImageUploadAnalysis() {
  const [isUploading, setIsUploading] = useState(false)
  const [analysis, setAnalysis] = useState<string | null>(null)

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsUploading(true)

    const formData = new FormData(e.currentTarget)
    const file = formData.get("image") as File

    try {
      // Here you would implement the actual image upload and ML analysis
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setAnalysis("High risk detected: Unsafe scaffolding structure identified. Recommend immediate inspection.")
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
          <DialogDescription>
            Upload an image of the construction site for real-time ML-based risk assessment.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <Label htmlFor="image">Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" required />
          </div>
          {analysis && (
            <div className="rounded-lg bg-muted p-4">
              <p className="font-medium">Analysis Result:</p>
              <p className="text-sm text-muted-foreground">{analysis}</p>
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

