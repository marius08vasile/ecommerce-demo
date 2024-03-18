'use client';

import Header from "@/components/Header/Header";
import Container from "../_layout/Container";
import './styles.scss';
import ProductsList from "./ProductsList";
import CheckoutForm from "./CheckoutForm";
import useApi from "@/hooks/useApi";
import { placeOrderApi } from "@/api/cart";
import { useState } from "react";
import Link from "next/link";
import useCartActions from "@/hooks/useCartActions";
import useCartState from "@/hooks/useCartState";

const CartPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { cartProducts, cartTotal } = useCartState();
  const { resetCart } = useCartActions();

  const placeOrder = useApi({
    apiFunc: placeOrderApi
  });

  const handleSubmit = async (personalInfo: object) => {
    const postData = {
      personalInfo,
      products: cartProducts,
    }

    const response = await placeOrder.request({ postData });

    if (!response.ok) return;
    setIsSuccess(true);
    resetCart();
  }

  if (isSuccess) return (
    <Container>
      <div className="order-success-card text-center pt-4">
        <div className="checked-container">
          <span>✓</span>
        </div>
        <h1>Success</h1>
        <p>We received your purchase request;<br /> we&apos;ll be in touch shortly!</p>
        <Link href="/">{"<-"} Back to shop</Link>
      </div>
    </Container>
  );

  return (
    <>
      <Header
        title="Cart"
      />
      <Container>
        <div className="cart-page">
          <div className="card">
            <div className="row">
              <ProductsList />
              {cartProducts.length > 0 && cartTotal &&
                <CheckoutForm
                  onSubmit={handleSubmit}
                  total={cartTotal}
                  loading={placeOrder.loading}
                />
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CartPage;
