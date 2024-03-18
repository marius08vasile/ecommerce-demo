import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ModalDeleteProduct from "@/components/modals/ModalDeleteProduct";
import userEvent from "@testing-library/user-event";
import CartProduct from "@/components/CartProduct/CartProduct";

const mockData: ProductModels.client.CartProduct = {
  id: "00942dba-18f4-422c-8f21-2c854888479d",
  title: "The Power of Habit",
  price: 10,
  imageUrl: "https://libris.to/media/jacket/09188414_power-of-habit.jpg",
  quantity: 1
}

const mockIncrement = jest.fn((id: string) => { });
const mockDecrement = jest.fn((id: string) => { });
const mockDelete = jest.fn((id: string) => { });

describe('CartProduct', () => {

  describe('Render', () => {

    it('should render a image', () => {

      render(
        <CartProduct
          data={mockData}
          onIncrement={mockIncrement}
          onDecrement={mockDecrement}
          onDelete={mockDelete}
        />
      );

      const image = screen.getByTestId('product-image');

      expect(image).toBeInTheDocument();

    });

    it('should have "The Power of Habit" text', () => {

      render(
        <CartProduct
          data={mockData}
          onIncrement={mockIncrement}
          onDecrement={mockDecrement}
          onDelete={mockDelete}
        />
      );

      const text = screen.getByText('The Power of Habit');

      expect(text).toBeInTheDocument();

    });

    it('should render increment button', () => {
      render(
        <CartProduct
          data={mockData}
          onIncrement={mockIncrement}
          onDecrement={mockDecrement}
          onDelete={mockDelete}
        />
      );

      const button = screen.getByTestId('increment-button');

      expect(button).toBeInTheDocument();
    });

    it('should render decrement button', () => {
      render(
        <CartProduct
          data={mockData}
          onIncrement={mockIncrement}
          onDecrement={mockDecrement}
          onDelete={mockDelete}
        />
      );

      const button = screen.getByTestId('decrement-button');

      expect(button).toBeInTheDocument();
    });

    it('should render remove button', () => {
      render(
        <CartProduct
          data={mockData}
          onIncrement={mockIncrement}
          onDecrement={mockDecrement}
          onDelete={mockDelete}
        />
      );

      const button = screen.getByTestId('remove-button');

      expect(button).toBeInTheDocument();
    });

  });

  describe('Behavior', () => {

    it('should call onIncrement when increment button is clicked', async () => {
      render(
        <CartProduct
          data={mockData}
          onIncrement={mockIncrement}
          onDecrement={mockDecrement}
          onDelete={mockDelete}
        />
      );

      const button = screen.getByTestId('increment-button');
      await userEvent.click(button);

      expect(mockIncrement).toHaveBeenCalled();
    });

    it('should call onDecrement when decrement button is clicked', async () => {
      render(
        <CartProduct
          data={mockData}
          onIncrement={mockIncrement}
          onDecrement={mockDecrement}
          onDelete={mockDelete}
        />
      );

      const button = screen.getByTestId('decrement-button');
      await userEvent.click(button);

      expect(mockDecrement).toHaveBeenCalled();
    });

    it('should call onDelete when remove button is clicked', async () => {
      render(
        <CartProduct
          data={mockData}
          onIncrement={mockIncrement}
          onDecrement={mockDecrement}
          onDelete={mockDelete}
        />
      );

      const button = screen.getByTestId('remove-button');
      await userEvent.click(button);

      expect(mockDelete).toHaveBeenCalled();
    });

  });

});