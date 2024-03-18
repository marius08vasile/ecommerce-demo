import { CartActions } from "@/store/features/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { toast } from "react-toastify";

const useCartActions = () => {
  const dispatch = useAppDispatch();

  const addProductInCart = (product: ProductModels.server.Product) => {
    dispatch(CartActions.addProduct(product));
    toast.success("Product added in cart!", { autoClose: 500 });
  }

  const incrementQuantity = (productId: string) => {
    dispatch(CartActions.incrementQuantity(productId));
  }

  const decrementQuantity = (productId: string) => {
    dispatch(CartActions.decrementQuantity(productId));
  }

  const removeProduct = (productId: string) => {
    dispatch(CartActions.removeItem(productId));
  }

  const resetCart = () => {
    dispatch(CartActions.resetCartState());
  }

  return {
    addProductInCart,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    resetCart,
  }
}

export default useCartActions;
