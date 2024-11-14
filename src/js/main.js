import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('trendChart').getContext('2d');

    const purpleGradient = ctx.createLinearGradient(0, 0, 0, 400);
    purpleGradient.addColorStop(0, 'rgba(55, 81, 255, 0.4)');
    purpleGradient.addColorStop(1, 'rgba(55, 81, 255, 0)');

    const lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 23}, (_, i) => i.toString()),
            datasets: [
                {
                    label: 'Today',
                    data: [
                        {x: 0, y: 5},
                        {x: 4, y: 20},
                        {x: 8, y: 15},
                        {x: 12, y: 40},
                        {x: 16, y: 25},
                        {x: 20, y: 30}
                    ],
                    borderColor: 'rgba(55, 81, 255, 1)',
                    backgroundColor: purpleGradient,
                    fill: true,
                    borderWidth: 1,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 7,
                },
                {
                    label: 'Yesterday',
                    data: [
                        {x: 0, y: 10},
                        {x: 4, y: 35},
                        {x: 8, y: 25},
                        {x: 12, y: 50},
                        {x: 16, y: 20},
                        {x: 20, y: 5}
                    ],
                    borderColor: 'rgba(128, 128, 128, 1)',
                    backgroundColor: 'rgba(128, 128, 128, 0.2)',
                    fill: true,
                    borderWidth: 1,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 7,
                }
            ]
        },
        options: {
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: true
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        usePointStyle: false,
                        boxWidth: 30,
                        boxHeight: 1
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            if (context.dataset.label === 'Today') {
                                return `${context.raw.x} / ${context.raw.y}`;
                            }
                            return null;
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    min: 0,
                    max: 22,
                    ticks: {
                        stepSize: 1
                    },
                    grid: {
                        display: false,
                    },
                    title: {
                        display: true,
                    }
                },
                y: {
                    position: 'right',
                    min: 0,
                    max: 60,
                    ticks: {
                        stepSize: 10
                    },
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)',
                    },
                    title: {
                        display: true,
                    }
                }
            }
        }
    });
});
