'use client';

import useCartActions from "@/hooks/useCartActions";
import ProductCard from "../ProductCard/ProductCard";

type ProductListProps = {
  products: ProductModels.server.Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addProductInCart } = useCartActions();

  return (
    <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {products.length > 0 ? products.map(product =>
        <ProductCard
          key={product.id}
          data={product}
          onAddCart={addProductInCart}
        />) :
        <h1 className="text-center">No products available</h1>
      }
    </div>
  );
}

export default ProductList;
