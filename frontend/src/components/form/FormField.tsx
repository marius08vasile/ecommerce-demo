"use client";

import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";
import React from "react";

type Props = {
  name: string,
  label?: string,
  type?: string,
  placeholder?: string,
  showError?: boolean,
  containerClassName?: string,
  onChange?: (value: string) => void,
}

const FormField: React.FC<Props> = ({
  name,
  label,
  type = "text",
  placeholder = "",
  showError = true,
  containerClassName = "",
  onChange
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className={containerClassName}>
      {label && <label>{label}</label>}
      <div>
        <input
          onBlur={() => helpers.setTouched(true)}
          onChange={(event) => {
            helpers.setValue(event.target.value);
            if (onChange) onChange(event.target.value);
          }}
          value={meta.value ? meta.value : ""}
          type={type}
          placeholder={placeholder}
          className="form-control mb-1"
        />
      </div>
      {showError &&
        <ErrorMessage error={meta.error} visible={meta.touched} />
      }
    </div>
  );
}

export default FormField;
