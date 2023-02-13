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
        labels: ['가입 회원수'],
        datasets: [
            {
                label: '어제',
                data: [10],
                backgroundColor: 'red',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
            {
                label: '오늘',
                data: [20],
                backgroundColor: 'blue',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
        ],
    };

    const data2 = {
        labels: ['일', '월', '화', '수', '목', '금', '토'],
        datasets: [
            {
                label: '지난주',
                data: [10, 20, 30, 40, 50, 60, 70],
                backgroundColor: 'red',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
            {
                label: '이번주',
                data: [10, 20, 30, 40, 50, 60, 70],
                backgroundColor: 'blue',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
        ],
    };

    const data3 = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [
            {
                label: '지난달',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                backgroundColor: 'red',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
            {
                label: '이번달',
                data: [26, 7, 10, 30, 24, 22, 5, 25, 14, 9, 13, 29, 2, 12, 16, 17, 4, 11, 31, 1, 23, 19, 3, 20, 6, 28, 8, 15, 27, 18, 21],
                backgroundColor: 'blue',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
        ],
    };

    const data4 = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        datasets: [
            {
                label: '지난해',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                backgroundColor: 'red',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
            {
                label: '올해',
                data: [2, 6, 11, 1, 9, 3, 7, 8, 12, 5, 4, 10],
                backgroundColor: 'blue',
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
        ],
    };

    const options = {
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

    const options1 = {
        ...options, 
        plugins: {
            title: {
                display: true,
                text: '가입자 (Today)',
            }
        }
    };

    const options2 = {
        ...options, 
        plugins: {
            title: {
                display: true,
                text: '가입자 (Week)',
            }
        }
    };

    const options3 = {
        ...options, 
        plugins: {
            title: {
                display: true,
                text: '가입자 (Month)',
            }
        }
    };

    const options4 = {
        ...options, 
        plugins: {
            title: {
                display: true,
                text: '가입자 (Year)',
            }
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
                    <Bar data={data2} options={options2} />
                </div>
                <div style={{display: 'inline-block', width: '400px',}}>
                    <Bar data={data3} options={options3} />
                </div>
                <div style={{display: 'inline-block', width: '400px',}}>
                    <Bar data={data4} options={options4} />
                </div>
            </div>
        </>
    );
}

export default MemberChartV2;
