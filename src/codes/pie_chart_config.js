export const pieChartConfig = {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [33, 33, 33],
                backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
                label: 'Dataset 1'
            }
        ],
        labels: ['Shoes', 'Shirts', 'Bags']
    },
    options: {
        responsive: true,
        cutoutPercentage: 80,
        legend: {
            display: false
        }
    }
};