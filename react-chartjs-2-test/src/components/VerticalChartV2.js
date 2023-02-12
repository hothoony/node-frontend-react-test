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

function VerticalChartV2() {

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
            // '일일', '주간', '월간', '연간',
        ],
        datasets: [
            {
                label: '이전',
                data: [
                    {x: '일일', y: 10}, 
                    {x: '주간', y: 20}, 
                    {x: '월간', y: 30}, 
                    {x: '연간', y: 40}, 
                ],
                backgroundColor: 'red',
            },
            {
                label: '현재',
                data: [
                    {x: '일일', y:20}, 
                    {x: '주간', y:40}, 
                    {x: '월간', y:60}, 
                    {x: '연간', y:80}, 
                ],
                backgroundColor: 'blue',
            },
        ],
    };

    return (
        <>
            <h2>VerticalChartV2</h2>
            <div style={{width: '800px',}}>
                <Bar options={options} data={data}/>
            </div>
        </>
    );
}

export default VerticalChartV2;
