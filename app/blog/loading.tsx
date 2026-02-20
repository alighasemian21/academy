export default function BlogLoading() {
  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-8">
          <div className="h-10 bg-primary-100 rounded w-48 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-primary-100">
                <div className="h-48 bg-primary-100" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-primary-200 rounded w-2/3" />
                  <div className="h-4 bg-primary-100 rounded w-full" />
                  <div className="h-4 bg-primary-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
