var clickChange = "On";
var id_Check = "";
var sku = "";
var desc = "";
var from = "";
var qty = "";
var to ="";
var pick = "";
var ovHeight = 740;
var routeOpen = "closed";
var waveOpen = "closed";
var taskOpen = "closed";
var doorOnOff = "closed";
var nbrOnOff = "closed";
var storeOnOff = "closed";

function hoverIn(id) {
	document.getElementById(id).style.boxShadow = "5px 5px 5px 0px rgba(0, 0, 0, 0.2)";
	document.getElementById(id).style.marginLeft = "50px";
	document.getElementById(id).style.transition = "0.5s";
}

function hoverOut(id) {
	document.getElementById(id).style.boxShadow = "none";
	document.getElementById(id).style.marginLeft = "25px";
}


function show(id) {

	document.getElementById(id).style.borderBottom = "solid 1px #EE9A00";
	document.getElementById(id).style.height = "78px";
	document.getElementById(id).style.transition = "height 1s";	

}


function hide(id) {

	document.getElementById(id).style.borderBottom = "none";
	document.getElementById(id).style.height = "0px";
	document.getElementById(id).style.transition = "height 1s";

}

function a2a_Show(id) {

	var myCheck = id;
	var myFunc;
	var addHeight = 78;

	if (myCheck == "sku" && sku == "") {

		sku = "Show";
		myFunc = show.call(myFunc, myCheck);
		ovHeight = ovHeight + addHeight;
		document.getElementById('overview').style.height = String(ovHeight)+"px";

	} else if (myCheck == "desc" && desc == "") {

		desc = "Show";
		myFunc = show.call(myFunc, myCheck);
		ovHeight = ovHeight + addHeight;
		document.getElementById('overview').style.height = String(ovHeight)+"px";

	} else if (myCheck == "from" && from == "") {

		from = "Show";
		myFunc = show.call(myFunc, myCheck);
		ovHeight = ovHeight + addHeight;
		document.getElementById('overview').style.height = String(ovHeight)+"px";

	} else if (myCheck == "qty" && qty == "") {

		qty = "Show";
		myFunc = show.call(myFunc, myCheck);
		ovHeight = ovHeight + addHeight;
		document.getElementById('overview').style.height = String(ovHeight)+"px";

	} else if (myCheck == "to" && to == "") {

		to = "Show";
		myFunc = show.call(myFunc, myCheck);
		ovHeight = ovHeight + addHeight;
		document.getElementById('overview').style.height = String(ovHeight)+"px";

	} else if (myCheck == "sku" && sku == "Show") {

		sku = "";
		myFunc = hide.call(myFunc, myCheck);
		ovHeight = ovHeight - addHeight;
		document.getElementById('overview').style.height = String(ovHeight)+"px";

	} else if (myCheck == "desc" && desc == "Show") {

		desc = "";
		myFunc = hide.call(myFunc, myCheck);
		ovHeight = ovHeight - addHeight;
		document.getElementById('overview').style.height = String(ovHeight)+"px";

	} else if (myCheck == "from" && from == "Show") {

		from = "";
		myFunc = hide.call(myFunc, myCheck);
		ovHeight = ovHeight - addHeight;
		document.getElementById('overview').style.height = String(ovHeight)+"px";

	} else if (myCheck == "qty" && qty == "Show") {

		qty = "";
		myFunc = hide.call(myFunc, myCheck);
		ovHeight = ovHeight - addHeight;
		document.getElementById('overview').style.height = String(ovHeight)+"px";

	} else if (myCheck == "to" && to == "Show") {

		to = "";
		myFunc = hide.call(myFunc, myCheck);
		ovHeight = ovHeight - addHeight;
		document.getElementById('overview').style.height = String(ovHeight)+"px";

	}

}

function a2a_Showlg(id) {

	var addHeight = 108;

	if (clickChange == "On") {

		document.getElementById(id).style.borderBottom = "solid 1px #EE9A00";
		document.getElementById(id).style.height = "108px";
		document.getElementById(id).style.transition = "height 1s";
		ovHeight = ovHeight + addHeight;
		document.getElementById('overview').style.height = String(ovHeight) + "px";
		clickChange = "Off";

	} else if (clickChange == "Off") {

		document.getElementById(id).style.borderBottom = "none";
		document.getElementById(id).style.height = "0px";
		document.getElementById(id).style.transition = "height 1s";
		ovHeight = ovHeight - addHeight;
		document.getElementById('overview').style.height = String(ovHeight) + "px";
		clickChange = "On";

	}

}


