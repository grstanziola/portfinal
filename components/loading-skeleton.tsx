export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section Skeleton */}
        <div className="h-[60vh] rounded-2xl bg-white/5 animate-pulse mb-16" />

        {/* Content Sections Skeletons */}
        <div className="space-y-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              {/* Section Title */}
              <div className="h-8 w-48 bg-white/5 rounded animate-pulse" />

              {/* Section Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-64 bg-white/5 rounded-xl animate-pulse" />
                <div className="h-64 bg-white/5 rounded-xl animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

