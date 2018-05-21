function activate() {
    'use strict';
    
    var holdValue, optValue = document.getElementById('option').value, rtPracticeCode = document.getElementById('route-practice'), errMsg = document.getElementById('errMsg');
    
    if (optValue === "2") {
        
        rtPracticeCode.innerHTML = "<form action=\"open_route.html#practice\" method=\"post\"><label for=\"ndoor\">Dock&#47Door&#58;</label> <input type=\"text\" name=\"door\" id=\"ndoor\">	<input type=\"text\" name=\"dock\" id=\"dock\"><br> <label for=\"shipvia\">Ship Via&nbsp;&#58;</label> <input type=\"text\" name=\"shipvia\" id=\"shipvia\" placeholder=\"BIG5\"><br> <label for=\"trailer\">Trailer&nbsp;&nbsp;&#58;</label> <input type=\"text\" name=\"trailer\" id=\"trailer\">	<input type=\"text\" name=\"route\" id=\"route\"><br><br> <button type=\"submit\" class=\"practice-submit\">F5&ndash;Refresh</button> <button type=\"submit\" class=\"practice-submit\">F16&ndash;Confirm</button></form>";
        
    } else if (optValue === "") {
        
        document.getElementById('option').style.backgroundColor = "rgb(0, 255, 0)";
        document.getElementById('errMsg').style.color = "#FFF";
        errMsg.innerHTML = "Please select an option";
        
    } else {
        
        document.getElementById('option').style.backgroundColor = "rgb(0, 255, 0)";
        document.getElementById('errMsg').style.color = "#FFF";
        errMsg.innerHTML = "Not a valid selection";
        
    }
    
}