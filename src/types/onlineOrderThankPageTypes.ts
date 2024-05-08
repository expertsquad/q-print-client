interface Brand {
  brandName: string;
  brandId: string;
}

interface Bulk {
  minOrder: number;
  discount: number;
}

interface Subcategory {
  subcategoryName: string;
  subcategoryId: string;
}

interface Category {
  subcategory: Subcategory;
  categoryName: string;
  categoryId: string;
  _id: string;
}

interface Variant {
  variantName: string;
  sellingPrice: number;
  discountPercentage: number;
  discountedPrice: number;
  _id: string;
}

export interface OrderItem {
  brand: Brand;
  bulk: Bulk;
  productName: string;
  productPhotos: string[];
  productId: string;
  category: Category;
  variant: Variant;
  orderQuantity: number;
  bulkDiscountAmount: number;
  subTotalPayable: number;
  warranty: string;
  isReviewed: boolean;
  _id: string;
  id: string;
}

export interface OnlineOrderThankYouPageType {
  orderItems: OrderItem[];
}
