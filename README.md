# ApexCharts 사용법

ApexCharts는 JavaScript로 데이터 시각화를 위한 라이브러리입니다. 다양한 유형의 차트를 지원하며, React와 쉽게 통합할 수 있습니다.

## 설치 방법

ApexCharts를 설치하기 위해 아래의 명령어를 사용합니다.

```bash
npm install --save apexcharts react-apexcharts
```     
## 예시 코드
```
import React from 'react';
import Chart from 'react-apexcharts';

const ChartComponent: React.FC = () => {
  const data = {
    series: [
      {
        name: '시리즈 이름',
        data: [값1, 값2, 값3, ...]
      }
    ],
    options: {
      chart: {
        type: 'line', // 차트 유형: 'line', 'bar', 'area' 등
        zoom: {
          enabled: false // 확대/축소 기능
        }
      },
      title: {
        text: '차트 제목',
        align: 'left' // 제목 정렬
      },
      xaxis: {
        categories: ['카테고리1', '카테고리2', '카테고리3'], // x축 카테고리
        title: {
          text: 'x축 제목' // x축 제목
        }
      },
      yaxis: {
        title: {
          text: 'y축 제목' // y축 제목
        }
      },
      tooltip: {
        shared: true, // 여러 데이터 포인트를 함께 보여줌
        intersect: false // 겹치지 않도록 설정
      }
    }
  };

  return (
    <div>
      <Chart options={data.options} series={data.series} type="line" height={350} />
    </div>
  );
};

export default ChartComponent;

```

