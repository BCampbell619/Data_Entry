var activateRoute = {
	option:	"",
	actError: "Please use option 2 to activate route",
	dckError: "DOOR belongs in this field",
	drError: "Please assign &lsquo;N123&rsquo; to the route",
	tlrError: "Trailer should be 'BIG5'",
	actvStr: "<form action=\"open_route.html#practice\" name=\"rt_Practice\" method=\"post\" onsubmit=\"activateRoute.actConf('route-practice','ndoor','dock','trailer', 'error')\"><table><thead><th colspan=\"2\">Activate Route</th></thead><tbody><tr><td><label for=\"ndoor\">Dock&#47Door&#58;</label></td><td><input type=\"text\" name=\"door\" id=\"ndoor\" style=\"text-transform: uppercase\"></td><td><input type=\"text\" name=\"dock\" id=\"dock\" style=\"text-transform: uppercase\"></td></tr><tr><td><label for=\"shipvia\">Ship Via&nbsp;&#58;</label></td><td><input type=\"text\" name=\"shipvia\" id=\"shipvia\" placeholder=\"BIG5\" disabled></td></tr><tr><td><label for=\"trailer\">Trailer&nbsp;&nbsp;&#58;</label></td><td><input type=\"text\" name=\"trailer\" id=\"trailer\" style=\"text-transform: uppercase\"></td><td><input type=\"text\" name=\"route\" id=\"route\"></td><br></tr><tr><td><a class=\"practice-submit\" onclick=\"activateRoute.refreshDoor('route-practice')\">F5&ndash;Refresh</a></td><td><a class=\"practice-submit\" onclick=\"activateRoute.actConf('route-practice','ndoor','dock','trailer', 'error')\">F16&ndash;Confirm</a></td></tr></tbody></table></form>",
	succStr: "<form action=\"open_route.html#practice\" name=\"rt_Practice\" method=\"post\" onsubmit=\"activateRoute.succConf('route-practice','error')\"><table><thead><th colspan=\"2\">2 = Activate Route</th></thead><tbody><tr><td class=\"act-option\">Opt</td><td class=\"act-option\">Route</td><td class=\"act-option\">Type</td><td class=\"act-option\">Status</td><td class=\"act-option\">Dock</td><td class=\"act-option\">Door</td><td class=\"act-option\">Trailer</td></tr><tr><td><input type=\"text\" name=\"option\" id=\"option\"></td><td><label for=\"option\">00209</label></td><td><label>Continuous</label></td><td><label>Assigned</label></td><td><label>DOOR</label></td><td><label>N123</label></td><td><label>BIG5 00209</label></td></tr><tr><td><a class=\"practice-submit\" onclick=\"activateRoute.refreshConf('route-practice')\">F5&ndash;Refresh</a></td><td><a class=\"practice-submit\" onclick=\"activateRoute.succConf('route-practice','error')\">F16&ndash;Confirm</a></td></tr></tbody></table></form>",
	refreshDoor: function (id) {
        'use strict';
		var zeForm = document.getElementById(id);
		zeForm.innerHTML = this.actvStr;

	},
	refreshConf: function (id) {
        'use strict';
		window.location.reload();

	},
	activate: function (id1, id2) {
        'use strict';
		var theForm = document.getElementById(id1);
		this.option = document.forms["rt_Practice"]["option"].value;
		var theError = document.getElementById(id2);

		if (this.option == 2) {

			theForm.innerHTML = this.actvStr;
			theError.innerHTML = "";
			document.getElementById("error").style.backgroundColor = "#FFF";

		} else {

			theError.innerHTML = this.actError;
			document.getElementById("error").style.backgroundColor = "#AD0606";
		
		}
	
	},
	dock: "",
	door: "",
	trailer: "",
	route: "",
	actConf: function (id1, id2, id3, id4, id5) {

		var theForm2 = document.getElementById(id1);
		var theError = document.getElementById(id5);
		this.dock = document.forms["rt_Practice"][id2].value;
		this.door = document.forms["rt_Practice"][id3].value;
		this.trailer = document.forms["rt_Practice"][id4].value;
		this.route = document.forms["rt_Practice"]["route"].value;
		document.getElementById(id2).style.backgroundColor = "rgb(0,0,0)";
		document.getElementById(id3).style.backgroundColor = "rgb(0,0,0)";
		document.getElementById(id4).style.backgroundColor = "rgb(0,0,0)";
		document.getElementById("error").style.backgroundColor = "#FFF";

		if (this.dock === "" || this.door === "" || this.trailer === "") {

			theError.innerHTML = "Please enter all fields";
			document.getElementById("error").style.backgroundColor = "#AD0606";
	
		} else if (this.dock.toUpperCase() !== "DOOR") {
			
			document.getElementById(id2).style.backgroundColor = "rgb(0, 255, 0)";
			theError.innerHTML = this.dckError;
			document.getElementById("error").style.backgroundColor = "#AD0606";

		} else if (this.door.toUpperCase() !== "N123") {

			document.getElementById(id3).style.backgroundColor = "rgb(0, 255, 0)";
			theError.innerHTML = this.drError;
			document.getElementById("error").style.backgroundColor = "#AD0606";

		} else if (this.trailer.toUpperCase() !== "BIG5") {

			document.getElementById(id4).style.backgroundColor = "rgb(0, 255, 0)";
			theError.innerHTML = this.tlrError;
			document.getElementById("error").style.backgroundColor = "#AD0606";

		} else {

			theForm2.innerHTML = this.succStr;
			theError.innerHTML = "Route Activated";
			document.getElementById("error").style.backgroundColor = "rgb(0, 255, 0)";

		}

	},
	succConf: function (id1, id2) {

		var theForm3 = document.getElementById(id1);
		var theError = document.getElementById(id2);
		this.option = document.forms["rt_Practice"]["option"].value;

		if (this.option == 2) {

			theError.innerHTML = "The route is already activated&#46; <small>Click &lsquo;Refresh&rsquo; to start over&#46;</small>";
			document.getElementById("error").style.backgroundColor = "#AD0606";

		} else if (this.option === "") {

			theError.innerHTML = "Please select an option&#46;";
			document.getElementById("error").style.backgroundColor = "#AD0606";

		} else if (this.option != 2) {

			theError.innerHTML = this.actError;
			document.getElementById("error").style.backgroundColor = "#AD0606";

		}

	}
	
};

