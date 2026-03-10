import React, { Suspense, lazy } from 'react';

// Lazy load the component
// const HeavyChartComponent = lazy(() => import('./HeavyChartComponent'));

const Dashboard = () => {
  return (
    <div>
      <h1>User Analytics</h1>
      
      {/* Fallback must be a ReactNode (JSX, string, null) */}
      <Suspense fallback={<p>Loading chart data...</p>}>
        {/* <HeavyChartComponent /> */}
      </Suspense>
    </div>
  );
};