function overShow(id) {

	document.getElementById(id).style.height = "740px";
	document.getElementById(id).style.transition = "height 1s";

}


function findShow(id) {

	document.getElementById(id).style.height = "215px";
	document.getElementById(id).style.transition = "height 1s";

}

function infoShow(id) {

	document.getElementById(id).style.height = "650px";
	document.getElementById(id).style.transition = "height 1s";

}

function pickShow(id) {

	document.getElementById(id).style.height = "1385px";
	document.getElementById(id).style.transition = "height 1s";

}


function lblCrShow(id) {

	document.getElementById(id).style.height = "1405px";
	document.getElementById(id).style.transition = "height 1s";

}


function openRoute(id1, id2, id3) {

	var myRoute = document.getElementById(id1);
	var myWave = document.getElementById(id2);
	var myTask = document.getElementById(id3);

	if (routeOpen === "closed" && waveOpen === "closed" && taskOpen === "closed") {

		myRoute.style.height = "102px";
		routeOpen = "open";

	} else if (routeOpen === "closed" && waveOpen === "open") {

		myRoute.style.height = "102px";
		myWave.style.height = "0px";
		routeOpen = "open";
		waveOpen = "closed";

	} else if (routeOpen === "closed" && waveOpen === "closed" && taskOpen === "open") {

		myRoute.style.height = "102px";
		myTask.style.height = "0px";
		routeOpen = "open";
		taskOpen = "closed";

	}

}



function openWave(id1, id2, id3) {

	var myWave = document.getElementById(id1);
	var myRoute = document.getElementById(id2);
	var myTask = document.getElementById(id3);

	if (waveOpen === "closed" && routeOpen === "open") {

		myWave.style.height = "205px";
		myRoute.style.height = "0px";
		waveOpen = "open";
		routeOpen = "closed";

	} else if (waveOpen === "closed" && taskOpen === "open" && routeOpen === "closed") {

		myWave.style.height = "205px";
		myTask.style.height = "0px";
		waveOpen = "open";
		taskOpen = "closed";

	} /*else if (waveOpen === "open") {

		myWave.style.height = "0px";
		waveOpen = "closed";

	}*/

}

function openTask(id1, id2) {

	var myTask = document.getElementById(id1);
	var myWave = document.getElementById(id2);

	if (taskOpen === "closed" && waveOpen === "open") {

		myTask.style.height = "102px";
		myWave.style.height = "0px";
		taskOpen = "open";
		waveOpen = "closed";

	} else if (taskOpen === "closed" && waveOpen === "open") {

		myTask.style.height = "102px";
		myWave.style.height = "0px";
		taskOpen = "open";
		waveOpen = "closed";

	} /*else if (taskOpen === "open") {

		myTask.style.height = "0px";
		taskOpen = "closed"

	}*/

}

function resetSub(id1, id2, id3) {

	var myRoute = document.getElementById(id1);
	var myWave = document.getElementById(id2);
	var myTask = document.getElementById(id3);

	myRoute.style.height = "0px";
	myWave.style.height = "0px";
	myTask.style.height = "0px";

	routeOpen = "closed";
	waveOpen = "closed";
	taskOpen = "closed";

}

function waveShow(id) {

	var onOffCheck = id;
	var waveSheet = document.getElementById(id);

	if (onOffCheck === "wave-doors" && doorOnOff === "closed") {

		waveSheet.style.height = "482px";
		doorOnOff = "open";

	} else if (onOffCheck === "wave-numbers" && nbrOnOff === "closed") {

		waveSheet.style.height = "482px";
		nbrOnOff = "open";

	} else if (onOffCheck === "wave-stores" && storeOnOff === "closed") {

		waveSheet.style.height = "482px";
		storeOnOff = "open";

	} else if (onOffCheck === "wave-doors" && doorOnOff === "open") {

		waveSheet.style.height = "0px";
		doorOnOff = "closed";

	} else if (onOffCheck === "wave-numbers" && nbrOnOff === "open") {

		waveSheet.style.height = "0px";
		nbrOnOff = "closed";

	} else if (onOffCheck === "wave-stores" && storeOnOff === "open") {

		waveSheet.style.height = "0px";
		storeOnOff = "closed";

	}

}

function boxShow(id) {
	var boxId = document.getElementById(id);

	boxId.style.visibility = "visible";
}

function boxHide(id) {
	var boxId = document.getElementById(id);

	boxId.style.visibility = "hidden";
}

/*function (e) {
    'use strict';
    
    if (e.which == 13) {
        
        return false;
        
    }
}*/