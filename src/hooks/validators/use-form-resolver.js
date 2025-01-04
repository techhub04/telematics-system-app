import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
 

const useFormResolver = (schema,mode) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: mode, // It can be customized as 'onChange', 'onBlur', etc.
  });

  return methods;
};

export default useFormResolver;
