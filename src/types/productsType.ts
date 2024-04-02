interface Brand {
  brandName: string;
  brandPhoto: string;
  brandId: string;
}

interface Category {
  categoryName: string;
  categoryPhoto: string;
  categoryId: string;
}

interface Variant {
  isDefault: boolean;
  variantName: string;
  variantPhotos: string[];
  inStock: number;
  stockAlert: number;
  sellingPrice: number;
  discountPercentage: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
  discountedPrice: number;
  soldQuantity: number;
}

export interface IProduct {
  _id: string;
  productName: string;
  brand: Brand;
  category: Category;
  productPhotos: string[];
  variants: Variant[];
  series: string;
  productModel: string;
  __v: number;
  createdAt: string;
  totalReview: number;
  averageRating: number | null;
  totalSoldQuantity: number;
}
