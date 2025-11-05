"use client";

import { ChangeEvent, ReactNode, useRef } from "react";

export function FileUpload({
  setFile,
  accept,
  children,
}: {
  setFile: (file: any) => void;
  accept: string;
  children: ReactNode;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) setFile(selectedFile);
    else setFile(null);
  };

  const handleClick = () => {
    if (inputRef.current) inputRef.current.click();
    else console.log("File upload failed");
  };

  return (
    <div onClick={handleClick} className="inline-flex">
      <input
        ref={inputRef!}
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
      />
      {children}
    </div>
  );
}
