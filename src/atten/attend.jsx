import React, { useState } from "react";
import { jsPDF } from "jspdf";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample batches and students data
const batches = [
  { id: 1, name: "Batch A", course: "React Basics", students: ["John Doe", "Jane Smith", "Alice Brown", "Bob White"] },
  { id: 2, name: "Batch B", course: "JavaScript Mastery", students: ["Chris Evans", "David Lee", "Eve Taylor", "Frank Clark"] },
];

// Colors for the pie chart segments
const COLORS = ["#4CAF50", "#FF6347"]; // Green for Present, Red for Absent

const StudentAttendance = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [date, setDate] = useState("");
  const [attendance, setAttendance] = useState({});
  const [attendanceRecords, setAttendanceRecords] = useState({});

  // Handle attendance status for each student
  const handleAttendance = (student, status) => {
    setAttendance((prevState) => ({
      ...prevState,
      [student]: status,
    }));
  };

  // Submit Attendance
  const submitAttendance = () => {
    const batchName = selectedBatch.name;
    const newRecords = { ...attendanceRecords };

    selectedBatch.students.forEach((student) => {
      if (!newRecords[student]) {
        newRecords[student] = [];
      }
      newRecords[student].push({
        date,
        status: attendance[student] || "Absent",
        batch: batchName,
        course: selectedBatch.course,
      });
    });

    setAttendanceRecords(newRecords);
    alert("Attendance Submitted");
  };

  // Generate PDF for student attendance
  const generatePdf = (student) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Attendance Record for ${student}`, 20, 20);

    const studentRecords = attendanceRecords[student] || [];
    let y = 40;
    doc.setFontSize(12);
    doc.text(`Date`, 20, y);
    doc.text(`Status`, 60, y);
    doc.text(`Batch`, 100, y);
    doc.text(`Course`, 140, y);

    y += 10;
    studentRecords.forEach((record) => {
      doc.text(record.date, 20, y);
      doc.text(record.status, 60, y);
      doc.text(record.batch, 100, y);
      doc.text(record.course, 140, y);
      y += 10;
    });

    doc.save(`${student}_attendance.pdf`);
  };

  // Prepare data for the graph (Pie and Bar chart)
  const attendanceStats = selectedBatch
    ? selectedBatch.students.reduce(
        (acc, student) => {
          if (attendance[student] === "Present") {
            acc.present++;
          } else if (attendance[student] === "Absent") {
            acc.absent++;
          }
          return acc;
        },
        { present: 0, absent: 0 }
      )
    : { present: 0, absent: 0 };

  // Data for pie chart
  const pieData = [
    { name: "Present", value: attendanceStats.present },
    { name: "Absent", value: attendanceStats.absent },
  ];

  // Data for bar chart
  const barData = selectedBatch
    ? selectedBatch.students.map((student) => ({
        name: student,
        status: attendance[student] === "Present" ? 1 : 0,
      }))
    : [];

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
        Student Attendance System
      </h1>

      {/* Date and Batch Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Select Date:
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Select Batch:
          </label>
          <select
            value={selectedBatch?.id || ""}
            onChange={(e) => {
              const batchId = parseInt(e.target.value);
              const batch = batches.find((b) => b.id === batchId);
              setSelectedBatch(batch);
              setAttendance({});
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          >
            <option value="">-- Select Batch --</option>
            {batches.map((batch) => (
              <option key={batch.id} value={batch.id}>
                {batch.name} - {batch.course}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Student Attendance */}
      {selectedBatch && (
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Mark Attendance for {selectedBatch.course}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {selectedBatch.students.map((student) => (
              <div
                key={student}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {student}
                    </h3>
                    <p className="text-gray-500">Student</p>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleAttendance(student, "Present")}
                      className={`px-4 py-2 rounded-full font-semibold ${
                        attendance[student] === "Present"
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-green-600 hover:text-white"
                      } transition-colors duration-300`}
                    >
                      Present
                    </button>
                    <button
                      onClick={() => handleAttendance(student, "Absent")}
                      className={`px-4 py-2 rounded-full font-semibold ${
                        attendance[student] === "Absent"
                          ? "bg-red-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-red-600 hover:text-white"
                      } transition-colors duration-300`}
                    >
                      Absent
                    </button>
                  </div>
                </div>

                {/* Attendance Status */}
                {attendance[student] && (
                  <p
                    className={`mt-4 font-semibold ${
                      attendance[student] === "Present"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {student} is marked as {attendance[student]}.
                  </p>
                )}

                {/* Download PDF button */}
                <button
                  onClick={() => generatePdf(student)}
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-md"
                >
                  Download PDF
                </button>
              </div>
            ))}
          </div>

          {/* Charts to visualize attendance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Attendance Overview
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                    dataKey="value"
                    stroke="#FFF"
                    strokeWidth={2}
                    paddingAngle={5}
                    animationDuration={500}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Individual Attendance
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="status"
                    fill="#4CAF50"
                    radius={[10, 10, 0, 0]}
                    animationDuration={500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10 text-center">
            <button
              onClick={submitAttendance}
              className="px-8 py-3 bg-indigo-600 text-white text-lg font-bold rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-md"
            >
              Submit Attendance
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAttendance;
