import { useAppSelector } from "@/store/hooks";
import { useMemo } from "react";

const useCartState = () => {
  const cartProducts = useAppSelector(state => state.cart.products);
  const cartCount = useMemo(() => {
    let cartProductsCount = 0;
    cartProducts.map(product => cartProductsCount += product.quantity);
    return cartProductsCount;
  }, [cartProducts]);

  const cartTotal = useMemo(() => {
    let sum = 0;
    cartProducts.map(product => sum += (product.quantity * product.price));
    return sum;
  }, [cartProducts]);

  return {
    cartProducts,
    cartCount,
    cartTotal,
  }
}

export default useCartState;
