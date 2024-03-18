import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import ProductCard from "@/components/ProductCard/ProductCard";

const mockData: ProductModels.client.CartProduct = {
  id: "00942dba-18f4-422c-8f21-2c854888479d",
  title: "The Power of Habit",
  price: 10,
  imageUrl: "https://libris.to/media/jacket/09188414_power-of-habit.jpg",
  quantity: 1
}

const mockAddCart = jest.fn((product: ProductModels.server.Product) => { });

describe('ProductCard', () => {

  describe('Render', () => {

    it('should render a image', () => {

      render(<ProductCard data={mockData} onAddCart={mockAddCart} />);

      const image = screen.getByTestId('product-image');

      expect(image).toBeInTheDocument();

    });

    it('should have "The Power of Habit" text', () => {

      render(<ProductCard data={mockData} onAddCart={mockAddCart} />);

      const text = screen.getByText('The Power of Habit');

      expect(text).toBeInTheDocument();

    });

    it('should render Add to cart button', () => {

      render(<ProductCard data={mockData} onAddCart={mockAddCart} />);

      const button = screen.getByTestId('btn-cart');

      expect(button).toBeInTheDocument();

    });

  });

  describe('Behavior', () => {

    it('should call onAddCart when Add to cart button is clicked', async () => {
      render(<ProductCard data={mockData} onAddCart={mockAddCart} />);

      const button = screen.getByTestId('btn-cart');
      await userEvent.click(button);

      expect(mockAddCart).toHaveBeenCalled();
    })

  });

});