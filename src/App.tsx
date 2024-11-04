import React from 'react';
import ChartComponent from './ChartComponent'; // ChartComponent 경로에 맞게 수정

const App: React.FC = () => {
  return (
    <div>
      <h1>KBO 선수 타율 분석</h1>
      <ChartComponent />
    </div>
  );
};

export default App;
