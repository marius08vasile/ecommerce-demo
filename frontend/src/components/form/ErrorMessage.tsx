import React from "react";

type Props = {
  error?: string,
  visible?: boolean,
  style?: object
}

const ErrorMessage: React.FC<Props> = ({ error, visible, style = {} }) => {
  if (!visible || !error) return null;
  return <small className="text-danger" style={{ ...style }}>{error}</small>;
}

export default ErrorMessage;