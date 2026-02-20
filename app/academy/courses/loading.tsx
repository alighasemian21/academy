export default function CoursesLoading() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-8">
          <div className="h-10 bg-primary-200 rounded w-40 mx-auto" />
          <div className="h-12 bg-primary-100 rounded-xl w-full max-w-md" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-primary-100 bg-white">
                <div className="h-52 bg-primary-100" />
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-primary-200 rounded w-2/3" />
                  <div className="h-4 bg-primary-100 rounded w-full" />
                  <div className="h-4 bg-primary-100 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
