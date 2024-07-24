"use client";

import {Controller, FieldValues, UseControllerProps} from "react-hook-form";

import {Input, InputProps} from "../atoms/input";
import {Label} from "../atoms/Label";

export function InputRHF<FormType extends FieldValues>({
  title,
  control,
  rules,
  name,
  isRequired,
  ...props
}: UseControllerProps<FormType> &
  InputProps & {title: string; isRequired?: boolean}) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field, fieldState: {error}}) => (
        <div className="flex flex-col w-full">
          <Label className="mb-2">
            {title} {(!!rules?.required || isRequired) && "(*)"}
          </Label>
          <Input
            value={field.value}
            className="h-11"
            onChange={field.onChange}
            {...props}
          />
          {!!error?.message && (
            <p className="text-sm text-red-500">{error?.message}</p>
          )}
        </div>
      )}
    />
  );
}
