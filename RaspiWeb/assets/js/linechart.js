new Chart(document.getElementById("linechart"), {
	type: 'line',
	data: {
		labels: ['9：00', '10：00', '11：00', '12：00', '13:00', '14:00', '15:00','16：00', '17：00', '18：00', '19：00', '20:00', '21:00', '22:00'],
		datasets: [ {
			label: 'Light intensity(LX)',
			fill: false,
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.blue,
			data: [10.76,500,550,620,6000,8200,8556,9100,6501,3000,1000,500,300,20],
			borderWidth: 2,
		}]
	},
	options: {
		responsive: true,
		// title: {
		// 	display: true,
		// 	text: 'Chart.js Line Chart'
		// },
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'time'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Value'
				}
			}]
		}
	}
});
