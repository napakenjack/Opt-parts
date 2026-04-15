export interface Product {
  id: string;
  name: string;
  sku: string;
  brand: string;
  price: number;
  originalPrice?: number;
  stock: number;
  deliveryDays: number;
  image: string;
  category: string;
  compatibility: string[];
  rating: number;
  reviews: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Комплект керамических тормозных колодок',
    sku: 'BP-CER-992',
    brand: 'Brembo',
    price: 89.99,
    originalPrice: 110.00,
    stock: 45,
    deliveryDays: 2,
    image: 'https://picsum.photos/seed/brakes/400/400',
    category: 'Тормозная система',
    compatibility: ['Audi A4', 'BMW 3 Series', 'Mercedes C-Class'],
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Синтетическое моторное масло 5W-30 5Л',
    sku: 'OIL-5W30-5L',
    brand: 'Castrol',
    price: 45.50,
    stock: 120,
    deliveryDays: 1,
    image: 'https://picsum.photos/seed/oil/400/400',
    category: 'Масла и жидкости',
    compatibility: ['Универсальное'],
    rating: 4.9,
    reviews: 856
  },
  {
    id: '3',
    name: 'Высокопроизводительная свеча зажигания',
    sku: 'SP-IR-4X',
    brand: 'NGK',
    price: 12.99,
    stock: 300,
    deliveryDays: 3,
    image: 'https://picsum.photos/seed/sparkplug/400/400',
    category: 'Зажигание',
    compatibility: ['Toyota Camry', 'Honda Accord', 'Ford Fusion'],
    rating: 4.7,
    reviews: 342
  },
  {
    id: '4',
    name: 'Воздушный фильтр',
    sku: 'AF-STD-101',
    brand: 'Bosch',
    price: 18.50,
    stock: 15,
    deliveryDays: 2,
    image: 'https://picsum.photos/seed/airfilter/400/400',
    category: 'Фильтры',
    compatibility: ['Volkswagen Golf', 'Skoda Octavia'],
    rating: 4.5,
    reviews: 89
  },
  {
    id: '5',
    name: 'Светодиодные лампы H7',
    sku: 'LED-H7-6K',
    brand: 'Philips',
    price: 55.00,
    originalPrice: 65.00,
    stock: 8,
    deliveryDays: 4,
    image: 'https://picsum.photos/seed/headlight/400/400',
    category: 'Освещение',
    compatibility: ['Универсальные H7'],
    rating: 4.6,
    reviews: 210
  },
  {
    id: '6',
    name: 'Передний амортизатор',
    sku: 'SA-FR-202',
    brand: 'Monroe',
    price: 115.00,
    stock: 0,
    deliveryDays: 7,
    image: 'https://picsum.photos/seed/shock/400/400',
    category: 'Подвеска',
    compatibility: ['Ford Focus', 'Mazda 3'],
    rating: 4.4,
    reviews: 56
  }
];

export const mockBrands = [
  { id: 'audi', name: 'Audi', logo: 'A' },
  { id: 'bmw', name: 'BMW', logo: 'B' },
  { id: 'mercedes', name: 'Mercedes-Benz', logo: 'M' },
  { id: 'volkswagen', name: 'Volkswagen', logo: 'V' },
  { id: 'toyota', name: 'Toyota', logo: 'T' },
  { id: 'honda', name: 'Honda', logo: 'H' },
  { id: 'ford', name: 'Ford', logo: 'F' },
  { id: 'hyundai', name: 'Hyundai', logo: 'Hy' },
];

export const mockCategories = [
  'Тормозная система', 'Фильтры', 'Масла и жидкости', 'Подвеска', 'Зажигание', 'Освещение', 'Детали двигателя', 'Выхлопная система'
];
