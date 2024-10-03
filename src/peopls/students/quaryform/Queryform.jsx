import React, { useState, useEffect } from "react";
import axios from "axios";

const QueryForm = () => {
  const URL='https://webmasters-backend-2.onrender.com'
  const [formData, setFormData] = useState({
    message: "",
    studentId: "", // This will be set from localStorage
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Fetch studentId from localStorage when the component mounts
  useEffect(() => {
    const storedStudentId = localStorage.getItem("studentId");
    if (storedStudentId) {
      setFormData((prevData) => ({
        ...prevData,
        studentId: storedStudentId,
      }));
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission with Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(`${URL}/students/submit-query`, formData);
      
      console.log("Form Data: ", formData); // Log formData to ensure studentId is present

      if (response.status !== 201) {
        throw new Error("Failed to submit the query");
      }

      setSuccess(true);
      console.log("Response Data: ", response.data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Submit Your Query</h2>
        <form onSubmit={handleSubmit}>
          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your query here..."
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 text-red-600">
              <p>{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mt-4 text-green-600">
              <p>Query submitted successfully!</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default QueryForm;
