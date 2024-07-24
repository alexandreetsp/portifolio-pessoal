"use client";

import {Controller, FieldValues, UseControllerProps} from "react-hook-form";

import {Label} from "@radix-ui/react-label";
import {Textarea} from "../atoms/TextArea";

export function TextAreaRHF<FormType extends FieldValues>({
  title,
  control,
  rules,
  name,
  isRequired,
  ...props
}: UseControllerProps<FormType> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    title: string;
    isRequired?: boolean;
  }) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field, fieldState: {error}}) => (
        <div className="flex flex-col space-y-3 w-full">
          <Label>
            {title} {(!!rules?.required || isRequired) && "(*)"}
          </Label>
          <Textarea value={field.value} onChange={field.onChange} {...props} />
          {!!error?.message && (
            <p className="text-sm text-red-500">{error?.message}</p>
          )}
        </div>
      )}
    />
  );
}
