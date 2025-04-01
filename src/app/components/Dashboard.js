"use client";
import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ArcElement, Legend);

const Dashboard = () => {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newRank, setNewRank] = useState(rank);
  const [newPercentile, setNewPercentile] = useState(percentile);
  const [newScore, setNewScore] = useState(score);

  const barData = {
    labels: ["Your Percentile"],
    datasets: [{ label: "Percentile", data: [percentile], backgroundColor: ["#3B82F6"] }],
  };

  const pieData = {
    labels: ["Correct Answers", "Incorrect Answers"],
    datasets: [{ data: [score, 15 - score], backgroundColor: ["#10B981", "#EF4444"] }],
  };

  const openModal = () => {
    setNewRank(rank);
    setNewPercentile(percentile);
    setNewScore(score);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = () => {
    setRank(newRank);
    setPercentile(newPercentile);
    setScore(newScore);
    closeModal();
  };

  return (
    <div className="flex flex-col p-6 w-full">
      <h2 className="text-xl font-bold mb-4">Skill Test Dashboard</h2>

      <div className="bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Html</h2>
              <p className="text-gray-600 mt-2">
                Question: 8 | Duration: 15 min | Submitted on 05 June 2020
              </p>
            </div>
            <button
              onClick={openModal}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Update
            </button>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Your Rank</h3>
          <p className="text-2xl font-bold text-blue-500">{rank}</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Percentile</h3>
          <p className="text-2xl font-bold text-green-500">{percentile}%</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Current Score</h3>
          <p className="text-2xl font-bold text-red-500">{score}/15</p>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Percentile Analysis</h3>
          <Bar data={barData} />
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Score Breakdown</h3>
          <Pie data={pieData} />
        </div>
      </div>

    
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Update Your Stats</h2>

            <div className="flex flex-col gap-3">
              <label className="text-gray-700">
                Rank:
                <input
                  type="number"
                  value={newRank}
                  onChange={(e) => setNewRank(Math.max(1, Number(e.target.value)))}
                  className="w-full p-2 border rounded-md mt-1"
                />
              </label>

              <label className="text-gray-700">
                Percentile:
                <input
                  type="number"
                  value={newPercentile}
                  onChange={(e) =>
                    setNewPercentile(Math.max(0, Math.min(100, Number(e.target.value))))
                  }
                  className="w-full p-2 border rounded-md mt-1"
                />
              </label>

              <label className="text-gray-700">
                Score:
                <input
                  type="number"
                  value={newScore}
                  onChange={(e) =>
                    setNewScore(Math.max(0, Math.min(15, Number(e.target.value))))
                  }
                  className="w-full p-2 border rounded-md mt-1"
                />
              </label>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-lg mr-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
