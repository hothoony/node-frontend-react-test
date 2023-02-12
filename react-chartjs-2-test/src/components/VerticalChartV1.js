import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

function VerticalChartV1() {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                // position: 'top' as const,
                position: 'top',
            },
            title: {
                display: true,
                text: '가입자',
            }
        }
    };

    const data = {
        labels: [
            '일일', '주간', '월간', '연간',
        ],
        datasets: [
            {
                label: '이전',
                data: [
                    10, 
                    20, 
                    30, 
                    40,
                ],
                backgroundColor: 'red',
            },
            {
                label: '현재',
                data: [
                    20,
                    40, 
                    60, 
                    80,
                ],
                backgroundColor: 'blue',
            },
        ],
    };

    return (
        <>
            <h2>VerticalChartV1</h2>
            <div style={{width: '800px',}}>
                <Bar options={options} data={data}/>
            </div>
        </>
    );
}

export default VerticalChartV1;