var closeRoute = {
	option:	"",
	clsError: "Please use option 5 to close the route",
	sealError: "1 belongs in this field",
	optError: "Please use 1 to close route",
	closeStr: "<form action=\"close_route.html#practice\" name=\"rt_Practice\" method=\"post\" onsubmit=\"closeRoute.clsConf('route-practice','seal','error')\"><table><tbody id=\"clsRtBody\"><tr><td>Load Number&nbsp;&nbsp;&#58;</td><td>&nbsp;0000843192</td></tr><tr><td>Trailer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#58;</td><td>&nbsp;BIG5 00209</td></tr><tr><td>Seal Nbr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#58;</td><td><input type=\"text\" name=\"seal\" id=\"seal\"></td><td>&#40;Place a 1 here&#41;</td></tr><tr><td colspan=2 style=\"color: rgb(0, 255, 255);\">Type Option&#44; Press Enter</td></tr><tr><td style=\"color: rgb(0, 255, 255);\">&nbsp;1 = Close Route</td></tr><tr class=\"act-option\"><td>Opt</td><td>Route Nbr</td><td>Seal Number</td><td>Status</td></tr><tr><td><input type=\"text\" name=\"option\" id=\"option\"></td><td>00209</td><td><input type=\"text\" name=\"sealNumber\" id=\"sealNumber\" disabled></td><td>Activated</td></tr><tr><td><a class=\"practice-submit\" onclick=\"closeRoute.refreshClose('route-practice')\">F5&ndash;Refresh</a></td><td><a class=\"practice-submit\" onclick=\"closeRoute.clsConf('route-practice','seal','error')\">F16&ndash;Confirm</a></td></tr></tbody></table></form>",
	succStr: "<form action=\"close_route.html#practice\" name=\"rt_Practice\" method=\"post\" onsubmit=\"closeRoute.succConf('route-practice','error')\"><table><thead><th colspan=\"2\">5 = Close Route</th></thead><tbody><tr><td class=\"act-option\">Opt</td><td class=\"act-option\">Route</td><td class=\"act-option\">Type</td><td class=\"act-option\">Status</td><td class=\"act-option\">Dock</td><td class=\"act-option\">Door</td><td class=\"act-option\">Trailer</td></tr><tr><td><input type=\"text\" name=\"option\" id=\"option\"></td><td><label for=\"option\">00209</label></td><td><label>Continuous</label></td><td><label>Unassigned</label></td><td><label></label></td><td><label></label></td><td><label></label></td></tr><tr><td><a class=\"practice-submit\" onclick=\"closeRoute.refreshConf('route-practice')\">F5&ndash;Refresh</a></td><td><a class=\"practice-submit\" onclick=\"closeRoute.succConf('route-practice','error')\">F16&ndash;Confirm</a></td></tr></tbody></table></form>",
	refreshclose: function (id) {

		var zeForm = document.getElementById(id);
		zeForm.innerHTML = this.closeStr;

	},
	refreshConf: function (id) {

		window.location.reload()

	},
	close: function (id1, id2) {
	
		var theForm = document.getElementById(id1);
		this.option = document.forms["rt_Practice"]["option"].value;
		var theError = document.getElementById(id2);

		if (this.option == 5) {

			theForm.innerHTML = this.closeStr;
			theError.innerHTML = "";
			document.getElementById("error").style.backgroundColor = "#FFF";

		} else {

			theError.innerHTML = this.clsError;
			document.getElementById("error").style.backgroundColor = "#AD0606";
		
		}
	
	},
	seal: "",
	clsConf: function (id1, id2, id3) {

		var theForm2 = document.getElementById(id1);
		var theError = document.getElementById(id3);
		this.seal = document.forms["rt_Practice"][id2].value;
		this.option = document.forms["rt_Practice"]["option"].value;
		document.getElementById(id2).style.backgroundColor = "rgb(0,0,0)";
		document.getElementById("error").style.backgroundColor = "#FFF";

		if (this.seal === "" && this.option === "") {

			theError.innerHTML = "Please enter all fields";
			document.getElementById("error").style.backgroundColor = "#AD0606";
	
		} else if (this.seal != 1) {
			
			document.getElementById(id2).style.backgroundColor = "rgb(0, 255, 0)";
			theError.innerHTML = this.sealError;
			document.getElementById("error").style.backgroundColor = "#AD0606";

		} else if (this.option != 1) {

			document.getElementById("option").style.backgroundColor = "rgb(0, 255, 0)";
			theError.innerHTML = this.optError;
			document.getElementById("error").style.backgroundColor = "#AD0606";

		} else {

			theForm2.innerHTML = this.succStr;
			theError.innerHTML = "Route succesfully closed";
			document.getElementById("error").style.backgroundColor = "rgb(0, 255, 0)";

		}

	},
	succConf: function (id1, id2) {

		var theForm3 = document.getElementById(id1);
		var theError = document.getElementById(id2);
		this.option = document.forms["rt_Practice"]["option"].value;

		if (this.option == 5) {

			theError.innerHTML = "The route is already closed&#46; <small>Click &lsquo;Refresh&rsquo; to start over&#46;</small>";
			document.getElementById("error").style.backgroundColor = "#AD0606";

		} else if (this.option === "") {

			theError.innerHTML = "Please select an option&#46;";
			document.getElementById("error").style.backgroundColor = "#AD0606";

		} else if (this.option != 5) {

			theError.innerHTML = this.clsError;
			document.getElementById("error").style.backgroundColor = "#AD0606";

		}

	}
	
};

