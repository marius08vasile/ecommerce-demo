"use client";

import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";
import React from "react";

type Props = {
  name: string,
  label?: string,
  rows?: number,
  placeholder?: string,
  showError?: boolean,
  containerClassName?: string,
  onChange?: (value: string) => void,
}

const FormTextarea: React.FC<Props> = ({
  name,
  label,
  rows = 3,
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
        <textarea
          onBlur={() => helpers.setTouched(true)}
          onChange={(event) => {
            helpers.setValue(event.target.value);
            if (onChange) onChange(event.target.value);
          }}
          value={meta.value ? meta.value : ""}
          placeholder={placeholder}
          className="form-control mb-1"
          rows={rows}
        />
      </div>
      {showError &&
        <ErrorMessage error={meta.error} visible={meta.touched} />
      }
    </div>
  );
}

export default FormTextarea;
