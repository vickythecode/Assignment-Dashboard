import Dashboard from "../app/components/Dashboard.js";
import Sidebar from "../app/components/Sidebar.js";

export default function Home() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
}