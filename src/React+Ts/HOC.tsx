import React from "react";

// 1. Define the props the HOC will "inject" or handle
interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<T extends object>(
  Component: React.ComponentType<T>,
) {
  return (props: T & WithLoadingProps) => {
    const { isLoading, ...remainingProps } = props;
    if (isLoading) return <div>Loading...</div>;

    return <Component {...(remainingProps as T)} />;
  };
}

interface UserProps {
  role: "admin" | "user";
}
function withAdminAuth<T extends object>(
  WrappedComponent: React.ComponentType<T>,
) {
  return (props: T & UserProps) => {
    if (props.role !== "admin") {
      return <p>Access Denied. Admins only.</p>;
    }

    return <WrappedComponent {...props} />;
  };
}
// Usage
const Dashboard = () => <div>Sensitive Admin Data</div>;
const AdminDashboard = withAdminAuth(Dashboard);

// In your App
<AdminDashboard role="user" />; // Shows "Access Denied"

// With Permision
type UserRole = "admin" | "editor" | "viewer";

// This is the hierarchy logic
const roles: Record<UserRole, number> = {
  admin: 3,
  editor: 2,
  viewer: 1,
};

export function withPermission<T extends object>(
  Component: React.ComponentType<T>,
  requiredRole: UserRole,
) {
  return (props: T & { userRole: UserRole }) => {
    // 1. Get the rank of the current userRole from props
    const { userRole } = props;

    if (roles[requiredRole] >= roles[userRole]) {
      return <h1>Permission accepted</h1>;
    }

    return <p>Permission Denied</p>; // Change this!
  };
}

// --- TEST CASE ---

const SensitiveData = ({ title }: { title: string }) => (
  <div style={{ padding: "20px", border: "1px solid red" }}>
    <h3>{title}</h3>
    <p>This is highly sensitive information!</p>
  </div>
);

// Wrap the component
const ProtectedData = withPermission(SensitiveData, "admin");

export default function App() {
  return (
    <div>
      <h1>Permissions Test</h1>
      {/* This should show the message "Denied" */}
      <ProtectedData title="Q1 Revenue" userRole="viewer" />

      <hr />

      {/* This should show the SensitiveData component */}
      <ProtectedData title="Q1 Revenue" userRole="admin" />
    </div>
  );
}
