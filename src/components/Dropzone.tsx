"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Plus, Trash, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DropzoneProps {
  value: string | null;
  onChange: (base64: string | null) => void;
  fieldName?: string;
  className?: string;
}

const Dropzone: React.FC<DropzoneProps> = ({
  value,
  onChange,
  fieldName = "Upload Image Here",
  className,
}) => {
  const [acceptedFile, setAcceptedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (files: File[]) => {
      if (files.length > 0) {
        const file = files[0];
        setAcceptedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            onChange(reader.result); // base64 string
          }
        };
        reader.readAsDataURL(file);
      }
    },
    [onChange]
  );

  const removeFile = useCallback(() => {
    setAcceptedFile(null);
    onChange(null);
  }, [onChange]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
      "image/svg+xml": [".svg"],
    },
    onDrop,
    multiple: false,
  });

  const baseStyle =
    "relative flex flex-col justify-center items-center h-20 p-2 border-2 border-muted border-dashed text-muted-foreground transition duration-300 ease-in-out cursor-pointer";
  const focusedStyle = isDragActive && "border-blue-500 transition duration-300 ease-in-out";
  const acceptStyle = isDragAccept && "border-green-500 transition duration-300 ease-in-out";
  const rejectStyle = isDragReject && "border-red-500 transition duration-300 ease-in-out";

  const style = cn(
    baseStyle,
    focusedStyle,
    acceptStyle,
    rejectStyle,
    className
  );

  return (
    <div>
      {value ? (
        <div className="relative group overflow-hidden">
          <Button
            style={{ position: "absolute", top: 5, right: 5 }}
            className="bg-secondary-2 p-2 rounded-full group-hover:scale-105 scale-100 opacity-0 group-hover:opacity-100 group"
            onClick={removeFile}
          >
            <Trash className="w-4 h-4" />
          </Button>
          <img
            src={value}
            alt="Preview"
            className="object-contain w-full h-full"
          />
        </div>
      ) : (
        <div {...getRootProps()} className={style}>
          <input {...getInputProps()} />

          <Upload className="w-4 h-4 text-muted-foreground" />
          <p>{isDragActive ? "Drop the image here" : fieldName}</p>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
