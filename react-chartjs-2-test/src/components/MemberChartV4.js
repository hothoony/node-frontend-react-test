import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Radio } from 'antd';
import { useState } from "react";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    // ChartDataLabels,
);

function MemberChartV4() {

    const COLOR1 = '#FD8C32';
    const COLOR2 = '#2D8FE6';

    const [data, setData] = useState({
        labels: '',
        datasets: [
            {
                label: '',
                data: [],
                backgroundColor: COLOR1,
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
            {
                label: '',
                data: [],
                backgroundColor: COLOR2,
                datalabels: {
                    display: false,
                    color: 'white',
                },
            },
        ],
    });

    const [options, setOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                // display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: '',
            },
            dataLabels: {
                display: false,
            },
        },
        scales: {
            y: {
                grid: {
                    display: true,
                },
                ticks: {
                    display: true,
                    beginAtZero: true,
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: true,
                }
            },
            // yAxes: [
            //   {
            //     stacked: false,
            //     gridLines: {
            //       display: true,
            //     },
            //     ticks: {
            //       display: true,
            //       beginAtZero: true,
            //     },
            //   },
            // ],
            // xAxes: [
            //   {
            //     stacked: false,
            //     gridLines: {
            //       display: false,
            //     },
            //     ticks: {
            //       display: true,
            //     },
            //   },
            // ],
          },
        // datalabels: {
        //     display: false,
        //     color: 'black',
        //     align: 'end',
        //     padding: {
        //         right: 2,
        //     },
        //     labels: {
        //         padding: {
        //             top: 10,
        //         },
        //         title: {
        //             font: {
        //                 weight: 'bold',
        //             },
        //         },
        //         value: {
        //             color: 'green',
        //         },
        //     },
        //     formatter: function(value) {
        //         return '\n' + value;
        //     },
        // }
    });

    const handleChangeRadioButton = (e) => {
        console.log('handleChangeRadioButton', e.target.value);

        let newState;

        if (e.target.value === 'today') {
            newState = createChartDataOptions({
                title: '가입자 (Today)',
                labels: ['가입 회원수'],
                dataset1: {
                    label: '어제',
                    data: [10],
                },
                dataset2: {
                    label: '오늘',
                    data: [20],
                },
            });
        }
        else if (e.target.value === 'week') {
            newState = createChartDataOptions({
                title: '가입자 (Week)',
                labels: ['일', '월', '화', '수', '목', '금', '토'],
                dataset1: {
                    label: '지난주',
                    data: [10, 20, 30, 40, 50, 60, 70],
                },
                dataset2: {
                    label: '이번주',
                    data: [50, 20, 40, 60, 10, 30, 70],
                },
            });
        }
        else if (e.target.value === 'month') {
            newState = createChartDataOptions({
                title: '가입자 (Week)',
                labels: ['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', '31일'],
                dataset1: {
                    label: '지난달',
                    data: [12, 2, 3, 15, 7, 28, 29, 24, 13, 14, 4, 10, 5, 8, 21, 16, 6, 18, 19, 20, 31, 11, 27, 22, 25, 26, 9, 17, 23, 1, 30],
                },
                dataset2: {
                    label: '이번달',
                    data: [26, 7, 10, 30, 24, 22, 5, 25, 14, 9, 13, 29, 2, 12, 16, 17, 4, 11, 31, 1, 23, 19, 3, 20, 6, 28, 8, 15, 27, 18, 21],
                },
            });
        }
        else if (e.target.value === 'year') {
            newState = createChartDataOptions({
                title: '가입자 (Year)',
                labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                dataset1: {
                    label: '작년',
                    data: [4, 12, 7, 8, 5, 11, 3, 2, 9, 6, 1, 10],
                },
                dataset2: {
                    label: '올해',
                    data: [2, 6, 11, 1, 9, 3, 7, 8, 12, 5, 4, 10],
                },
            });
        }

        setData((prevState) => {
            return {
                ...prevState,
                ...newState.data,
            };
        });

        setOptions((prevState) => {
            return {
                ...prevState,
                ...newState.options,
            }
        });
    }

    const createChartDataOptions = ({title, labels, dataset1, dataset2}) => {
        return {
            data: {
                labels: labels,
                datasets: [
                    {
                        label: dataset1.label,
                        data:  dataset1.data,
                        backgroundColor: COLOR1,
                        datalabels: {
                            display: false,
                        },
                    },
                    {
                        label: dataset2.label,
                        data: dataset2.data,
                        backgroundColor: COLOR2,
                        datalabels: {
                            display: false,
                        },
                    },
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: title,
                    }
                }
            }
        };
    }

    return (
        <>
            <h2>MemberChartV4</h2>
            <div>
                <Radio.Group onChange={handleChangeRadioButton}>
                    <Radio.Button value="today">Today</Radio.Button>
                    <Radio.Button value="week">Week</Radio.Button>
                    <Radio.Button value="month">Month</Radio.Button>
                    <Radio.Button value="year">Year</Radio.Button>
                </Radio.Group>
            </div>
            <div>
                <div style={{display: 'inline-block', width: '400px',}}>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </>
    );
}

export default MemberChartV4;
