export const pieChartConfig = {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [33, 33, 33],
                /**
                 * These colors come from Tailwind CSS palette
                 * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                 */
                backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
                label: 'Dataset 1'
            }
        ],
        labels: ['Shoes', 'Shirts', 'Bags']
    },
    options: {
        responsive: true,
        cutoutPercentage: 80,
        /**
         * Default legends are ugly and impossible to style.
         * See examples in charts.html to add your own legends
         *  */
        legend: {
            display: false
        }
    }
};