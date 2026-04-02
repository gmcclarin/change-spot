// components/Form.tsx
import { type ReactNode } from "react";
import {
  useForm,
  type SubmitHandler,
  FormProvider,
  type UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodType, TypeOf } from "zod";

interface FormProps<T extends ZodType<any, any>> {
  schema: T;
  defaultValues?: Partial<TypeOf<T>>;
  onSubmit: (values: TypeOf<T>) => void;
  children: ReactNode;
  formMethods?: UseFormReturn<TypeOf<T>>;
}

export function Form<T extends ZodType<any, any>>({
  schema,
  defaultValues,
  onSubmit,
  children,
}: FormProps<T>) {
  // Initialize form if not provided
  const methods =
    useForm<TypeOf<T>>({
      resolver: zodResolver(schema) as any, // TS workaround, safe
      defaultValues: defaultValues as TypeOf<T> | undefined,
    });

  const handleSubmit: SubmitHandler<TypeOf<T>> = (values) => {
    onSubmit(values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  );
}