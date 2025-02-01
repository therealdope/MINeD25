import React, { useState } from "react";
import axios from "axios";

const Result = ({ file, formData }) => {
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerateAudio = async () => {
    if (!file) {
      alert("Please upload a PDF file first.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formDataObj = new FormData();
      formDataObj.append("pdf_file", file);
      formDataObj.append("age_range", formData.ageRange);
      formDataObj.append("occupation", formData.occupation);
      formDataObj.append("knowledge_level", formData.knowledgeLevel);
      formDataObj.append("duration", formData.duration);

      const response = await axios.post(
        "http://ec2-50-19-41-188.compute-1.amazonaws.com:5000/process_pdf",
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
          responseType: "blob",
        }
      );

      const contentType = response.headers["content-type"];
      if (contentType.includes("application/json")) {
        const errorText = await response.data.text();
        throw new Error(errorText);
      }

      const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
    } catch (err) {
      console.error("Audio Generation Error:", err);
      setError("⚠️ Failed to generate the audio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-10 p-6">
      <button
        onClick={handleGenerateAudio}
        className="px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Processing..." : "Generate Audio"}
      </button>

      {error && (
        <p className="mt-4 text-red-600 bg-red-100 px-4 py-2 rounded-lg border border-red-400 shadow-sm">
          {error}
        </p>
      )}

      {audioUrl && (
        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg w-full max-w-md text-center">
          <p className="text-xl font-semibold text-pink-500 mb-4">
            🎧 Your Podcast is Ready!
          </p>
          <audio controls className="w-full rounded-md shadow-sm">
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <a
            href={audioUrl}
            download="podcast.mp3"
            className="block mt-4 px-4 py-2  text-blue-500 underline font-medium rounded-md hover:text-blue-700 transition duration-300"
          >
          Download Audio
          </a>
        </div>
      )}
    </div>
  );
};

export default Result;
