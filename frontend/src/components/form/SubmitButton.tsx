import { useFormikContext } from "formik";
import { Button } from "react-bootstrap";

type Props = {
  title: string,
  className?: string,
  disabled?: boolean,
}

const SubmitButton: React.FC<Props> = ({ title, className = "", disabled }) => {
  const { submitForm } = useFormikContext();

  return (
    <Button
      className={className}
      onClick={submitForm}
      disabled={disabled}
    >
      {title}
    </Button>
  );
}

export default SubmitButton;