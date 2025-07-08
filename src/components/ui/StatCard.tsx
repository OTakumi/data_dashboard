import {
  ArrowDownIcon,
  ArrowUpIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: Parameters<typeof clsx>) => {
  return twMerge(clsx(inputs));
};

type Trend = "up" | "down" | "neutral" | "warning";

type StatCardProps = {
  title: string;
  value: number;
  previousValue?: number;
  format?: "currency" | "number" | "percentage";
  trend?: Trend;
  isLoading?: boolean;
  className?: string;
};

// トレンドとアイコン、色のマッピング
const trendConfig: Record<
  Trend,
  { Icon: React.ElementType; colorClass: string }
> = {
  up: { Icon: ArrowUpIcon, colorClass: "text-green-500" },
  down: { Icon: ArrowDownIcon, colorClass: "text-red-500" },
  warning: { Icon: MinusIcon, colorClass: "text-amber-500" },
  neutral: { Icon: MinusIcon, colorClass: "text-gray-500" },
};

// ローディングスケルトンコンポーネント
const StatCardSkeleton = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "animate-pulse rounded-lg bg-white p-4 shadow-md dark:bg-gray-800",
      className,
    )}
  >
    <div className="mb-2 h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700"></div>
    <div className="h-8 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
  </div>
);

export const StatCard = ({
  title,
  value,
  previousValue,
  format = "number",
  trend: trendProp,
  isLoading = false,
  className = "",
}: StatCardProps) => {
  // 値のフォーマットロジックをメモ化
  const formattedValue = useMemo(() => {
    const options: Intl.NumberFormatOptions = {};
    if (format === "currency") {
      options.style = "currency";
      options.currency = "JPY";
    } else if (format === "percentage") {
      return `${value.toFixed(2)}%`;
    }
    return new Intl.NumberFormat("ja-JP", options).format(value);
  }, [value, format]);

  // トレンドの計算
  const trendInfo = useMemo(() => {
    if (previousValue === undefined) {
      return { trend: trendProp || "neutral", percentage: 0 };
    }
    if (previousValue === 0) {
      return { trend: "neutral" as Trend, percentage: 0 };
    }

    const percentage = ((value - previousValue) / previousValue) * 100;
    let calculatedTrend: Trend = "neutral";
    if (percentage > 5) calculatedTrend = "up";
    else if (percentage < -5) calculatedTrend = "down";
    else if (percentage !== 0) calculatedTrend = "warning";

    return { trend: calculatedTrend, percentage };
  }, [value, previousValue, trendProp]);

  const { Icon, colorClass } = trendConfig[trendInfo.trend];

  if (isLoading) {
    return <StatCardSkeleton className={className} />;
  }

  return (
    <section
      className={cn(
        "rounded-lg bg-white p-4 shadow-md dark:bg-gray-800",
        className,
      )}
      aria-label={`${title}: ${formattedValue}`}
    >
      <h3 className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h3>
      <div className="text-3xl font-bold font-mono text-gray-900 dark:text-white">
        {formattedValue}
      </div>

      {(previousValue !== undefined || trendProp) && (
        <div className={cn("mt-2 flex items-center text-sm", colorClass)}>
          <Icon className="mr-1 h-4 w-4" />
          {previousValue !== undefined && (
            <span className="font-mono font-semibold">
              {Math.abs(trendInfo.percentage).toFixed(1)}%
            </span>
          )}
        </div>
      )}
    </section>
  );
};
