import React from 'react';

// 1. Define the props the HOC will "inject" or handle
interface WithLoadingProps {
  isLoading: boolean;
}

// 2. The HOC function
// T is the props of the original component
export function withLoading<T extends object>(
  Component: React.ComponentType<T>
) {
  // 3. Return a new component
  return (props: T & WithLoadingProps) => {
    const { isLoading, ...remainingProps } = props;

    if (isLoading) return <div>Loading...</div>;

    // We cast remainingProps back to T to satisfy the original component
    return <Component {...(remainingProps as T)} />;
  };
}



interface UserProps {
  role: 'admin' | 'user';
}
function withAdminAuth<T extends object>(WrappedComponent: React.ComponentType<T>) {
  return (props: T & UserProps) => {
    if (props.role !== 'admin') {
      return <p>Access Denied. Admins only.</p>;
    }

    return <WrappedComponent {...props} />;
  };
}
// Usage
const Dashboard = () => <div>Sensitive Admin Data</div>;
const AdminDashboard = withAdminAuth(Dashboard);

// In your App
<AdminDashboard role="user" /> // Shows "Access Denied"