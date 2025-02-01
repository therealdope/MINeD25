import React, { useState } from "react";
import axios from "axios";

const Result = ({ fileName, formData }) => {
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerateAudio = async () => {
    if (!fileName) {
      alert("Please upload a PDF file first.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formDataObj = new FormData();
      formDataObj.append("pdf_file", fileName);
      formDataObj.append("age_range", formData.ageRange);
      formDataObj.append("occupation", formData.occupation);
      formDataObj.append("knowledge_level", formData.knowledgeLevel);
      formDataObj.append("duration", formData.duration);

      const response = await axios.post("https://your-aws-api-url/process_pdf", formDataObj, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob", // Ensures we get a file response
      });

      // Create a URL for the audio file
      const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
    } catch (err) {
      setError("Failed to generate the audio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-8">
      <button
        onClick={handleGenerateAudio}
        className="py-2 px-4 bg-blue-500 hover:bg-pink-500 text-white text-lg rounded-md"
        disabled={loading}
      >
        {loading ? "Processing..." : "Generate Audio"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {audioUrl && (
        <div className="mt-6">
          <p className="text-lg font-semibold">Generated Podcast:</p>
          <audio controls className="mt-4">
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <a
            href={audioUrl}
            download="podcast.mp3"
            className="block mt-4 text-blue-600 underline"
          >
            Download Audio
          </a>
        </div>
      )}
    </div>
  );
};

export default Result;
