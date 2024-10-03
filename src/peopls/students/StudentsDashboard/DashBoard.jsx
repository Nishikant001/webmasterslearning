import React, { useState, useEffect } from "react";
import axios from 'axios';
import Pyament from '../../../images/team/payment.jpg';
import girl from '../../../images/students/girl.jpg';
import boy from '../../../images/students/boy.jpg';

const StudentDashboard = () => {
  const URL='https://webmasters-backend-2.onrender.com'
  const [student, setStudent] = useState(null); // State to store student data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [result, setResult] = useState([]); // State to store student's results
  const [batchName, setBatchName] = useState(''); // State to store the student's batch name
  const [visibleResults, setVisibleResults] = useState(2); // Control the number of visible results

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fetch student data, result, and batch from API
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const studentId = localStorage.getItem('studentId'); // Get studentId from localStorage
        if (!studentId) {
          setError('No student ID found in localStorage.');
          setLoading(false);
          return;
        }
  
        // Make an API request to get student details
        const studentResponse = await axios.get(`${URL}/students/student/${studentId}`);
        setStudent(studentResponse.data); // Set student data
  
        // Fetch the result using the student ID
        const resultResponse = await axios.get(`${URL}/results/results/${studentId}`);
        setResult(resultResponse.data); // Set student result
  
        // Fetch batch data using the batch API
        const batchResponse = await axios.get(`${URL}/batch/batches`);
        const studentBatch = batchResponse.data.find((batch) =>
          batch.students.some((s) => s._id === studentId)
        );
        if (studentBatch) {
          setBatchName(studentBatch.name); // Set the batch name
        }
  
        setLoading(false);
      } catch (err) {
        // Check if it's a 404 error
        if (err.response && err.response.status === 404) {
          setResult([]); // Set result as empty to trigger "result coming soon" message
        } else {
          setError('Failed to fetch student details, results, or batch.');
        }
        setLoading(false);
      }
    };
  
    fetchStudentData();
  }, []);
  
  // Function to load more results (increments the visible results count)
  const loadMoreResults = () => {
    setVisibleResults((prevVisibleResults) => prevVisibleResults + 3);
  };

  if (loading) {
    return <div className="text-center text-gray-500 mt-16">Loading...</div>; // Show loading spinner or message
  }

  if (error) {
    return <div className="text-center text-red-500 mt-16">{error}</div>; // Show error message if something goes wrong
  }

  // Determine which placeholder image to show based on gender
  const getProfileImage = () => {
    if (student.gender === 'male') {
      return boy;
    } else if (student.gender === 'female') {
      return girl;
    }
    return "https://st5.depositphotos.com/20923550/70468/v/450/depositphotos_704686362-stock-illustration-cute-little-boy-hand-gesture.jpg"; // Default placeholder
  };

  return (
    student && (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 p-6">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden transform transition hover:scale-105 duration-300 ease-in-out mt-20 mb-10">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center p-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
            {/* Student Photo */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img
                src={student.photo || getProfileImage()}
                alt={`${student.name}'s profile`}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Student Info */}
            <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
              <h2 className="text-4xl font-bold">{student.name}</h2>
              <p className="text-lg mt-2">Age: {student.age}</p>
            </div>
          </div>

          {/* Remaining Fees Section */}
          <div className="bg-gray-100 p-8 mt-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Remaining Fees</h3>
            <p className="text-gray-600 text-lg">
              Your remaining fees amount is: <span className="font-bold text-purple-600">${student.remainingFees}</span>
            </p>
            <button
              className="mt-6 bg-purple-600 text-white py-3 px-6 rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              onClick={openModal}
            >
              Make Payment
            </button>
          </div>

          {/* // Student Result Section */}
<div className="bg-white mt-8 p-8 shadow-md rounded-2xl">
  <h3 className="text-3xl font-semibold text-gray-800 mb-6">Your Latest Exam Result</h3>
  {result && result.length > 0 ? (
    result.slice(0, visibleResults).map((res) => (
      <div
        key={res._id}
        className="bg-gradient-to-r from-blue-100 to-indigo-200 p-4 rounded-lg mb-4 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
      >
        <div className="flex justify-between">
          <span className="text-xl font-semibold text-gray-800">Marks Obtained: {res.marksObtained}</span>
          <span className="text-lg text-gray-700">Total Marks: {res.totalMarks}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xl font-semibold text-purple-600">Grade: {res.grade}</span>
          <span className="text-lg text-green-600">{res.status}</span>
        </div>
        <p className="mt-2 text-gray-600">Batch: {batchName || "N/A"}</p> {/* Display batch name */}
        <p className="mt-2 text-gray-600">{res.comments}</p>
      </div>
    ))
  ) : (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-lg shadow-lg text-white text-center">
      <h3 className="text-2xl font-bold">Your result is coming soon!</h3>
      <p className="mt-4 text-lg">Stay tuned for updates on your performance.</p>
    </div>
  )}

  {/* View More Button */}
  {result && visibleResults < result.length && (
    <button
      onClick={loadMoreResults}
      className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
    >
      View More
    </button>
  )}
</div>

        </div>

        {/* Payment Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-700">Make Payment</h2>
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <img
                src={Pyament} // Example image for the modal
                alt="Payment Modal"
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default StudentDashboard;
