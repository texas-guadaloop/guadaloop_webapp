
var conn1_temperature
var conn1_pressure
var conn1_humidity
var conn1_accelerometer

window.addEventListener("load", function () {

	conn1_temperature = new WebSocket('ws://192.168.2.27:8001')
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



	conn1_pressure = new WebSocket('ws://192.168.2.27:8001')
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
    


	conn1_humidity = new WebSocket('ws://192.168.2.27:8001')
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



})