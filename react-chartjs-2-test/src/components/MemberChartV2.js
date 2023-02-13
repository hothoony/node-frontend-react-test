import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels,
);

function MemberChartV2() {

    const data1 = {
        labels: [
            // '일일', '주간', '월간', '연간',
        ],
        datasets: [
            {
                label: '어제',
                data: [
                    {x: '가입 회원수', y: 10}, 
                ],
                backgroundColor: 'red',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
            {
                label: '오늘',
                data: [
                    {x: '가입 회원수', y:20}, 
                ],
                backgroundColor: 'blue',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
        ],
    };

    const data2 = {
        labels: [
            // '일일', '주간', '월간', '연간',
        ],
        datasets: [
            {
                label: '지난주',
                data: [
                    {x: '가입 회원수', y: 30}, 
                ],
                backgroundColor: 'red',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
            {
                label: '이번주',
                data: [
                    {x: '가입 회원수', y:40}, 
                ],
                backgroundColor: 'blue',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
        ],
    };

    const data3 = {
        labels: [
            // '일일', '주간', '월간', '연간',
        ],
        datasets: [
            {
                label: '지난달',
                data: [
                    {x: '가입 회원수', y: 50}, 
                ],
                backgroundColor: 'red',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
            {
                label: '이번달',
                data: [
                    {x: '가입 회원수', y:60}, 
                ],
                backgroundColor: 'blue',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
        ],
    };

    const data4 = {
        labels: [
            // '일일', '주간', '월간', '연간',
        ],
        datasets: [
            {
                label: '지난해',
                data: [
                    {x: '가입 회원수', y: 70}, 
                ],
                backgroundColor: 'red',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
            {
                label: '올해',
                data: [
                    {x: '가입 회원수', y:80}, 
                ],
                backgroundColor: 'blue',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
        ],
    };

    const options1 = {
        responsive: true,
        plugins: {
            legend: {
                // display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: '가입자',
            },
            dataLabels: {
                display: false,
            },
        },
        datalabels: {
            display: true,
            color: 'black',
            align: 'end',
            padding: {
                right: 2,
            },
            labels: {
                padding: {
                    top: 10,
                },
                title: {
                    font: {
                        weight: 'bold',
                    },
                },
                value: {
                    color: 'green',
                },
            },
            formatter: function(value) {
                return '\n' + value;
            },
        }
    };

    return (
        <>
            <h2>MemberChartV2</h2>
            <div>
                <div style={{display: 'inline-block', width: '400px',}}>
                    <Bar data={data1} options={options1} />
                </div>
                <div style={{display: 'inline-block', width: '400px',}}>
                    <Bar data={data2} options={options1} />
                </div>
                <div style={{display: 'inline-block', width: '400px',}}>
                    <Bar data={data3} options={options1} />
                </div>
                <div style={{display: 'inline-block', width: '400px',}}>
                    <Bar data={data4} options={options1} />
                </div>
            </div>
        </>
    );
}

export default MemberChartV2;
