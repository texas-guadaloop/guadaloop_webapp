window.onload = function () {
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'temperature'],
          ['1',  25],
          ['2',  25],
          ['3',  26],
          ['4',  27]
        ]);

        var options = {
          legend: 'none',
        	vAxis: {
        	viewWindow: {
   				max:'40',
              	min: '20'
            },
            gridlines: {
            	count: '5'
            }
          }
          
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }

	}