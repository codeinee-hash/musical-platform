import { ChangeEvent, useState } from "react";

export const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  };

  return {
    value,
    onChange,
    setValue,
  };
};
