var primeiroGrafico = document.getElementById('primeiroGrafico').getContext(
		'2d');

function getMhotAvarageChart() {
	var dados = [];
	var getUrl = window.location;
	var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
	var urlDados = baseUrl+'/rest/chart/mhot/avarage';
	$.ajax({
		type : 'GET',
		url : urlDados,
		data : [],
		async : false,
		dataType : 'json',
		success : function(data) {
			var i = 0;
			for (x in data) {
				dados[i] = data[x];
				i = i + 1;
			}		
		}
	});	
	return dados;
}


var chart = new Chart(primeiroGrafico, {
	type : 'line',
	data : {
		labels : [ 'p1', 'p2', 'p3', 'p4', 'p5' ],

		datasets : [ {
			label : 'MHOT14 Média - I: Sintomas e Limitações Funcionais',
			data : getMhotAvarageChart(),
			borderWidth : 1
		} ]
	},
	options : {
		scales : {
			yAxes : [ {
				ticks : {
					beginAtZero : false
				}
			} ]
		}
	}

});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
	type : 'bar',
	data : {
		labels : [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
		datasets : [ {
			label : '# of Votes',
			data : [ 12, 19, 3, 5, 2, 3 ],
			backgroundColor : [ 'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)' ],
			borderColor : [ 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)' ],
			borderWidth : 1
		} ]
	},
	options : {
		scales : {
			yAxes : [ {
				ticks : {
					beginAtZero : true
				}
			} ]
		}
	}
});