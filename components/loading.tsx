export default function Loading() {
  return (
    <div className="min-h-[200px] flex items-center justify-center bg-background">
      <div className="space-y-4 text-center">
        <div className="inline-block w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-muted-foreground">Loading amazing content...</p>
      </div>
    </div>
  )
}

