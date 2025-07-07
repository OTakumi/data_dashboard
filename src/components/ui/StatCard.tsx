import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from '@heroicons/react/24/solid';
import './StatCard.css';

interface StatCardProps {
  title: string;
  value: number;
  previousValue?: number;
  format?: 'currency' | 'number' | 'percentage';
  trend?: 'up' | 'down' | 'neutral' | 'warning';
  isLoading?: boolean;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  previousValue,
  format = 'number',
  trend,
  isLoading = false,
  className = '',
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
  const calculateTrend = (): { trend: 'up' | 'down' | 'neutral' | 'warning'; percentage: number } => {
    if (!previousValue || previousValue === 0) {
      return { trend: 'neutral', percentage: 0 };
    }

    const percentage = ((value - previousValue) / previousValue) * 100;
    
    if (percentage > 5) {
      return { trend: 'up', percentage };
    } else if (percentage < -5) {
      return { trend: 'down', percentage: Math.abs(percentage) };
    } else if (percentage !== 0) {
      return { trend: 'warning', percentage: Math.abs(percentage) };
    }
    
    return { trend: 'neutral', percentage: 0 };
  };

  const trendInfo = previousValue !== undefined ? calculateTrend() : { trend: trend || 'neutral', percentage: 0 };

  // トレンドアイコンの選択
  const getTrendIcon = () => {
    const iconClass = "kpi-trend-icon";
    switch (trendInfo.trend) {
      case 'up':
        return <ArrowUpIcon className={iconClass} />;
      case 'down':
        return <ArrowDownIcon className={iconClass} />;
      case 'warning':
        return <MinusIcon className={iconClass} />;
      default:
        return <MinusIcon className={iconClass} />;
    }
  };

  // トレンドクラスの取得
  const getTrendClass = () => {
    return `kpi-trend kpi-trend--${trendInfo.trend}`;
  };

  if (isLoading) {
    return (
      <div className={`kpi-card kpi-card--loading ${className}`}>
        <div className="kpi-skeleton kpi-skeleton--title"></div>
        <div className="kpi-skeleton kpi-skeleton--value"></div>
      </div>
    );
  }

  return (
    <div className={`kpi-card ${className}`} tabIndex={0} role="region" aria-label={`${title}: ${formatValue(value)}`}>
      <h3 className="kpi-label">{title}</h3>
      <div className="kpi-value" aria-label={`現在の値: ${formatValue(value)}`}>
        {formatValue(value)}
      </div>
      {(previousValue !== undefined || trend) && (
        <div className={getTrendClass()} aria-label={
          previousValue !== undefined 
            ? `前期比: ${trendInfo.trend === 'up' ? '増加' : trendInfo.trend === 'down' ? '減少' : '変化'} ${trendInfo.percentage.toFixed(1)}%`
            : `トレンド: ${trendInfo.trend}`
        }>
          {getTrendIcon()}
          {previousValue !== undefined && (
            <span className="font-mono">
              {trendInfo.percentage.toFixed(1)}%
            </span>
          )}
        </div>
      )}
    </div>
  );
};