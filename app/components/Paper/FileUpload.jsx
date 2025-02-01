import { useDropzone } from 'react-dropzone';
import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const FileUpload = ({ uploaded, setUploaded, file, setFile, handleRemoveFile }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const selectedFile = acceptedFiles[0];
        setUploaded(true);
        setFile(selectedFile); // Store actual file instead of just name and size
      }
    },
    accept: '.pdf', // Accept only PDF files
    multiple: false, // Allow only one file at a time
  });

  return (
    <div className={`border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg w-full md:w-96 ${isDragActive ? 'bg-gray-200/60' : ''}`}>
      <div className="text-center">
        {!uploaded ? (
          <div
            {...getRootProps()}
            className="rounded-md p-8 text-center cursor-pointer"
          >
            <p className="text-lg font-semibold text-gray-700">Drag & Drop a PDF or Click to Upload</p>
            <input {...getInputProps()} />
            <button
              type="button"
              className="bg-blue-500 hover:bg-purple-500 text-white mt-8 px-4 py-2 rounded-md"
            >
              Upload PDF
            </button>
          </div>
        ) : (
          <div className="p-3 bg-white border rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaFilePdf className="text-red-500 mr-2" size={24} />
                {/* Safe check for file object */}
                {file && (
                  <p className="text-lg font-semibold text-gray-800 overflow-hidden text-ellipsis max-w-[200px] whitespace-nowrap">
                    {file.name} | {(file.size / 1024).toFixed(2)} KB
                  </p>
                )}
              </div>
              <button onClick={handleRemoveFile} className="text-red-500 font-semibold">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
