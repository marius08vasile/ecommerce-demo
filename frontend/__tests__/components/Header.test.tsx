import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "@/components/Header/Header";

describe('Header', () => {

  it('should render an h1', () => {
    const title = "Header title";
    render(<Header title={title} />);

    const h1 = screen.getByText(title);

    expect(h1).toBeInTheDocument();
  });

  it('should render an paragraph', () => {
    const description = "some description";
    render(<Header title="Header titlex" description={description} />);

    const paragraph = screen.getByText(description);

    expect(paragraph).toBeInTheDocument();
  });

}); 