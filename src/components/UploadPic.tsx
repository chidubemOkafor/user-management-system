'use client'
import { Dispatch, SetStateAction, useState } from "react";

interface classNameProp {
    className: string
    image: string | undefined
    setImage:  Dispatch<SetStateAction<string | undefined>>
}

const UploadPic: React.FC<classNameProp> = ({className, image, setImage}) => {
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
        setImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
        setImage(URL.createObjectURL(droppedFile));
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-full h-40 border-2 border-dashed rounded-md flex items-center justify-center ${
          dragActive ? "border-black bg-blue-50" : "border-gray-300"
        }`}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute opacity-0 w-full h-40 cursor-pointer"
        />
        {!image ? (
          <p className="text-gray-400">Drag & drop an image or click to upload</p>
        ) : (
          <img src={image} alt="Preview" className="object-cover w-full h-full rounded-md" />
        )}
      </div>
      {image && (
        <button
          onClick={() => setImage(" ")}
          className="mt-4 text-black bg-yellow-400 rounded px-4 py-2 w-full"
        >
          Remove Image
        </button>
      )}
    </div>
  );
};

export default UploadPic;
