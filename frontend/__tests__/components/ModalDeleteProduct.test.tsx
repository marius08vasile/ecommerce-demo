import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ModalDeleteProduct from "@/components/modals/ModalDeleteProduct";
import userEvent from "@testing-library/user-event";

const mockData: ProductModels.client.CartProduct = {
  id: "00942dba-18f4-422c-8f21-2c854888479d",
  title: "The Power of Habit",
  price: 10,
  imageUrl: "https://libris.to/media/jacket/09188414_power-of-habit.jpg",
  quantity: 1
}

const mockOnConfirm = jest.fn((productId: string) => { });
const mockOnCancel = jest.fn();

describe('ModalDeleteProduct', () => {

  describe('Render', () => {

    it('should render a image', () => {

      render(<ModalDeleteProduct
        data={mockData}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />);

      const image = screen.getByTestId('product-image');

      expect(image).toBeInTheDocument();

    });

    it('should have "The Power of Habit" text', () => {

      render(<ModalDeleteProduct
        data={mockData}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />);

      const title = screen.getByText(mockData.title);

      expect(title).toBeInTheDocument();

    });

    it('should render confirm button', () => {

      render(<ModalDeleteProduct
        data={mockData}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />);

      const button = screen.getByTestId('confirm-button');

      expect(button).toBeInTheDocument();

    });

    it('should render cancel button', () => {

      render(<ModalDeleteProduct
        data={mockData}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />);

      const button = screen.getByTestId('cancel-button');

      expect(button).toBeInTheDocument();

    });

  });

});