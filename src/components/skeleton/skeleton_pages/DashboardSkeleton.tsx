import DashboardBottomSkeleton from "../DashboardBottomSkeleton";
import DashboardCardSkeleton from "../DashboardCardSkeleton";

export default function DashboardSkeleton() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-4">
            <div className="flex flex-wrap w-full gap-4 justify-center">
                <DashboardCardSkeleton />
                <DashboardCardSkeleton />
                <DashboardCardSkeleton />
                <DashboardCardSkeleton />
                <DashboardCardSkeleton />
                <DashboardCardSkeleton />
                <DashboardCardSkeleton />
            </div>
            <div className="flex flex-wrap w-full gap-4 justify-center">
                <DashboardBottomSkeleton />
                <DashboardBottomSkeleton />
            </div>
        </div>
    )
}