export default function DashboardBottomSkeleton() {
    return (
        <div className="bg-gray-100 flex-6 flex flex-col items-start justify-start p-5 rounded-xl shadow-2xl w-full gap-2 h-[420px] animate-pulse">
            <div className="h-3 bg-gray-300 w-1/3 rounded"></div>
            <div className="h-3 bg-gray-300 w-1/2 rounded"></div>
            <div className="h-20 bg-gray-300 w-full rounded"></div>
            <div className="h-20 bg-gray-300 w-full rounded"></div>
            <div className="h-20 bg-gray-300 w-full rounded"></div>
            <div className="h-20 bg-gray-300 w-full rounded"></div>
            <div className="h-20 bg-gray-300 w-full rounded"></div>
        </div>
    );
}