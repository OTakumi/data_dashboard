import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from '@heroicons/react/24/solid';

interface StatCardProps {
  title: string;
  value: number;
  previousValue?: number;
  format?: 'currency' | 'number' | 'percentage';
  trend?: 'up' | 'down' | 'neutral';
  isLoading?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  previousValue,
  format = 'number',
  trend,
  isLoading = false,
}) => {
  // 値のフォーマット
  const formatValue = (val: number): string => {
    switch (format) {
      case 'currency':
        return `¥${val.toLocaleString('ja-JP')}`;
      case 'percentage':
        return `${val.toFixed(2)}%`;
      default:
        return val.toLocaleString('ja-JP');
    }
  };

  // トレンドの計算
  const calculateTrend = (): { trend: 'up' | 'down' | 'neutral'; percentage: number } => {
    if (!previousValue || previousValue === 0) {
      return { trend: 'neutral', percentage: 0 };
    }

    const percentage = ((value - previousValue) / previousValue) * 100;
    
    if (percentage > 0) {
      return { trend: 'up', percentage };
    } else if (percentage < 0) {
      return { trend: 'down', percentage: Math.abs(percentage) };
    }
    
    return { trend: 'neutral', percentage: 0 };
  };

  const trendInfo = previousValue !== undefined ? calculateTrend() : { trend: trend || 'neutral', percentage: 0 };

  // トレンドアイコンの選択
  const getTrendIcon = () => {
    const iconClass = "w-4 h-4";
    switch (trendInfo.trend) {
      case 'up':
        return <ArrowUpIcon className={iconClass} />;
      case 'down':
        return <ArrowDownIcon className={iconClass} />;
      default:
        return <MinusIcon className={iconClass} />;
    }
  };

  // トレンドバッジのスタイル
  const getTrendBadgeClass = () => {
    const baseClass = "badge gap-1 ";
    switch (trendInfo.trend) {
      case 'up':
        return baseClass + "badge-success";
      case 'down':
        return baseClass + "badge-error";
      default:
        return baseClass + "badge-ghost";
    }
  };

  if (isLoading) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="animate-pulse">
            <div className="h-4 bg-base-300 rounded w-3/4 mb-3"></div>
            <div className="h-8 bg-base-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="card-body">
        <h3 className="card-title text-sm font-medium text-base-content/70">{title}</h3>
        <div className="flex items-baseline justify-between">
          <p className="text-2xl font-bold">{formatValue(value)}</p>
          {(previousValue !== undefined || trend) && (
            <div className={getTrendBadgeClass()}>
              {getTrendIcon()}
              {previousValue !== undefined && (
                <span className="font-medium">
                  {trendInfo.percentage.toFixed(1)}%
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};