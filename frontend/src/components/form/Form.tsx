'use client';
import { Formik } from 'formik';
import React from 'react';

type Props = {
  initialValues: Object,
  onSubmit: (values: Object) => void,
  validationSchema: Object,
  children?: JSX.Element | JSX.Element[],
  resetOnSubmit?: boolean,
  enableReinitialize?: boolean
};

const Form: React.FC<Props> = ({ initialValues, onSubmit, validationSchema, children, resetOnSubmit, enableReinitialize }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        if (resetOnSubmit) resetForm();
      }}
      validationSchema={validationSchema}
      enableReinitialize={enableReinitialize}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default Form;