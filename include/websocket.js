/*Description of the heading of connection
conn1 is connection from the pi with sense-hat
coon2 is 
conn3 is
*/

var conn1_temperature
var conn1_pressure
var conn1_humidity
var conn1_accel
var conn1_tiltHeading
var conn1_gyro
var conn1_compass
var conn1_fusionPose
var conn2


window.addEventListener("load", function () {
	conn2 = new WebSocket('ws://192.168.1.134:8002');
        conn2.onopen = function() {
            console.log("conn2 connected")
                $(document).ready(function () {
                            var ckbox = $('#mySwitch');

                            $('input[name=levitation]').on('click',function () {
                                if (ckbox.is(':checked')) {
                                    //alert('You have Checked it');
                                    conn2.send("stop");
                                }
                                } else {
                                    //alert('You Un-Checked it');
                                    //conn2.send("stop");
                                }
                            });
                        });
        }
        conn2.onmessage = function (event) {
        	console.log(event.data);
              
		document.getElementById("laser").value = event.data;
        }

/*
	conn1_temperature = new WebSocket('ws://localhost:8001')
	conn1_temperature.onopen = function () {
		console.log("conn1_temperature opened")
		conn1_temperature.send("temperature")	
	}
	conn1_temperature.onmessage = function (event) {
		document.getElementById("temperature").value = event.data;
	}
	conn1_temperature.onclose = function () {
		console.log("conn1_temperature closed")
	}
	conn1_temperature.onerror = function () {
		console.error("conn1_temperature error")
	}



	conn1_pressure = new WebSocket('ws://localhost:8001')
	conn1_pressure.onopen = function () {
		console.log("conn1_pressure opened")
		conn1_pressure.send("pressure")	
	}
	conn1_pressure.onmessage = function (event) {
		document.getElementById("pressure").value = event.data;
	}
	conn1_pressure.onclose = function () {
		console.log("conn1_pressure closed")
	}
	conn1_pressure.onerror = function () {
		console.error("conn1_pressure error")
	}
    


	conn1_humidity = new WebSocket('ws://localhost:8001')
	conn1_humidity.onopen = function() {
		console.log("conn1_humidity opened")
		conn1_humidity.send("humidity")
	}
	conn1_humidity.onmessage = function (event) {
		document.getElementById("humidity").value = event.data;
	}
    conn1_humidity.onclose = function () {
		console.log("conn1_humidity closed")
	}
	conn1_humidity.onerror = function () {
		console.error("conn1_humidity error")
	}

*/
	conn1_accel = new WebSocket('ws://localhost:8001')
    	conn1_accel.onopen = function() {
          console.log("conn1_accel opened")
          conn1_accel.send("accel")
        }
        conn1_accel.onmessage = function (event) {
          document.getElementById("accel").value = event.data;
        }

/*

	conn1_tiltHeading = new WebSocket('ws://localhost:8001')
    	conn1_tiltHeading.onopen = function() {
          console.log("conn1_tiltHeading opened")
          conn1_tiltHeading.send("tiltHeading")
        }
        conn1_tiltHeading.onmessage = function (event) {
          document.getElementById("tiltHeading").value = event.data;
        }



	conn1_gyro = new WebSocket('ws://localhost:8001')
    	conn1_gyro.onopen = function() {
          console.log("conn1_gyro opened")
          conn1_gyro.send("gyro")
        }
        conn1_gyro.onmessage = function (event) {
          document.getElementById("gyro").value = event.data;
        }


    conn1_compass = new WebSocket('ws://localhost:8001')
    	conn1_compass.onopen = function() {
          console.log("conn1_compass opened")
          conn1_compass.send("compass")
        }
        conn1_compass.onmessage = function (event) {
          document.getElementById("compass").value = event.data;
        }


    conn1_fusionPose = new WebSocket('ws://localhost:8001')
    	conn1_fusionPose.onopen = function() {
          console.log("conn1_fusionPose opened")
          conn1_fusionPose.send("fusionPose")
        }
        conn1_fusionPose.onmessage = function (event) {
          document.getElementById("fusionPose").value = event.data;
        }
*/

})
