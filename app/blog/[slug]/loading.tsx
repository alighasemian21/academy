export default function BlogPostLoading() {
  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-primary-100 rounded w-24" />
          <div className="h-10 bg-primary-200 rounded w-full" />
          <div className="h-4 bg-primary-100 rounded w-1/3" />
          <div className="h-64 bg-primary-100 rounded-xl" />
          <div className="space-y-3">
            <div className="h-4 bg-primary-100 rounded w-full" />
            <div className="h-4 bg-primary-100 rounded w-full" />
            <div className="h-4 bg-primary-100 rounded w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