var createRoute = {
	option:	"",
	crtError: "Please use option 3 to copy the route",
	rtError: "Please type 00500 in this field",
	rtTypeError: "Please use 01 for this option",
	svError: "BIG5 needs to go here",
	critError: "GENERIC needs to go here",
	bolError: "3 needs to go here",
	createStrCopy: "<form action=\"create_route.html#practice\" name=\"rt_Practice\" method=\"post\" onsubmit=\"createRoute.crtVerify('route-practice', 'error')\"><table><tbody id=\"crtRtBody\"><tr><td>Function&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#58;</td><td>3 Copy</td></tr><tr><td>Route Number&nbsp;&#58;</td><td><input type=\"text\" name=\"route\" id=\"route\" placeholder=\"00209\" onfocus=\"this.value=''\"></td></tr><tr><td>Load Number&nbsp;&nbsp;&#58;</td></tr><tr><td><a class=\"practice-submit\" onclick=\"createRoute.refreshCopy()\">F5&ndash;Refresh</a></td><td><a class=\"practice-submit\" onclick=\"createRoute.crtVerify('route-practice', 'error')\">F16&ndash;Confirm</a></td></tr></tbody></table></form>",
	createStrType: "<form action=\"create_route.html#practice\" name=\"rt_Practice\" method=\"post\" onsubmit=\"createRoute.crtConf('route-practice', 'rtType', 'shVia', 'rtCrite', 'rtBOL', 'error')\"><table><tbody id=\"crtRtBody\"><tr><td>Function&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#58;</td><td>3 Copy</td></tr><tr><td>Route Number&nbsp;&#58;</td><td>00500</td></tr><tr><td>Load Number&nbsp;&nbsp;&#58;</td></tr><tr class=\"rowTop\"><td>Route Type&nbsp;&nbsp;&nbsp;&#58;</td><td><input type=\"text\" name=\"rtType\" id=\"rtType\" maxlength=\"2\" onfocus=\"this.value=''\" onblur=\"createRoute.crtBlurType('rtType', 'typeMsg')\"><span id=\"typeMsg\"></span></td></tr><tr><td>Ship Via&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#58;</td><td><input type=\"text\" name=\"shVia\" id=\"shVia\" onfocus=\"this.value=''\" onblur=\"createRoute.crtBlurVia('shVia', 'viaMsg')\"><span id=\"viaMsg\"></span></td></tr><tr><td>Dock Door&nbsp;&nbsp;&nbsp;&nbsp;&#58;</td><td><input type=\"text\" id=\"crtDock\" disabled>&nbsp;<input type=\"text\" id=\"crtDoor\" disabled></td></tr><tr><td>Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#58;</td><td>00 Unassigned</td></tr><tr><td>Criteria Nmbr&#58;</td><td><input type=\"text\" name=\"rtCrite\" id=\"rtCrite\" onfocus=\"this.value=''\" onblur=\"createRoute.crtBlurCriteria('rtCrite', 'genMsg')\"></td><td><span id=\"genMsg\"></span></td></tr><tr><td>BOL Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#58;</td><td><input type=\"text\" name=\"rtBOL\" id=\"rtBOL\" maxlength=\"1\" onfocus=\"this.value=''\" oninput=\"createRoute.crtChngBOL('rtBOL', 'bolMsg')\"><span id=\"bolMsg\"></span></td></tr><tr class=\"rowTop\"><td><a class=\"practice-submit\" onclick=\"createRoute.refreshVerify('')\">F5&ndash;Refresh</a></td><td><a class=\"practice-submit\" onclick=\"createRoute.crtConf('route-practice', 'rtType', 'shVia', 'rtCrite', 'rtBOL', 'error')\">Verify&ndash;Enter</a></td></tr></tbody></table></form>",
	createStrConf: "<form action=\"create_route.html#practice\" name=\"rt_Practice\" method=\"post\"><table><thead><th colspan=\"2\">3 = Copy</th></thead><tbody id=\"crtRtBody\"><tr><td class=\"act-option\">Opt</td><td class=\"act-option\">Route</td><td class=\"act-option\">Load Number</td><td class=\"act-option\">Route Type</td><td class=\"act-option\">Status</td><td class=\"act-option\">Ship Via</td><td class=\"act-option\">Dock Door</td></tr><tr><td><input type=\"text\" name=\"option\" id=\"option\" disabled></td><td>00500</td><td></td><td>01 Continuous</td><td>00 Unassigned</td><td>BIG5</td><td></td></tr><tr><td><a class=\"practice-submit\" onclick=\"window.location.reload()\">F5&ndash;Refresh</a></td></tr></tbody></table></form>",
	refreshCopy: function (id) {

		var zeForm = document.getElementById(id);
		zeForm.innerHTML = this.createStrCopy;

	},
	refreshVerify: function (id) {

		var zeForm = document.getElementById(id);
		zeForm.innerHTML = this.createStrType;
	},
	refreshConf: function (id) {

		window.location.reload()

	},
	crtCopy: function (id1, id2) {
	
		var theForm = document.getElementById(id1);
		this.option = document.forms["rt_Practice"]["option"].value;
		var theError = document.getElementById(id2);

		if (this.option == 3) {

			theForm.innerHTML = this.createStrCopy;
			theError.innerHTML = "";
			theError.style.backgroundColor = "#FFF";

		} else {

			theError.innerHTML = this.crtError;
			theError.style.backgroundColor = "#AD0606";
		
		}
	
	},
	crtVerify: function (id1, id2) {

		var theForm = document.getElementById(id1);
		this.option = document.forms["rt_Practice"]["route"].value;
		var theError = document.getElementById(id2);

		if (this.option == 500) {

			theForm.innerHTML = this.createStrType;
			theError.innerHTML = "";
			theError.style.backgroundColor = "#FFF";

		} else if (this.option != 500) {

			theError.innerHTML = "Please create route 00500";
			theError.style.backgroundColor = "#AD0606";
			this.option = "";

		}

	},
	crtBlurType: function (id1, id2) {

		var myElem = document.getElementById(id1);
		var myDest = document.getElementById(id2);

		if (myElem.value == 01) {

			myDest.innerHTML = "&nbsp;Continuous";
			myElem.style.backgroundColor = "rgb(0, 0, 0)";

		} else if (myElem.value != 01 && myElem.value != "") {

			myDest.innerHTML = "<small>&nbsp;Wrong Route Type</small>";
			myElem.style.backgroundColor = "rgb(0, 255, 0)";

		} else {

			myDest.innerHTML = "";
			myElem.style.backgroundColor = "rgb(0, 0, 0)";

		}

	},
	crtBlurVia: function (id1, id2) {

		var myElem = document.getElementById(id1);
		var myDest = document.getElementById(id2);

		var myValue = myElem.value;

		if (myValue.toLowerCase() == "big5") {

			myDest.innerHTML = "&nbsp;Big 5";
			myDest.style.fontSize = "24px";
			myElem.style.backgroundColor = "rgb(0, 0, 0)";

		} else if (myValue.toLowerCase() != "big5" && myValue.toLowerCase() != "") {

			myDest.innerHTML = "<small>&nbsp;Bad Ship Via</small>";
			myDest.style.fontSize = "14px";
			myElem.style.backgroundColor = "rgb(0, 255, 0)";

		} else {

			myDest.innerHTML = "";
			myElem.style.backgroundColor = "rgb(0, 0, 0)";

		}

	},
	crtBlurCriteria: function (id1, id2) {

		var myElem = document.getElementById(id1);
		var myDest = document.getElementById(id2);

		var myValue = myElem.value;

		if (myValue.toLowerCase() == "generic") {

			myDest.innerHTML = "generic criteria";
			myElem.style.backgroundColor = "rgb(0, 0, 0)";

		} else if (myValue.toLowerCase() != "generic" && myValue.toLowerCase() != "") {

			myDest.innerHTML = "<small>&nbsp;Incorrect Criteria</small>";
			myElem.style.backgroundColor = "rgb(0, 255, 0)";

		} else {

			myDest.innerHTML = "";
			myElem.style.backgroundColor = "rgb(0, 0, 0)";

		}

	},
	crtChngBOL: function (id1, id2) {

		var myElem = document.getElementById(id1);
		var myDest = document.getElementById(id2);

		if (myElem.value == 3) {

			myDest.innerHTML = "&nbsp;VICs BOL";
			myElem.style.backgroundColor = "rgb(0, 0, 0)";

		} else if (myElem.value != 3 && myElem.value != "") {

			myDest.innerHTML = "<small>&nbsp;Wrong BOL Type</small>";
			myElem.style.backgroundColor = "rgb(0, 255, 0)";

		} else {

			myDest.innerHTML = "";
			myElem.style.backgroundColor = "rgb(0, 0, 0)";

		}

	},
	rtType: "",
	shVia: "",
	rtCriteria: "",
	rtBOL: "",
	crtConf: function (id1, id2, id3, id4, id5, id6) {

		var theForm2 = document.getElementById(id1);
		var theError = document.getElementById(id6);
		this.rtType = document.forms["rt_Practice"][id2].value;
		this.shVia = document.forms["rt_Practice"][id3].value;
		this.rtCriteria = document.forms["rt_Practice"][id4].value;
		this.rtBOL = document.forms["rt_Practice"][id5].value;
		document.getElementById(id2).style.backgroundColor = "rgb(0,0,0)";
		document.getElementById(id6).style.backgroundColor = "#FFF";

		if (this.rtType === "" && this.shVia === "" && this.rtCriteria === "" && this.rtBOL === "") {

			theError.innerHTML = "Please enter all fields";
			document.getElementById(id6).style.backgroundColor = "#AD0606";
	
		} else if (this.rtType != 01) {
			
			document.getElementById(id2).style.backgroundColor = "rgb(0, 255, 0)";
			theError.innerHTML = this.rtTypeError;
			document.getElementById(id6).style.backgroundColor = "#AD0606";

		} else if (this.shVia.toUpperCase() !== "BIG5") {

			document.getElementById(id3).style.backgroundColor = "rgb(0, 255, 0)";
			theError.innerHTML = this.svError;
			document.getElementById(id6).style.backgroundColor = "#AD0606";

		} else if (this.rtCriteria.toUpperCase() !== "GENERIC") {

			document.getElementById(id4).style.backgroundColor = "rgb(0, 255, 0)";
			theError.innerHTML = this.critError;
			document.getElementById(id6).style.backgroundColor = "#AD0606";

		} else if (this.rtBOL != 3) {

			document.getElementById(id5).style.backgroundColor = "rgb(0, 255, 0)";
			theError.innerHTML = this.bolError;
			document.getElementById(id6).style.backgroundColor = "#AD0606";

		} else {

			theForm2.innerHTML = this.createStrConf;
			theError.innerHTML = "Route succesfully created <small class=\"italy\">Refresh to start over</small>";
			document.getElementById(id6).style.backgroundColor = "rgb(0, 255, 0)";

		}

	}
	
};

//var checkID = document.getElementById('route-practice');
//alert(checkID.innerHTML);