new Chart(document.getElementById("barchart"), {
	type: 'line',
	data: {
		labels: ['9：00', '10：00', '11：00', '12：00', '13:00', '14:00', '15:00','16：00', '17：00', '18：00', '19：00', '20:00', '21:00', '22:00'],
		datasets: [{
			data: [16.0,16.5,16.3,18.6,19.1,20.0,21.5,20.6],
			label: 'Temperature ℃',
			fill:false,
			backgroundColor:window.chartColors.yellow,
			borderColor: window.chartColors.green,
			borderWidth: 2,
		}]
	},
	options: {
		responsive: true,
		legend: {
			position: 'top',
		},
	}
});
