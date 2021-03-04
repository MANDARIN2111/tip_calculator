function calculate() {
	var bill = document.getElementById("value").value;
	var percent = document.getElementById("s1").value;
	var noOfPeople = document.getElementById("number").value;
	if(bill === 0 || bill === "" || percent === 0 || percent === "" || percent == 0.0){
		alert("enter values");
		return;
	}
	noOfPeople = Number(noOfPeople);
	let tip = (bill*percent) / noOfPeople;
	tip = tip.toFixed(2); 
	if(noOfPeople === 1){
		document.getElementById("amt").innerHTML = "<h2>Total Tip = $"+tip+"</h2>"; 
	}else{
		document.getElementById("amt").innerHTML = "<h2>Total Tip = $"+tip+" per person </h2>";
	}
}