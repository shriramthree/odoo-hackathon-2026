import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import Allocation from "./pages/Allocation";
import Maintenance from "./pages/Maintenance";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import DashboardLayout from "./components/layout/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/assets"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Assets />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/employees"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Employees />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/departments"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Departments />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/allocation"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Allocation />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/maintenance"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Maintenance />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Reports />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}
