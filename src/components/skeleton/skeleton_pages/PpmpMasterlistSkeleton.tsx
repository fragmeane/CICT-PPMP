import CountCardSkeleton from "../CountCardSkeleton";
import TableSkeleton from "../TableSkeleton";

export default function DashboardSkeleton() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-4">
            <div className="flex flex-row flex-wrap items-center justify-center gap-3 w-full">
                <CountCardSkeleton />
                <CountCardSkeleton />
                <CountCardSkeleton />
                <CountCardSkeleton />
                <CountCardSkeleton />
            </div>
            <TableSkeleton />
        </div>
    );
}