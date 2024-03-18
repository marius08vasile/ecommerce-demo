import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import SubmitButton from "@/components/form/SubmitButton";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn();

jest.mock('formik', () => ({
  useFormikContext: jest.fn().mockReturnValue({
    submitForm: () => mockSubmit(),
  }),
}));

describe('ErrorMessage', () => {

  it('should call submitForm on click', async () => {
    render(<SubmitButton title="Submit" />);

    const button = screen.getByText("Submit");
    await userEvent.click(button);

    expect(mockSubmit).toHaveBeenCalled();
  });

}); 