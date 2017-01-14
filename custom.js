window.onload = function () {
      google.charts.load('current', {'packages':['corechart', 'line']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
          data.addColumn('number', 'temperature');
          data.addRows([
            ['1',  25],
            ['2',  25],
            ['3',  26],
            ['4',  26],
            ['5',  27],
            ['6',  25],
            ['7',  25],
            ['8',  26],
            ['9',  25],
            ['10',  27],
            ['11',  26],
            ['12',  27],
            ['13',  25],
            ['14',  23]
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