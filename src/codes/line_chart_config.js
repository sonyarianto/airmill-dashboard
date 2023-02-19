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
				fill: false
			},
			{
				label: 'Paid',
				fill: false,
				backgroundColor: '#7e3af2',
				borderColor: '#7e3af2',
				data: [24, 50, 64, 74, 52, 51, 65]
			}
		]
	},
	options: {
		responsive: true,
		legend: {
			display: false
		},
		tooltips: {
			mode: 'index',
			intersect: false
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			x: {
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			},
			y: {
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Value'
				}
			}
		}
	}
};
