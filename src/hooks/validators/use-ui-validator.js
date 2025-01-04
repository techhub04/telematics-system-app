import { useState, useCallback } from "react";
import * as Yup from "yup";

const useUIValidator = (schema) => {
  const [errors, setErrors] = useState();

  const validate = useCallback(
    async (values) => {
      try {
        await schema.validate(values, { abortEarly: false });
        setErrors([]);
        return true;
      } catch (validationError) {
        const newErrors = {};
        validationError.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
        setErrors(newErrors);
        return false; // Validation failed
      }
    },
    [schema]
  );

  return { validate, errors };
};

export default useUIValidator;
