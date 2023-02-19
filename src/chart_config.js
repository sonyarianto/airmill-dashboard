export const lineChartConfig = {
	type: 'line',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Organic',
				backgroundColor: '#0694a2',
				borderColor: '#0694a2',
				data: [43, 48, 40, 54, 67, 73, 70],
				fill: false,
				pointStyle: 'circle'
			},
			{
				label: 'Paid',
				fill: false,
				backgroundColor: '#7e3af2',
				borderColor: '#7e3af2',
				data: [24, 50, 64, 74, 52, 51, 65],
				pointStyle: 'circle'
			}
		]
	},
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom',
				labels: {
					usePointStyle: true
				}
			},
			title: {
				display: false,
				text: 'Chart Title'
			}
		}
	}
};

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
		plugins: {
			legend: {
				position: 'bottom',
				labels: {
					usePointStyle: true
				}
			}
		},
		cutout: 80
	}
};
