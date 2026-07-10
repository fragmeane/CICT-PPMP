export default function CountCardSkeleton() {
    return (
        <div className="bg-gray-100 flex flex-row items-center justify-start gap-1 p-5 rounded-xl shadow-2xl flex-1 min-w-fit animate-pulse">
            <div className="h-10 w-12 bg-gray-300 rounded"></div>
            <div className="flex flex-col items-start justify-start gap-2 w-full">
                <div className="h-3 bg-gray-300 w-1/2 rounded"></div>
                <div className="h-3 bg-gray-300 w-1/3 rounded"></div>
            </div>
        </div>
    );
}