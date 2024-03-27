interface Brand {
  brandName: string;
  brandId: string;
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
  discountPercentage?: number;
  discountedPrice?: number;
  _id: string;
}

export interface OrderedItemsTypes {
  brand: Brand;
  productName: string;
  productPhotos: string[];
  productId: string;
  category: Category;
  variant: Variant;
  orderQuantity: number;
  subTotalPayable: number;
  isReviewed: boolean;
  _id: string;
  id: string;
}
