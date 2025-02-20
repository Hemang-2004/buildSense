"use client"

export function MapContainer() {
  return (
    <div className="h-full w-full bg-muted p-8 flex items-center justify-center">
      <div className="text-center text-muted-foreground">
        <p>Map integration requires Google Maps or Mapbox API key.</p>
        <p className="text-sm">Please add your API key to the environment variables.</p>
      </div>
    </div>
  )
}

