import React, { useState } from 'react';
import FileUpload from './FileUpload';
import InputForm from './InputForm';
import Result from './Result';

const Paper = () => {
  const [formData, setFormData] = useState({
    ageRange: '',
    occupation: '',
    otherOccupation: '',
    knowledgeLevel: '',
    duration: '',
  });

  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRemoveFile = () => {
    setUploaded(false);
    setFileName('');
    setFileSize(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!uploaded || !fileName) {
      alert('Please upload a PDF file before submitting.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <nav className="w-full min-h-20 fixed top-0 left-0 px-8 py-4 flex items-center justify-between bg-opacity-50 backdrop-blur-sm shadow-md shadow-rose-50 z-10 bg-white">
        <div className="text-[1.3rem] text-blue-600 hover:text-pink-600">
          <a href="/">Deadline Disco</a>
        </div>
        <div className="">
          <h1 className="text-center text-xl text-pink-600 font-extrathin underline">Podcast Generator</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row justify-around mt-28 p-6 gap-8">
        <FileUpload
          uploaded={uploaded}
          setUploaded={setUploaded}
          fileName={fileName}
          setFileName={setFileName}
          fileSize={fileSize}
          setFileSize={setFileSize}
          handleRemoveFile={handleRemoveFile}
        />
        <div className="w-full md:w-1/2">
          <InputForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>
      </main>

      {/* Results */}
      <div className="mt-10 p-4">
        <div className="border-gray-400 border-b mb-6"></div>
        {submitted && <Result fileName={fileName} formData={formData} />}
      </div>
    </div>
  );
};

export default Paper;
