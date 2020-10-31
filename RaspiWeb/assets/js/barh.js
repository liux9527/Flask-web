new Chart(document.getElementById("barh"), {
	type: 'line',
	data: {
		labels: ['9：00', '10：00', '11：00', '12：00', '13:00', '14:00', '15:00','16：00', '17：00', '18：00', '19：00', '20:00', '21:00', '22:00'],
		datasets: [ {
			data: [90.1,91.3,91.6,90.6,89.6,90.3,85.26,85.29,90.40],
			label: 'Humidity g/m³',
			fill:false,
			backgroundColor:window.chartColors.purple,
			borderColor: window.chartColors.purple,
			backgroundColor: "#FF4500",
			borderWidth: 2,
		}]
	},
	options: {
	}
});
