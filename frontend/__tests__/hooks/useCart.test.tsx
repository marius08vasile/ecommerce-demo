import { renderHook, act } from '@testing-library/react';
import StoreProvider from '@/store/StoreProvider';
import useCartState from '@/hooks/useCartState';
import useCartActions from '@/hooks/useCartActions';

type Props = {
  children: React.ReactNode
}

const wrapper: React.FC<Props> = ({ children }) => {
  return (
    <StoreProvider>{children}</StoreProvider>
  );
}

const mockProducts: ProductModels.server.Product[] = [
  {
    id: "00942dba-18f4-422c-8f21-2c854888479d",
    title: "The Power of Habit",
    price: 10,
    imageUrl: "https://libris.to/media/jacket/09188414_power-of-habit.jpg",
  },
  {
    id: "fab81b55-6b28-4085-909a-b0163a2a5bb1",
    title: "Mindset",
    price: 20,
    imageUrl: "https://cdn.dc5.ro/img-prod/1977077-0.jpeg"
  },
];

describe('useCart', () => {

  it('should be empty array', () => {
    const { result } = renderHook(() => useCartState(), { wrapper });

    expect(result.current.cartProducts.length).toBe(0);
  });

  it('should contain one element', () => {
    const { result } = renderHook(() => {
      return {
        cartState: useCartState(),
        cartActions: useCartActions(),
      }
    }, { wrapper });

    const { cartActions } = result.current;

    act(() => {
      cartActions.addProductInCart(mockProducts[0]);
    });

    expect(result.current.cartState.cartProducts.length).toBe(1);
  });

  test('if cartCount is 1', () => {
    const { result } = renderHook(() => {
      return {
        cartState: useCartState(),
        cartActions: useCartActions(),
      }
    }, { wrapper });

    const { cartActions } = result.current;

    act(() => {
      cartActions.addProductInCart(mockProducts[0]);
    });

    expect(result.current.cartState.cartCount).toBe(1);
  });

  test('if cartTotal is 20', () => {
    const { result } = renderHook(() => {
      return {
        cartState: useCartState(),
        cartActions: useCartActions(),
      }
    }, { wrapper });

    const { cartActions } = result.current;

    act(() => {
      cartActions.addProductInCart(mockProducts[0]);
    });

    act(() => {
      cartActions.incrementQuantity(mockProducts[0].id);
    });

    expect(result.current.cartState.cartTotal).toBe(20);
  });

  test('if cart is empty', () => {
    const { result } = renderHook(() => {
      return {
        cartState: useCartState(),
        cartActions: useCartActions(),
      }
    }, { wrapper });

    const { cartActions } = result.current;

    act(() => {
      cartActions.addProductInCart(mockProducts[0]);
    });

    act(() => {
      cartActions.addProductInCart(mockProducts[1]);
    });

    act(() => {
      cartActions.resetCart();
    });

    expect(result.current.cartState.cartCount).toBe(0);
  });

  test('if cartCount is 0', () => {
    const { result } = renderHook(() => {
      return {
        cartState: useCartState(),
        cartActions: useCartActions(),
      }
    }, { wrapper });

    const { cartActions } = result.current;

    act(() => {
      cartActions.addProductInCart(mockProducts[0]);
    });

    act(() => {
      cartActions.removeProduct(mockProducts[0].id);
    });

    expect(result.current.cartState.cartCount).toBe(0);
  });

  test('if cartCount is 2', () => {
    const { result } = renderHook(() => {
      return {
        cartState: useCartState(),
        cartActions: useCartActions(),
      }
    }, { wrapper });

    const { cartActions } = result.current;

    act(() => {
      cartActions.addProductInCart(mockProducts[0]);
    });

    act(() => {
      cartActions.incrementQuantity(mockProducts[0].id);
    });

    act(() => {
      cartActions.incrementQuantity(mockProducts[0].id);
    });

    act(() => {
      cartActions.decrementQuantity(mockProducts[0].id);
    });

    expect(result.current.cartState.cartCount).toBe(2);
  });
});