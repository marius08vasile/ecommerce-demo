import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ProductList from "@/components/ProductList/ProductList";
import StoreProvider from "@/store/StoreProvider";

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
]

describe('ProductList', () => {

  it('should render "No products available" when the array is empty', () => {
    render(
      <StoreProvider>
        <ProductList products={[]} />
      </StoreProvider>
    );

    const message = screen.getByText("No products available");

    expect(message).toBeInTheDocument();
  });

  it('should render a list with the correct number of items', () => {
    render(
      <StoreProvider>
        <ProductList products={mockProducts} />
      </StoreProvider>
    );

    const productsArray = screen.getAllByTestId('product-item');

    expect(productsArray.length).toBe(2);
  });

  it('should render the products in the correct order', () => {
    render(
      <StoreProvider>
        <ProductList products={mockProducts} />
      </StoreProvider>
    );

    const firstItem = screen.getAllByTestId('product-item')[0];

    expect(firstItem).toHaveTextContent("The Power of Habit");
  });

});