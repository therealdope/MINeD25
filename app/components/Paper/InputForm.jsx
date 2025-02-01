import React from 'react';

const InputForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold">Age Range:</label>
        <select
          name="ageRange"
          value={formData.ageRange}
          onChange={handleInputChange}
          className="w-full border rounded-md p-2"
          required
        >
          <option value="">Select Age Range</option>
          <option value="Child">Child (5-12 years)</option>
          <option value="Teenager">Teenager/Young Adult (13-18 years)</option>
          <option value="Adult">Adult (19-40 years)</option>
          <option value="Senior">Senior (50+ years)</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold">Occupation:</label>
        <select
          name="occupation"
          value={formData.occupation}
          onChange={handleInputChange}
          className="w-full border rounded-md p-2"
          required
        >
          <option value="">Select Occupation</option>
          <option value="Student">Student</option>
          <option value="Professional">Professional</option>
          <option value="Researcher">Researcher/Scientist</option>
          <option value="Professor">Professor/Academician</option>
          <option value="Entrepreneur">Entrepreneur/Businessperson</option>
          <option value="Healthcare">Healthcare Worker</option>
          <option value="Developer">Developer/Programmer</option>
          <option value="Other">Other</option>
        </select>
        {formData.occupation === 'Other' && (
          <input
            type="text"
            name="otherOccupation"
            value={formData.otherOccupation}
            onChange={handleInputChange}
            placeholder="Please specify"
            className="w-full border rounded-md p-2 mt-2"
            required
          />
        )}
      </div>

      <div>
        <label className="block text-gray-700 font-semibold">Knowledge Level:</label>
        <select
          name="knowledgeLevel"
          value={formData.knowledgeLevel}
          onChange={handleInputChange}
          className="w-full border rounded-md p-2"
          required
        >
          <option value="">Select Knowledge Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold">Duration (for the Script):</label>
        <select
        name="duration"
        value={formData.duration}
        onChange={handleInputChange}
        className="w-full border rounded-md p-2"
        required
      >
        <option value="">Select Duration in Minutes</option>
        <option value="Very Short">1 min</option>
        <option value="Short">3 min</option>
        <option value="Intermediate">5 min (Subscription required)</option>
        <option value="Long">10 min (Subscription required)</option>
      </select>

      </div>

      <button type="submit" className="py-2 px-4 bg-blue-500 hover:bg-pink-500 text-white text-lg rounded-md">
        Submit
      </button>
    </form>
  );
};

export default InputForm;