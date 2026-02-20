export default function CourseDetailLoading() {
  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-primary-100 rounded w-32" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="h-64 bg-primary-100 rounded-2xl" />
              <div className="h-8 bg-primary-200 rounded w-3/4" />
              <div className="h-4 bg-primary-100 rounded w-full" />
              <div className="h-4 bg-primary-100 rounded w-2/3" />
            </div>
            <div className="space-y-4">
              <div className="h-12 bg-primary-100 rounded-xl" />
              <div className="h-12 bg-primary-100 rounded-xl" />
              <div className="h-24 bg-primary-50 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
