
var connection
window.addEventListener("load", function () {
		connection = new WebSocket('ws://192.168.1.100:8001')
		connection.onopen = function () {
			console.log("Connection opened")	
		}
		connection.onclose = function () {
			console.log("Connection closed")
		}
		connection.onerror = function () {
			console.error("Connection error")
		}
		connection.onmessage = function (event) {
			document.getElementById("temperature").innerHTML = event.data;
		}
})