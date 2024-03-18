import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import CheckoutForm from "@/app/cart/CheckoutForm";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn((values: object) => { })

describe('CheckoutForm', () => {

  describe('Render', () => {
    it('should render 5 inputs', async () => {
      render(<CheckoutForm onSubmit={mockSubmit} total={100} />);

      const allInputs = await screen.findAllByRole('textbox');

      expect(allInputs.length).toBe(5);
    });

    it('should render Place order button', async () => {
      render(<CheckoutForm onSubmit={mockSubmit} total={100} />);

      const button = screen.getByText("Place order")

      expect(button).toBeInTheDocument();
    });
  });

  describe('Behavior', () => {

    it('should not call onSubmit', async () => {
      render(<CheckoutForm onSubmit={mockSubmit} total={100} />);

      const button = screen.getByText("Place order");
      await userEvent.click(button);

      expect(mockSubmit).toHaveBeenCalledTimes(0);
    });

    it('should have "Email is a required field" text', async () => {
      render(<CheckoutForm onSubmit={mockSubmit} total={100} />);

      const button = screen.getByText("Place order");
      await userEvent.click(button);

      const message = screen.getByText("Email is a required field");

      expect(message).toBeInTheDocument();
    });

    it('should call onSubmit when user click on Place order button', async () => {
      render(<CheckoutForm onSubmit={mockSubmit} total={100} />);

      const allInputs = await screen.findAllByRole('textbox');
      await userEvent.type(allInputs[0], 'John');
      await userEvent.type(allInputs[1], 'Doe');
      await userEvent.type(allInputs[2], 'johndoe@example.com');
      await userEvent.type(allInputs[3], '+40722222222');
      await userEvent.type(allInputs[4], 'Apt. 400 70051 Stoltenberg Branch, Shaborough, TX 82811');

      const button = screen.getByText("Place order");
      await userEvent.click(button);

      await waitFor(() =>
        expect(mockSubmit).toHaveBeenCalledWith({
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@example.com',
          phone: '+40722222222',
          address: 'Apt. 400 70051 Stoltenberg Branch, Shaborough, TX 82811'
        }),
      )
    });

  });
});