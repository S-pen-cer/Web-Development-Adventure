function showAlert() {
    alert("Message sent.");
}

function showAlert2() {
    alert("Order received.");
}

function showAlert3() {
    alert("");
}
function inputCheck(){
	const name = document.getElementById("name");
	const email = document.getElementById("email");
	const message = document.getElementById("message");
	const number = document.getElementById("phone");
	const hours = document.getElementById("available");
	const response = document.getElementById("response");
	var regex = /^[a-zA-Z0-9@]+$/;
	
	notification.onclick = function{
		name=name.value;
		if(name === "" || email === "" || message === "" || number === "" || hours === "") {
			response.textContent = "Please fill the required fields.";
			if(regex.test("name"))!== true {
				response.textContent = "Invalid characters in input";
			}
			else{
				response.textContent = "Message sent";
			}
		}
	}
		 
		
  


