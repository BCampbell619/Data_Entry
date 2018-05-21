var waveSheet = {

	hideStatus: "visible",
	hideLoop: 0,
	hideColumns: function (id1, id2) {

		var myEl = document.getElementsByClassName(id1);
		var myElLength = myEl.length;

		var myLbl = document.getElementById(id2);
		
		if (this.hideStatus === "visible") {

			while (this.hideLoop < myElLength) {

				myEl[this.hideLoop].style.display = "none";
				myEl[this.hideLoop].style.visibility = "hidden";
				myEl[this.hideLoop].style.transition = "1s";
				this.hideStatus = "hidden";

				this.hideLoop++;
			}

			this.hideLoop = 0;
			myLbl.innerHTML = "Show";

		} else if (this.hideStatus === "hidden") {

			while (this.hideLoop < myElLength) {

				myEl[this.hideLoop].style.visibility = "visible";
				myEl[this.hideLoop].style.display = "";
				this.hideStatus = "visible";

				this.hideLoop++;

			}

			this.hideLoop = 0;
			myLbl.innerHTML = "Hide";
	
		}

	}

};

var waveBuild = {
    
    userShift: "",
    selCount: [],
    choice: "",
    genWaveStr: "<form action=\"build_waves_1.html#practice\" method=\"post\" name=\"wvb_Practice\" id=\"wvb_Practice\"><h2>Generate Retail Pick Wave</h2><table><tbody id=\"generate\"><tr><td class=\"company\">Company</td><td class=\"division\">Division</td><td class=\"day\">Day</td><td class=\"shift\">Shift</td><td class=\"rule\">Rule &#35;</td><td class=\"waveDesc\">Wave Description</td></tr><tr><td class=\"company\" style=\"color: #FFF;\">Big 5</td><td class=\"division\" style=\"color: #FFF;\">Riverside</td><td style=\"color: #FFF;\">1</td><td style=\"color: #FFF;\">R1</td><td style=\"color: #FFF;\"> </td><td style=\"color: #FFF;\"><input class=\"vlgInput\" type=\"text\" placeholder=\"Monday Regular Schedule\" disabled></td></tr><tr><td class=\"company\" colspan=\"3\">Allocation&#47;Replenishment</td></tr><tr><td class=\"company\" colspan=\"2\">Wave Process Type&nbsp;&#46;&nbsp;&#58;<input class=\"smInput\" type=\"text\" placeholder=\"1A\" disabled></td><td></td><td colspan=\"2\">All From Acti</td><td>Force&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58; <input class=\"smInput\" type=\"text\" placeholder=\"Y\" disabled>&nbsp;Yes</td></tr><tr><td class=\"company\" colspan=\"2\">Pick Detr Type&nbsp;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58;<input class=\"mdInput\" type=\"text\" placeholder=\"***\" disabled></td><td></td><td colspan=\"2\"> </td> <td>Force&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58; <input class=\"smInput\" type=\"text\" placeholder=\"N\" disabled>&nbsp;No</td></tr><tr><td class=\"company\" colspan=\"2\">Pick Asgn Type&nbsp;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58;<input class=\"mdInput\" type=\"text\" placeholder=\"***\" disabled></td><td></td><td colspan=\"2\"> </td> <td>Force&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58; <input class=\"smInput\" type=\"text\" placeholder=\"N\" disabled>&nbsp;No</td></tr><tr><td class=\"company\" colspan=\"2\">Inv Aloc Type&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58;<input class=\"mdInput\" type=\"text\" placeholder=\"***\" disabled></td><td></td><td colspan=\"2\"> </td> <td>Force&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58; <input class=\"smInput\" type=\"text\" placeholder=\"N\" disabled>&nbsp;No</td></tr><tr><td class=\"company\" colspan=\"2\">Excess Wave Need&nbsp;&nbsp;&#46;&nbsp;&#58;<input class=\"smInput\" type=\"text\" placeholder=\"1\" disabled></td><td></td><td colspan=\"2\"> </td><td>Force&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58; <input class=\"smInput\" type=\"text\" placeholder=\"Y\" disabled>&nbsp;Yes</td></tr><tr><td class=\"company\" colspan=\"2\">Act Priority 60 Rpl&nbsp;&#58;<input class=\"smInput\" type=\"text\" placeholder=\"1\" disabled></td><td colspan=\"2\">Any Time</td><td> </td></tr><tr><td class=\"company\" colspan=\"2\">Csp Priority 60 Rpl&nbsp;&#58;<input class=\"smInput\" type=\"text\" placeholder=\"0\" disabled></td><td colspan=\"3\">No Pty 60</td><td>Multi&ndash;Threading Parameters</td></tr><tr><td class=\"company\" colspan=\"2\">Group All DT By SKU&nbsp;&#58;<input class=\"smInput\" type=\"text\" placeholder=\"N\" disabled></td><td colspan=\"2\">No</td><td> </td><td>Run Concur Waves&nbsp;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58; <input class=\"smInput\" type=\"text\" placeholder=\"N\" disabled>&nbsp;No</td></tr><tr><td class=\"company\" colspan=\"2\">SKU Agr Based Rpl&nbsp;&#46;&nbsp;&#58;<input class=\"smInput\" type=\"text\" placeholder=\"0\" disabled></td><td colspan=\"2\">None</td><td> </td><td>Alloc Profile&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58; <input class=\"mdlgInput\" type=\"text\" disabled></td></tr><tr><td class=\"company\" colspan=\"2\">Bump Up 60&#47;70 Rpl&nbsp;&#46;&nbsp;&#58;<input class=\"smInput\" type=\"text\" placeholder=\"N\" disabled></td><td colspan=\"2\">No</td><td> </td><td>Cubing Profile&nbsp;&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58; <input class=\"mdlgInput\" type=\"text\" disabled></td></tr><tr><td class=\"company\" colspan=\"2\">Min Zone Allocation&nbsp;&#58;<input class=\"smInput\" type=\"text\" placeholder=\"N\" disabled></td><td colspan=\"2\">No</td><td> </td><td>Min &#35; Pkt for MT Cbng&nbsp;&#58; <input class=\"mdsInput\" type=\"text\" disabled></td></tr><tr><td class=\"company\" colspan=\"4\">Pickticket Selection</td><td> </td><td>Lbl Prt Profile&nbsp;&#46;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58; <input class=\"mdlgInput\" type=\"text\" disabled></td></tr><tr><td class=\"company\" colspan=\"2\">Skp Inv Shtg Distro&nbsp;&#58; N</td><td> </td><td> </td><td> </td><td>Min &#35; Ctn for MT&nbsp;&nbsp;&#46;&nbsp;&#46;&nbsp;&#58; <input class=\"mdsInput\" type=\"text\" disabled></td></tr><tr><td class=\"company\" colspan=\"2\">Apply Contraints&nbsp;&nbsp;&#46;&nbsp;&#58; N</td><td>No</td><td colspan=\"3\"> </td></tr></tbody><tfooter><tr><td id=\"wvb_Submit\" colspan=\"2\"><button type=\"button\" onclick=\"waveBuild.actRuleRtn('route-practice')\" id=\"wvb_Button\">F16&ndash;Confirm</button></td></tr></tfooter></table></form>",
    scheduleStr: "<form action=\"build_waves_1.html#practice\" method=\"post\" name=\"wvb_Practice\" id=\"wvb_Practice\"><h3>Type Options&#44; Press Enter</h3><table id=\"smTbl\"><tbody><tr><td class=\"wvb_Options\"></td><td class=\"wvb_Options\">A&#61;Activate</td><td class=\"wvb_Options\">I&#61;Inactive</td></tr><tr><td class=\"wvb_Head\">Op</td><td class=\"wvb_Head\">Day Shift</td><td class=\"wvb_Head\">Rule &#35;</td><td class=\"wvb_Head Status\">Status</td><td class=\"wvb_Head Comment\">Comment</td></tr><tr><td><input type=\"text\" name=\"rule50\" id=\"rule50\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay50\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum50\">50&#46;00</td><td class=\"wvb_Body\" id=\"50Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment50\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule60\" id=\"rule60\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay60\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum60\">60&#46;00</td><td class=\"wvb_Body\" id=\"60Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment60\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule70\" id=\"rule70\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay70\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum70\">70&#46;00</td><td class=\"wvb_Body\" id=\"70Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment70\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule80\" id=\"rule80\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay80\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum80\">80&#46;00</td><td class=\"wvb_Body\" id=\"80Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment80\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule90\" id=\"rule90\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay90\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum90\">90&#46;00</td><td class=\"wvb_Body\" id=\"90Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment90\">R&#95;MON00801</td></tr></tbody><tfooter><tr><td id=\"wvb_Submit\" colspan=\"2\"><button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button></td></tr></tfooter></table></form>",
    fiftyStr: "<form action=\"build_waves_1.html#practice\" method=\"post\" name=\"wvb_Practice\" id=\"wvb_Practice\"><h3>Type Options&#44; Press Enter</h3><table id=\"smTbl\"><tbody><tr><td class=\"wvb_Options\"></td><td class=\"wvb_Options\">A&#61;Activate</td><td class=\"wvb_Options\">I&#61;Inactive</td></tr><tr><td class=\"wvb_Head\">Op</td><td class=\"wvb_Head\">Day Shift</td><td class=\"wvb_Head\">Rule &#35;</td><td class=\"wvb_Head Status\">Status</td><td class=\"wvb_Head Comment\">Comment</td></tr><tr><td><input type=\"text\" name=\"rule50\" id=\"rule50\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay50\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum50\">50&#46;00</td><td class=\"wvb_Body\" id=\"50Stat\">A</td><td class=\"wvb_Body\" id=\"selectComment50\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule60\" id=\"rule60\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay60\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum60\">60&#46;00</td><td class=\"wvb_Body\" id=\"60Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment60\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule70\" id=\"rule70\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay70\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum70\">70&#46;00</td><td class=\"wvb_Body\" id=\"70Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment70\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule80\" id=\"rule80\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay80\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum80\">80&#46;00</td><td class=\"wvb_Body\" id=\"80Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment80\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule90\" id=\"rule90\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay90\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum90\">90&#46;00</td><td class=\"wvb_Body\" id=\"90Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment90\">R&#95;MON00801</td></tr></tbody><tfooter><tr><td id=\"wvb_Submit\" colspan=\"2\"><button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button></td></tr></tfooter></table></form>",
    sixtyStr: "<form action=\"build_waves_1.html#practice\" method=\"post\" name=\"wvb_Practice\" id=\"wvb_Practice\"><h3>Type Options&#44; Press Enter</h3><table id=\"smTbl\"><tbody><tr><td class=\"wvb_Options\"></td><td class=\"wvb_Options\">A&#61;Activate</td><td class=\"wvb_Options\">I&#61;Inactive</td></tr><tr><td class=\"wvb_Head\">Op</td><td class=\"wvb_Head\">Day Shift</td><td class=\"wvb_Head\">Rule &#35;</td><td class=\"wvb_Head Status\">Status</td><td class=\"wvb_Head Comment\">Comment</td></tr><tr><td><input type=\"text\" name=\"rule50\" id=\"rule50\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay50\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum50\">60&#46;00</td><td class=\"wvb_Body\" id=\"50Stat\">A</td><td class=\"wvb_Body\" id=\"selectComment50\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule60\" id=\"rule60\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay60\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum60\">50&#46;00</td><td class=\"wvb_Body\" id=\"60Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment60\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule70\" id=\"rule70\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay70\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum70\">70&#46;00</td><td class=\"wvb_Body\" id=\"70Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment70\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule80\" id=\"rule80\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay80\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum80\">80&#46;00</td><td class=\"wvb_Body\" id=\"80Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment80\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule90\" id=\"rule90\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay90\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum90\">90&#46;00</td><td class=\"wvb_Body\" id=\"90Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment90\">R&#95;MON00801</td></tr></tbody><tfooter><tr><td id=\"wvb_Submit\" colspan=\"2\"><button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button></td></tr></tfooter></table></form>",
    seventyStr: "<form action=\"build_waves_1.html#practice\" method=\"post\" name=\"wvb_Practice\" id=\"wvb_Practice\"><h3>Type Options&#44; Press Enter</h3><table id=\"smTbl\"><tbody><tr><td class=\"wvb_Options\"></td><td class=\"wvb_Options\">A&#61;Activate</td><td class=\"wvb_Options\">I&#61;Inactive</td></tr><tr><td class=\"wvb_Head\">Op</td><td class=\"wvb_Head\">Day Shift</td><td class=\"wvb_Head\">Rule &#35;</td><td class=\"wvb_Head Status\">Status</td><td class=\"wvb_Head Comment\">Comment</td></tr><tr><td><input type=\"text\" name=\"rule50\" id=\"rule50\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay50\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum50\">70&#46;00</td><td class=\"wvb_Body\" id=\"50Stat\">A</td><td class=\"wvb_Body\" id=\"selectComment50\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule60\" id=\"rule60\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay60\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum60\">50&#46;00</td><td class=\"wvb_Body\" id=\"60Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment60\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule70\" id=\"rule70\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay70\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum70\">60&#46;00</td><td class=\"wvb_Body\" id=\"70Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment70\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule80\" id=\"rule80\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay80\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum80\">80&#46;00</td><td class=\"wvb_Body\" id=\"80Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment80\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule90\" id=\"rule90\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay90\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum90\">90&#46;00</td><td class=\"wvb_Body\" id=\"90Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment90\">R&#95;MON00801</td></tr></tbody><tfooter><tr><td id=\"wvb_Submit\" colspan=\"2\"><button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button></td></tr></tfooter></table></form>",
    eightyStr: "<form action=\"build_waves_1.html#practice\" method=\"post\" name=\"wvb_Practice\" id=\"wvb_Practice\"><h3>Type Options&#44; Press Enter</h3><table id=\"smTbl\"><tbody><tr><td class=\"wvb_Options\"></td><td class=\"wvb_Options\">A&#61;Activate</td><td class=\"wvb_Options\">I&#61;Inactive</td></tr><tr><td class=\"wvb_Head\">Op</td><td class=\"wvb_Head\">Day Shift</td><td class=\"wvb_Head\">Rule &#35;</td><td class=\"wvb_Head Status\">Status</td><td class=\"wvb_Head Comment\">Comment</td></tr><tr><td><input type=\"text\" name=\"rule50\" id=\"rule50\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay50\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum50\">80&#46;00</td><td class=\"wvb_Body\" id=\"50Stat\">A</td><td class=\"wvb_Body\" id=\"selectComment50\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule60\" id=\"rule60\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay60\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum60\">50&#46;00</td><td class=\"wvb_Body\" id=\"60Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment60\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule70\" id=\"rule70\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay70\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum70\">60&#46;00</td><td class=\"wvb_Body\" id=\"70Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment70\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule80\" id=\"rule80\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay80\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum80\">70&#46;00</td><td class=\"wvb_Body\" id=\"80Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment80\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule90\" id=\"rule90\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay90\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum90\">90&#46;00</td><td class=\"wvb_Body\" id=\"90Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment90\">R&#95;MON00801</td></tr></tbody><tfooter><tr><td id=\"wvb_Submit\" colspan=\"2\"><button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button></td></tr></tfooter></table></form>",
    nintyStr: "<form action=\"build_waves_1.html#practice\" method=\"post\" name=\"wvb_Practice\" id=\"wvb_Practice\"><h3>Type Options&#44; Press Enter</h3><table id=\"smTbl\"><tbody><tr><td class=\"wvb_Options\"></td><td class=\"wvb_Options\">A&#61;Activate</td><td class=\"wvb_Options\">I&#61;Inactive</td></tr><tr><td class=\"wvb_Head\">Op</td><td class=\"wvb_Head\">Day Shift</td><td class=\"wvb_Head\">Rule &#35;</td><td class=\"wvb_Head Status\">Status</td><td class=\"wvb_Head Comment\">Comment</td></tr><tr><td><input type=\"text\" name=\"rule50\" id=\"rule50\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay50\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum50\">90&#46;00</td><td class=\"wvb_Body\" id=\"50Stat\">A</td><td class=\"wvb_Body\" id=\"selectComment50\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule60\" id=\"rule60\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay60\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum60\">50&#46;00</td><td class=\"wvb_Body\" id=\"60Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment60\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule70\" id=\"rule70\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay70\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum70\">60&#46;00</td><td class=\"wvb_Body\" id=\"70Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment70\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule80\" id=\"rule80\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay80\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum80\">70&#46;00</td><td class=\"wvb_Body\" id=\"80Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment80\">R&#95;MON00801</td></tr><tr><td><input type=\"text\" name=\"rule90\" id=\"rule90\" style=\"width: 30px; margin-left: 25px;\"></td><td class=\"wvb_Body\" id=\"selectDay90\">1&nbsp;&nbsp;R1</td><td class=\"wvb_Body\" id=\"rNum90\">80&#46;00</td><td class=\"wvb_Body\" id=\"90Stat\">I</td><td class=\"wvb_Body\" id=\"selectComment90\">R&#95;MON00801</td></tr></tbody><tfooter><tr><td id=\"wvb_Submit\" colspan=\"2\"><button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button></td></tr></tfooter></table></form>",
    selShift: function (id) {

        this.userShift = document.forms["wvb_Practice"]["shiftSelect"].value;
        
        if (this.userShift === "1") {
            
            var zeForm = document.getElementById(id);
            zeForm.innerHTML = this.scheduleStr;
            
        } else if (this.userShift !== "") {
            
            document.forms["wvb_Practice"]["shiftSelect"].style.backgroundColor = "rgb(0, 255, 0)";
            
        }
    },
    actRule: function () {
        
        'use strict';
        var ruleOne = document.forms["wvb_Practice"]["rule50"].value, ruleTwo = document.forms["wvb_Practice"]["rule60"].value, ruleThree = document.forms["wvb_Practice"]["rule70"].value, ruleFour = document.forms["wvb_Practice"]["rule80"].value, ruleFive = document.forms["wvb_Practice"]["rule90"].value;
        
        var Stat50 = document.getElementById("50Stat");
        var rNum50 = document.getElementById("rNum50");
        var Stat60 = document.getElementById("60Stat");
        var rNum60 = document.getElementById("rNum60");
        var Stat70 = document.getElementById("70Stat");
        var rNum70 = document.getElementById("rNum70");
        var Stat80 = document.getElementById("80Stat");
        var rNum80 = document.getElementById("rNum80");
        var Stat90 = document.getElementById("90Stat");
        var rNum90 = document.getElementById("rNum90");
        var button = document.getElementById("wvb_Submit");
        
        if (ruleOne === "a") {
            
            this.selCount.push("ruleOneA");
            this.choice = "ruleOne";
            
        } else if (ruleOne === "i" && Stat50.textContent === "A") {
            
            this.selCount.push("ruleOneI");
            this.selCount.shift();  
            this.choice = "ruleOneI";
            
        }
        
        if (ruleTwo === "a") {
            
            this.selCount.push("ruleTwo");
            this.choice = "ruleTwo";
            
        } else if (ruleTwo === "i" && Stat60.textContent === "I") {
            
            alert("Rule is already inactive.");
            document.forms["wvb_Practice"]["rule60"].value = "";
            
        }
        
        if (ruleThree === "a") {
            
            this.selCount.push("ruleThree");
            this.choice = "ruleThree";
            
        } else if (ruleThree === "i" && Stat70.textContent === "I") {
            
            alert("Rule is already inactive.");
            document.forms["wvb_Practice"]["rule70"].value = "";
            
        }
        
        if (ruleFour === "a") {
            
            this.selCount.push("ruleFour");
            this.choice = "ruleFour";
            
        } else if (ruleFour === "i" && Stat80.textContent === "I") {
            
            alert("Rule is already inactive.");
            document.forms["wvb_Practice"]["rule80"].value = "";
            
        }
        
        if (ruleFive === "a") {
            
            this.selCount.push("ruleFive");
            this.choice = "ruleFive";
            
        } else if (ruleFive === "i" && Stat90.textContent === "I") {
            
            alert("Rule is already inactive.");
            document.forms["wvb_Practice"]["rule90"].value = "";
            
        }
        
        if (this.selCount.length >= 2) {
            
            alert("You cannot select more than one rule to activate. Activating more than one rule will create errors.");
            
            document.forms["wvb_Practice"]["rule50"].value = "";
            document.forms["wvb_Practice"]["rule60"].value = "";
            document.forms["wvb_Practice"]["rule70"].value = "";
            document.forms["wvb_Practice"]["rule80"].value = "";
            document.forms["wvb_Practice"]["rule90"].value = "";
            
            while (this.selCount.length >= 2) {
                
                this.selCount.pop();
                
            }
            
        } else if (this.selCount.length === 1) {
            
            if (this.selCount[0] === "ruleOneA") {
                
                Stat50.innerHTML = "A";
                document.forms["wvb_Practice"]["rule50"].value = "";
                button.innerHTML = "<button type=\"button\" onclick=\"waveBuild.runWave('route-practice')\" id=\"wvb_Button\">F16&ndash;Run Wave</button>";
                
            } else if (this.selCount[0] === "ruleTwo") {
                
                Stat50.innerHTML = "A";
                rNum50.innerHTML = "60&#46;00";
                rNum60.innerHTML = "50&#46;00";
                document.forms["wvb_Practice"]["rule60"].value = "";
                button.innerHTML = "<button type=\"button\" onclick=\"waveBuild.runWave('route-practice')\" id=\"wvb_Button\">F16&ndash;Run Wave</button>";
                
            } else if (this.selCount[0] === "ruleThree") {
                
                Stat50.innerHTML = "A";
                rNum50.innerHTML = "70&#46;00";
                rNum60.innerHTML = "50&#46;00";
                rNum70.innerHTML = "60&#46;00";
                document.forms["wvb_Practice"]["rule70"].value = "";
                button.innerHTML = "<button type=\"button\" onclick=\"waveBuild.runWave('route-practice')\" id=\"wvb_Button\">F16&ndash;Run Wave</button>";
                
            } else if (this.selCount[0] === "ruleFour") {
                
                Stat50.innerHTML = "A";
                rNum50.innerHTML = "80&#46;00";
                rNum60.innerHTML = "50&#46;00";
                rNum70.innerHTML = "60&#46;00";
                rNum80.innerHTML = "70&#46;00";
                document.forms["wvb_Practice"]["rule80"].value = "";
                button.innerHTML = "<button type=\"button\" onclick=\"waveBuild.runWave('route-practice')\" id=\"wvb_Button\">F16&ndash;Run Wave</button>";
                
            } else if (this.selCount[0] === "ruleFive") {
                
                Stat50.innerHTML = "A";
                rNum50.innerHTML = "90&#46;00";
                rNum60.innerHTML = "50&#46;00";
                rNum70.innerHTML = "60&#46;00";
                rNum80.innerHTML = "70&#46;00";
                rNum90.innerHTML = "80&#46;00";
                document.forms["wvb_Practice"]["rule90"].value = "";
                button.innerHTML = "<button type=\"button\" onclick=\"waveBuild.runWave('route-practice')\" id=\"wvb_Button\">F16&ndash;Run Wave</button>";
                
            } else if (this.choice === "ruleOneI") {
                
                if (rNum50.textContent === "50.00") {
                    
                    Stat50.innerHTML = "I";
                    document.forms["wvb_Practice"]["rule50"].value = "";
                    this.selCount.pop();
                    button.innerHTML = "<button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button>";
                    
                } else if (rNum50.textContent === "60.00") {
                    
                    Stat50.innerHTML = "I";
                    rNum50.innerHTML = "50&#46;00";
                    rNum60.innerHTML = "60&#46;00";
                    document.forms["wvb_Practice"]["rule50"].value = "";
                    this.selCount.pop();
                    button.innerHTML = "<button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button>";
                    
                } else if (rNum50.textContent === "70.00") {
                    
                    Stat50.innerHTML = "I";
                    rNum50.innerHTML = "50&#46;00";
                    rNum60.innerHTML = "60&#46;00";
                    rNum70.innerHTML = "70&#46;00";
                    document.forms["wvb_Practice"]["rule50"].value = "";
                    this.selCount.pop();
                    button.innerHTML = "<button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button>";
                    
                } else if (rNum50.textContent === "80.00") {
                    
                    Stat50.innerHTML = "I";
                    rNum50.innerHTML = "50&#46;00";
                    rNum60.innerHTML = "60&#46;00";
                    rNum70.innerHTML = "70&#46;00";
                    rNum80.innerHTML = "80&#46;00";
                    document.forms["wvb_Practice"]["rule50"].value = "";
                    this.selCount.pop();
                    button.innerHTML = "<button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button>";
                    
                } else if (rNum50.textContent === "90.00") {
                    
                    Stat50.innerHTML = "I";
                    rNum50.innerHTML = "50&#46;00";
                    rNum60.innerHTML = "60&#46;00";
                    rNum70.innerHTML = "70&#46;00";
                    rNum80.innerHTML = "80&#46;00";
                    rNum90.innerHTML = "90&#46;00";
                    document.forms["wvb_Practice"]["rule50"].value = "";
                    this.selCount.pop();
                    button.innerHTML = "<button type=\"button\" onclick=\"waveBuild.actRule()\" id=\"wvb_Button\">F16&ndash;Confirm</button>";
                    
                }
                
            }
            
        }
        
    },
    runWave: function (id) {
        
        'use strict';
        var zeForm = document.getElementById(id);
        zeForm.innerHTML = this.genWaveStr;
        
    },
    actRuleRtn: function (id) {
        
        'use strict';
        
        if (this.choice === "ruleOne") {
            
            var zeForm = document.getElementById(id);
            zeForm.innerHTML = this.fiftyStr;
            
        } else if (this.choice === "ruleTwo") {
            
            var zeForm = document.getElementById(id);
            zeForm.innerHTML = this.sixtyStr;
            
        } else if (this.choice === "ruleThree") {
            
            var zeForm = document.getElementById(id);
            zeForm.innerHTML = this.seventyStr;
            
        } else if (this.choice === "ruleFour") {
            
            var zeForm = document.getElementById(id);
            zeForm.innerHTML = this.eightyStr;
            
        } else if (this.choice === "ruleFive") {
            
            var zeForm = document.getElementById(id);
            zeForm.innerHTML = this.nintyStr;
            
        }
        
    }
    
};

if (waveBuild.choice === "ruleOne") {
    
    waveBuild.Stat50.innerHTML = "A";
    
}