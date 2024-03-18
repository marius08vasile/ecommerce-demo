import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ErrorMessage from "@/components/form/ErrorMessage";

describe('ErrorMessage', () => {

  it('should have "Field is required" text', () => {
    render(<ErrorMessage error="Field is required" visible />);

    const text = screen.getByText("Field is required");

    expect(text).toBeInTheDocument();
  });

}); 