// カフェ用品ECサイトのモックデータ

import type { SalesData, Order, Product, ProductCategory } from '../types/sales';

// 商品マスターデータ（50種類）
export const products: Product[] = [
  // コーヒー豆（15種類）
  { id: 'P001', name: 'ブラジル サントス No.2', category: 'コーヒー豆', price: 1800, stock: 50, popularity: 95 },
  { id: 'P002', name: 'コロンビア スプレモ', category: 'コーヒー豆', price: 2000, stock: 40, popularity: 90 },
  { id: 'P003', name: 'エチオピア イルガチェフェ', category: 'コーヒー豆', price: 2500, stock: 30, popularity: 85 },
  { id: 'P004', name: 'グアテマラ アンティグア', category: 'コーヒー豆', price: 2200, stock: 35, popularity: 80 },
  { id: 'P005', name: 'ケニア AA', category: 'コーヒー豆', price: 2800, stock: 25, popularity: 75 },
  { id: 'P006', name: 'ハワイ コナ', category: 'コーヒー豆', price: 4500, stock: 15, popularity: 70 },
  { id: 'P007', name: 'ジャマイカ ブルーマウンテン', category: 'コーヒー豆', price: 6000, stock: 10, popularity: 65 },
  { id: 'P008', name: 'インドネシア マンデリン', category: 'コーヒー豆', price: 2300, stock: 30, popularity: 88 },
  { id: 'P009', name: 'コスタリカ タラス', category: 'コーヒー豆', price: 2100, stock: 35, popularity: 82 },
  { id: 'P010', name: 'ペルー オーガニック', category: 'コーヒー豆', price: 1900, stock: 40, popularity: 78 },
  { id: 'P011', name: 'エスプレッソブレンド', category: 'コーヒー豆', price: 1700, stock: 60, popularity: 92 },
  { id: 'P012', name: 'モカブレンド', category: 'コーヒー豆', price: 1800, stock: 55, popularity: 87 },
  { id: 'P013', name: 'キリマンジャロ', category: 'コーヒー豆', price: 2400, stock: 30, popularity: 83 },
  { id: 'P014', name: 'デカフェ コロンビア', category: 'コーヒー豆', price: 2200, stock: 25, popularity: 72 },
  { id: 'P015', name: 'シーズナルブレンド', category: 'コーヒー豆', price: 2000, stock: 45, popularity: 86 },

  // コーヒー器具（8種類）
  { id: 'P016', name: 'ハリオ V60ドリッパー02', category: 'コーヒー器具', price: 550, stock: 100, popularity: 94 },
  { id: 'P017', name: 'カリタ ウェーブドリッパー', category: 'コーヒー器具', price: 1200, stock: 80, popularity: 89 },
  { id: 'P018', name: 'ケメックス 6カップ', category: 'コーヒー器具', price: 6000, stock: 20, popularity: 76 },
  { id: 'P019', name: 'フレンチプレス 350ml', category: 'コーヒー器具', price: 3500, stock: 40, popularity: 84 },
  { id: 'P020', name: 'エアロプレス', category: 'コーヒー器具', price: 4500, stock: 30, popularity: 81 },
  { id: 'P021', name: 'サイフォン 3人用', category: 'コーヒー器具', price: 8000, stock: 15, popularity: 68 },
  { id: 'P022', name: 'モカエキスプレス 3カップ', category: 'コーヒー器具', price: 3800, stock: 35, popularity: 79 },
  { id: 'P023', name: 'コールドブリューメーカー', category: 'コーヒー器具', price: 4200, stock: 25, popularity: 77 },

  // エスプレッソマシン（5種類）
  { id: 'P024', name: 'デロンギ マグニフィカS', category: 'エスプレッソマシン', price: 65000, stock: 8, popularity: 91 },
  { id: 'P025', name: 'ガジア クラシック', category: 'エスプレッソマシン', price: 48000, stock: 10, popularity: 86 },
  { id: 'P026', name: 'ブレビル バリスタエクスプレス', category: 'エスプレッソマシン', price: 78000, stock: 6, popularity: 88 },
  { id: 'P027', name: 'デロンギ デディカ', category: 'エスプレッソマシン', price: 32000, stock: 12, popularity: 85 },
  { id: 'P028', name: 'ネスプレッソ ラティシマ', category: 'エスプレッソマシン', price: 38000, stock: 15, popularity: 82 },

  // グラインダー（7種類）
  { id: 'P029', name: 'ハリオ スケルトン', category: 'グラインダー', price: 4500, stock: 50, popularity: 90 },
  { id: 'P030', name: 'ポーレックス ミニ', category: 'グラインダー', price: 6800, stock: 40, popularity: 87 },
  { id: 'P031', name: 'カリタ ナイスカットG', category: 'グラインダー', price: 28000, stock: 15, popularity: 83 },
  { id: 'P032', name: 'ウィルファ スヴァート', category: 'グラインダー', price: 18000, stock: 20, popularity: 85 },
  { id: 'P033', name: 'バラッツァ アンコール', category: 'グラインダー', price: 22000, stock: 18, popularity: 84 },
  { id: 'P034', name: 'コマンダンテ C40', category: 'グラインダー', price: 38000, stock: 10, popularity: 80 },
  { id: 'P035', name: 'タイムモア C2', category: 'グラインダー', price: 8500, stock: 35, popularity: 88 },

  // ドリッパー・フィルター（5種類）
  { id: 'P036', name: 'ハリオ V60ペーパーフィルター02', category: 'ドリッパー・フィルター', price: 400, stock: 200, popularity: 96 },
  { id: 'P037', name: 'カリタ ウェーブフィルター185', category: 'ドリッパー・フィルター', price: 600, stock: 150, popularity: 92 },
  { id: 'P038', name: 'ケメックス フィルター', category: 'ドリッパー・フィルター', price: 1200, stock: 100, popularity: 85 },
  { id: 'P039', name: 'メタルフィルター', category: 'ドリッパー・フィルター', price: 2500, stock: 60, popularity: 78 },
  { id: 'P040', name: 'ネルドリップフィルター', category: 'ドリッパー・フィルター', price: 1800, stock: 40, popularity: 73 },

  // カップ・グラス（6種類）
  { id: 'P041', name: 'ラテアート用カップ 300ml', category: 'カップ・グラス', price: 1500, stock: 80, popularity: 89 },
  { id: 'P042', name: 'エスプレッソカップセット', category: 'カップ・グラス', price: 3200, stock: 50, popularity: 84 },
  { id: 'P043', name: 'ダブルウォールグラス 250ml', category: 'カップ・グラス', price: 2800, stock: 60, popularity: 87 },
  { id: 'P044', name: 'マグカップ 400ml', category: 'カップ・グラス', price: 1200, stock: 100, popularity: 91 },
  { id: 'P045', name: 'カッピングボウル', category: 'カップ・グラス', price: 800, stock: 70, popularity: 75 },
  { id: 'P046', name: 'アイスコーヒーグラス', category: 'カップ・グラス', price: 1800, stock: 55, popularity: 82 },

  // その他アクセサリー（4種類）
  { id: 'P047', name: 'デジタルスケール', category: 'その他アクセサリー', price: 3500, stock: 45, popularity: 88 },
  { id: 'P048', name: 'ミルクピッチャー 350ml', category: 'その他アクセサリー', price: 2200, stock: 50, popularity: 86 },
  { id: 'P049', name: 'タンパー 58mm', category: 'その他アクセサリー', price: 4800, stock: 30, popularity: 81 },
  { id: 'P050', name: 'コーヒーキャニスター', category: 'その他アクセサリー', price: 2500, stock: 65, popularity: 83 },
];

