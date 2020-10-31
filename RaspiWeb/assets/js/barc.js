new Chart(document.getElementById("barc"), {
	type: 'line',
	data: {
		labels: ['10s', '15s', '20s', '25s', '30s', '35s', ],
		datasets: [ {
			data: [0,1,2,5,8,6,5,2,10,3,6,7],
			label: 'Number of pests  ',
			fill:false,
			backgroundColor: "#FF4500",
			borderColor: "#FFf000",
			borderWidth: 2,
		}]
	},
	options: {
	}
});
