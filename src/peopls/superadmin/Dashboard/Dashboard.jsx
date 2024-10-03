import React from "react";

const SuperAdminDashboard = () => {
  // Sample SuperAdmin data
  const superAdmin = {
    id: "SUPER-0001",
    name: "Alex Johnson",
    role: "Super Administrator",
    photo: "https://randomuser.me/api/portraits/men/86.jpg",
    stats: {
      totalAdmins: 5,
      totalStudents: 120,
      totalCourses: 15,
      platformLogs: 25,
    },
  };

  const admins = [
    { id: "ADM-12345", name: "Jane Smith", role: "Admin", status: "Active" },
    { id: "ADM-67890", name: "John Doe", role: "Admin", status: "Pending" },
  ];

  const students = [
    { id: "STU-98765", name: "Sara Doe", course: "React Basics", progress: 80 },
    { id: "STU-54321", name: "Michael Brown", course: "JavaScript Advanced", progress: 95 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center p-8">
          {/* SuperAdmin Photo */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
            <img
              src={superAdmin.photo}
              alt={`${superAdmin.name}'s profile`}
              className="object-cover w-full h-full"
            />
          </div>
          {/* SuperAdmin Info */}
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">{superAdmin.name}</h2>
            <p className="text-gray-600 text-lg mt-2">ID: {superAdmin.id}</p>
            <p className="text-gray-600 text-lg mt-1">Role: {superAdmin.role}</p>
          </div>
        </div>

        {/* System Stats */}
        <div className="bg-gray-50 p-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">System Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Stat Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Total Admins</h4>
              <p className="text-gray-600 text-lg mt-2">{superAdmin.stats.totalAdmins}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Total Students</h4>
              <p className="text-gray-600 text-lg mt-2">{superAdmin.stats.totalStudents}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Total Courses</h4>
              <p className="text-gray-600 text-lg mt-2">{superAdmin.stats.totalCourses}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Platform Logs</h4>
              <p className="text-gray-600 text-lg mt-2">{superAdmin.stats.platformLogs}</p>
            </div>
          </div>
        </div>

        {/* Admin Management Section */}
        <div className="bg-gray-50 p-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Manage Admins</h3>
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-6 text-left">Admin ID</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Role</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id}>
                  <td className="py-3 px-6">{admin.id}</td>
                  <td className="py-3 px-6">{admin.name}</td>
                  <td className="py-3 px-6">{admin.role}</td>
                  <td className="py-3 px-6">{admin.status}</td>
                  <td className="py-3 px-6">
                    <button className="bg-indigo-600 text-white py-1 px-3 rounded hover:bg-indigo-700 transition">
                      {admin.status === "Pending" ? "Approve" : "View"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Student Management Section */}
        <div className="bg-gray-50 p-8 mt-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Manage Students</h3>
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-6 text-left">Student ID</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Course</th>
                <th className="py-3 px-6 text-left">Progress</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="py-3 px-6">{student.id}</td>
                  <td className="py-3 px-6">{student.name}</td>
                  <td className="py-3 px-6">{student.course}</td>
                  <td className="py-3 px-6">{student.progress}%</td>
                  <td className="py-3 px-6">
                    <button className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-gray-50 p-8 mt-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Recent SuperAdmin Activity</h3>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">
                <span className="font-semibold">Alex Johnson</span> approved{" "}
                <span className="font-semibold">Jane Smith</span> as an Admin.
              </p>
              <p className="text-sm text-gray-500 mt-1">5 hours ago</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">
                <span className="font-semibold">Alex Johnson</span> viewed platform logs.
              </p>
              <p className="text-sm text-gray-500 mt-1">1 day ago</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