// 顧客名のサンプル
const customerNames = [
  '田中太郎', '佐藤花子', '鈴木一郎', '高橋美咲', '渡辺健太',
  '伊藤愛子', '山本大輔', '中村優子', '小林翔太', '加藤麻衣',
  '吉田和也', '山田桜', '佐々木隆', '山口恵美', '松本浩二',
  '井上綾子', '木村拓也', '林美穂', '斉藤勇人', '清水さくら'
];

// 日付を生成するヘルパー関数
function generateDateRange(days: number): string[] {
  const dates: string[] = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  
  return dates;
}

// ランダムな注文を生成
function generateOrder(date: string, orderId: number, customerIndex: number): Order {
  const itemCount = Math.floor(Math.random() * 4) + 1; // 1-4個の商品
  const items: OrderItem[] = [];
  let totalAmount = 0;

  for (let i = 0; i < itemCount; i++) {
    const product = products[Math.floor(Math.random() * products.length)];
    const quantity = Math.floor(Math.random() * 3) + 1;
    const amount = product.price * quantity;
    
    items.push({
      productId: product.id,
      productName: product.name,
      category: product.category,
      quantity,
      unitPrice: product.price,
      amount
    });
    
    totalAmount += amount;
  }

  const statuses: Order['status'][] = ['delivered', 'delivered', 'delivered', 'shipped', 'processing'];
  const paymentMethods: Order['paymentMethod'][] = ['credit_card', 'credit_card', 'bank_transfer', 'convenience_store'];

  return {
    id: `ORD-${date.replace(/-/g, '')}-${String(orderId).padStart(4, '0')}`,
    date: `${date}T${10 + Math.floor(Math.random() * 10)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00`,
    customerId: `CUST-${String(customerIndex + 1).padStart(4, '0')}`,
    customerName: customerNames[customerIndex % customerNames.length],
    items,
    totalAmount,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)]
  };
}

// 30日分の注文データを生成
export function generateMockOrders(): Order[] {
  const orders: Order[] = [];
  const dates = generateDateRange(30);
  
  dates.forEach(date => {
    // 1日あたり80-120件の注文
    const orderCount = 80 + Math.floor(Math.random() * 41);
    
    for (let i = 0; i < orderCount; i++) {
      const customerIndex = Math.floor(Math.random() * customerNames.length);
      orders.push(generateOrder(date, i + 1, customerIndex));
    }
  });

  return orders;
}

// 売上データを注文から生成
export function generateSalesDataFromOrders(orders: Order[]): SalesData[] {
  const salesData: SalesData[] = [];
  const customerPurchaseHistory: { [customerId: string]: boolean } = {};

  orders.forEach(order => {
    const isReturning = customerPurchaseHistory[order.customerId] || false;
    customerPurchaseHistory[order.customerId] = true;

    order.items.forEach(item => {
      salesData.push({
        id: `SALE-${order.id}-${item.productId}`,
        date: order.date.split('T')[0],
        amount: item.amount,
        category: item.category,
        productId: item.productId,
        productName: item.productName,
        quantity: item.quantity,
        customerId: order.customerId,
        customerType: isReturning ? 'returning' : 'new'
      });
    });
  });

  return salesData;
}

// エクスポート用のデフォルトデータ
export const mockOrders = generateMockOrders();
export const mockSalesData = generateSalesDataFromOrders(mockOrders);