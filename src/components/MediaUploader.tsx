"use client";

import React, { useRef, useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { toast } from "sonner";
import { Upload, Trash2, RotateCcw, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { deleteImageFromCloudinary } from "@/lib/actions/delete-image-cloudinary.action";

interface MediaUploaderProps {
  value: string | null;
  onChange: (url: string | null) => void;
  folder: string;
}

const MediaUploader: React.FC<MediaUploaderProps> = ({
  value,
  onChange,
  folder,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [publicId, setPublicId] = useState<string | null>(null);
  const widgetRef = useRef<any>(null);

  const handleDelete = async () => {
    if (!publicId) {
      toast.error("Public ID not found!");
      return;
    }

    setIsDeleting(true);
    try {
      const response = await deleteImageFromCloudinary(publicId);
      if (response.success) {
        toast.success("Image deleted");
        onChange(null);
        setPublicId(null);
        setDimensions(null);
      } else {
        toast.error("Delete failed. Try again.");
      }
    } catch (err) {
      toast.error("Error deleting image");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleRetry = () => {
    if (widgetRef.current) {
      widgetRef.current?.open();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <CldUploadWidget
        uploadPreset="naan-o-kebab"
        options={{ multiple: false, resourceType: "image", folder }}
        onSuccess={(result: any, { widget }) => {
          const url = result.info.secure_url;
          onChange(url);
          setPublicId(result.info.public_id);
          setDimensions({
            width: result.info.width,
            height: result.info.height,
          });
          toast.success("Upload successful");
        }}
        onError={() => toast.error("Upload failed")}
        onAbort={() => toast.warning("Upload aborted")}
      >
        {({ open, widget }) => {
          widgetRef.current = widget;
          return value ? (
            <div className="relative cursor-pointer overflow-hidden rounded-md w-full max-w-lg">
              <CldImage
                src={value}
                alt="Uploaded Preview"
                width={dimensions?.width || 300}
                height={dimensions?.height || 300}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-md w-full"
              />
              {dimensions && (
                <p className="text-xs text-gray-500 mt-1">
                  {dimensions.width} x {dimensions.height}px
                </p>
              )}
              <div className="absolute top-2 right-2 flex gap-2">
                {widgetRef.current && (
                  <>
                    <Button
                      type="button"
                      size="icon"
                      className="w-8 h-8 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      onClick={handleDelete}
                      disabled={isDeleting}
                    >
                      {isDeleting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Trash2 className="w-5 h-5" />
                      )}
                    </Button>

                    <Button
                      type="button"
                      size="icon"
                      className="w-8 h-8 bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600"
                      onClick={handleRetry}
                    >
                      <RotateCcw className="w-5 h-5" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div
              className="border border-dashed p-4 flex flex-col items-center justify-center rounded-md cursor-pointer"
              onClick={() => open()}
            >
              <Upload className="w-6 h-6" />
              <p className="text-xs text-gray-500 mt-2">Click to upload</p>
            </div>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default MediaUploader;
