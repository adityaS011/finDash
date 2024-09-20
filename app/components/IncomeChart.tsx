import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { FinancialData } from './mockData';

interface Props {
  financialData: FinancialData[];
}

const IncomeChart: React.FC<Props> = ({ financialData }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart<'line'> | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [tooltipContent, setTooltipContent] = useState<{
    credit: number;
    debit: number;
    profit: number;
    loss: number;
  }>({ credit: 0, debit: 0, profit: 0, loss: 0 });

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            // @ts-ignore
            labels: financialData.map((data) => ''),
            datasets: [
              {
                data: [
                  ...financialData.map((data) => data.value),
                  financialData[financialData.length - 1].value,
                ],
                fill: {
                  target: 'start',
                  above: 'rgb(96, 195, 90, 0.4)',
                },
                borderColor: 'rgb(96, 195, 90)',
                borderWidth: 3,
                tension: 0.2,
                pointRadius: (context) =>
                  context.dataIndex === financialData.length - 1 ? 4 : 0,
                pointBackgroundColor: 'rgb(96, 195, 90)', // Set point background color
                pointStyle: 'circle',
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            scales: {
              x: {
                display: true,
                grid: {
                  display: false,
                },
              },
              y: {
                display: true,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
          },
        });

        chartRef.current.addEventListener('mousemove', handleMouseMove);

        chartRef.current.addEventListener('mouseleave', handleMouseLeave);
      }
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.removeEventListener('mousemove', handleMouseMove);
        chartRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [financialData]);

  const handleMouseMove = (event: MouseEvent) => {
    if (chartRef.current) {
      const canvasRect = chartRef.current.getBoundingClientRect();
      const x = event.clientX - canvasRect.left;
      const y = event.clientY - canvasRect.top;
      setTooltipPosition({ x, y });

      const dataPointIndex =
        chartInstanceRef.current?.scales.x.getValueForPixel(x);
      if (dataPointIndex !== undefined && dataPointIndex !== null) {
        const dataPoint = financialData[dataPointIndex];

        setTooltipContent({
          credit: dataPoint.value * 0.2,
          debit: dataPoint.value * 0.3,
          profit: dataPoint.value * 0.4,
          loss: dataPoint.value * 0.1,
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setTooltipPosition(null);
  };

  const renderTooltip = () => {
    if (tooltipPosition) {
      return (
        <div
          className='absolute w-24 z-50 bg-black text-white border border-gray-200 p-2 rounded-r-lg rounded-bl-xl'
          style={{ top: tooltipPosition.y + 10, left: tooltipPosition.x + 10 }}
        >
          <div className='relative z-50'>
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-b-3 border-solid border-black border-transparent'></div>

            <div>
              <div className='flex justify-between'>
                <p className='text-xs'>Credit:</p>
                <p className='text-xs text-blue-500'>
                  ${tooltipContent.credit.toFixed(2)}
                </p>
              </div>

              <div className='flex justify-between'>
                <p className='text-xs'>Debit:</p>
                <p className='text-xs text-yellow-500'>
                  ${tooltipContent.debit.toFixed(2)}
                </p>
              </div>

              <hr className='h-0.5 bg-slate-400 my-1' />
              <div className='flex justify-between'>
                <p className='text-xs'>Profit:</p>
                <p className='text-xs text-green-500'>
                  ${tooltipContent.profit.toFixed(2)}
                </p>
              </div>
              <div className='flex justify-between'>
                <p className='text-xs'>Loss:</p>
                <p className='text-xs text-red-500'>
                  ${tooltipContent.loss.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='relative text-xs  pt-6 ' style={{ height: '150px' }}>
      {renderTooltip()}
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default IncomeChart;
