'use client';

import CartProduct from "@/components/CartProduct/CartProduct";
import ModalDeleteProduct from "@/components/modals/ModalDeleteProduct";
import useCartActions from "@/hooks/useCartActions";
import useCartState from "@/hooks/useCartState";
import Link from "next/link";
import { useState } from "react";

const ProductsList = () => {
  const { cartProducts } = useCartState();
  const { incrementQuantity, decrementQuantity, removeProduct } = useCartActions();

  const [idProductDelete, setIdProductDelete] = useState<string | null>(null);
  const productDelete = idProductDelete ? cartProducts.find(product => product.id === idProductDelete) : null;

  return (
    <>
      <div className={`${cartProducts.length > 0 ? "col-md-8" : ""} cart`}>
        <div className="title">
          <div className="row">
            <div className="col"><h4><b>Shopping Cart</b></h4></div>
          </div>
        </div>
        {cartProducts.length > 0 ? cartProducts.map(product =>
          <CartProduct
            key={product.id}
            data={product}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onDelete={setIdProductDelete}
          />) : <h2 className="text-center pt-4">Your shopping cart is empty!</h2>}
        <div className="back-to-shop">
          <Link href="/">
            {'<- '}<span className="text-muted">Back to shop</span>
          </Link>
        </div>
      </div>
      {productDelete &&
        <ModalDeleteProduct
          data={productDelete}
          onConfirm={removeProduct}
          onCancel={() => {
            setIdProductDelete(null)
          }}
        />
      }
    </>
  );
}

export default ProductsList;