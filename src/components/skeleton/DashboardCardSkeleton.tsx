export default function DashboardCardSkeleton() {
    return (
        <div className="bg-gray-100 flex flex-col items-start justify-start p-5 gap-2 shadow-xl rounded-xl min-w-65 flex-1 max-sm:min-w-full animate-pulse">
            <div className="h-8 w-8 bg-gray-300 rounded"></div>
            <div className="h-3 bg-gray-300 w-1/3 rounded"></div>
            <div className="h-3 bg-gray-300 w-1/2 rounded"></div>
            <div className="h-3 bg-gray-300 w-1/3 rounded"></div>
            <div className="h-3 bg-gray-300 w-full rounded"></div>
        </div>
    );
}