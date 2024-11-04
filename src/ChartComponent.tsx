import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const ChartComponent: React.FC = () => {
  const data = {
    series: [
      {
        name: '선수 AVG',
        data: [0.360, 0.352, 0.347, 0.343, 0.340, 0.336, 0.329, 0.329, 0.328, 0.326, 0.319, 0.316]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false // 툴바 숨기기
        },
        background: '#f4f4f4' // 배경색 설정
      },
      title: {
        text: 'KBO 선수 타율 차트',
        align: 'center' as const,
        style: {
          fontSize: '30px', // 타이틀 글자 크기
          color: '#333', // 타이틀 색상
          fontWeight: 'bold' // 타이틀 두께
        }
      },
      xaxis: {
        categories: [
          '에레디아', '레이예스', '김도영', '구자욱', '송성문', '홍창기',
          '로하스', '김선빈', '박민우', '김혜성', '오스틴', '김지찬'
        ],
        title: {
          text: '선수명',
          style: {
            fontSize: '16px', // x축 제목 글자 크기
            color: '#666' // x축 제목 색상
          }
        },
        labels: {
          style: {
            colors: '#555', // x축 라벨 색상
            fontSize: '14px' // x축 라벨 글자 크기
          }
        }
      },
      yaxis: {
        title: {
          text: '타율',
          style: {
            fontSize: '16px',
            color: '#666'
          }
        },
        labels: {
          style: {
            colors: '#555', // y축 라벨 색상
            fontSize: '14px' // y축 라벨 글자 크기
          }
        }
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontSize: '14px' // 툴팁 글자 크기
        },
        theme: 'dark' // 툴팁 테마 설정
      },
      plotOptions: {
        bar: {
          horizontal: false, // 수직 막대 그래프
          dataLabels: {
            position: 'top' // 데이터 레이블 위치
          }
        }
      },
      dataLabels: {
        enabled: true, // 데이터 레이블 활성화
        style: {
          colors: ['#fff'], // 데이터 레이블 색상
          fontSize: '12px'
        }
      },
      fill: {
        colors: ['#008FFB'], // 막대 색상
        opacity: 0.9 // 막대 투명도 조정
      },
      grid: {
        borderColor: '#e7e7e7', // 그리드 선 색상
        strokeDashArray: 5, // 그리드 선 스타일
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['#fff'] // 막대 경계 색상
      },
      responsive: [{
        breakpoint: 600,
        options: {
          chart: {
            height: 350
          },
          dataLabels: {
            enabled: false // 작은 화면에서 데이터 레이블 숨기기
          }
        }
      }]
    } as ApexOptions
  };

  return (
    <div>
      <Chart options={data.options} series={data.series} type="bar" height={350} />
    </div>
  );
};

export default ChartComponent;
