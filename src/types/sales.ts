// カフェ用品ECサイトの売上データ型定義

export interface SalesData {
  id: string;
  date: string; // ISO 8601形式 (YYYY-MM-DD)
  amount: number;
  category: ProductCategory;
  productId: string;
  productName: string;
  quantity: number;
  customerId: string;
  customerType: 'new' | 'returning';
}

export type ProductCategory = 
  | 'コーヒー豆'
  | 'コーヒー器具'
  | 'エスプレッソマシン'
  | 'グラインダー'
  | 'ドリッパー・フィルター'
  | 'カップ・グラス'
  | 'その他アクセサリー';

export interface DailySales {
  date: string;
  totalAmount: number;
  orderCount: number;
  averageOrderValue: number;
}

export interface CategorySales {
  category: ProductCategory;
  amount: number;
  percentage: number;
  itemCount: number; // 販売個数
}

export interface CustomerMetrics {
  newCustomers: number;
  returningCustomers: number;
  totalCustomers: number;
  conversionRate: number; // リピート率
}

export interface Order {
  id: string;
  date: string;
  customerId: string;
  customerName: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'credit_card' | 'bank_transfer' | 'convenience_store';
}

export interface OrderItem {
  productId: string;
  productName: string;
  category: ProductCategory;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
  popularity: number; // 人気度スコア（0-100）
}

export interface DashboardMetrics {
  totalSales: number;
  totalOrders: number;
  averageOrderValue: number;
  customerMetrics: CustomerMetrics;
  salesTrend: DailySales[];
  categorySales: CategorySales[];
  recentOrders: Order[];
  topProducts: Product[]; // 人気商品TOP10
}

// 期間フィルター用の型
export type DateRange = 'today' | 'yesterday' | 'last7days' | 'last30days' | 'thisMonth' | 'lastMonth' | 'custom';

export interface DateRangeFilter {
  type: DateRange;
  startDate?: string;
  endDate?: string;
}