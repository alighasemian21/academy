export default function RootLoading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-primary-200 rounded-2xl" />
        <div className="h-4 bg-primary-100 rounded w-32" />
        <div className="h-4 bg-primary-100 rounded w-24" />
      </div>
    </div>
  );
}
