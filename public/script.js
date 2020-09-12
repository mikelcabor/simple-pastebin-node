console.log(window.location.hostname);
const path = knowURL(); //in this path is the json with all the codes
console.log(path);
var pageElement;

//this allow us to work in local or deployed version
function knowURL(){
    if (window.location.hostname=='localhost') {
        return "http://localhost:3000/leer";
    } else {
        return "https://" + window.location.hostname + "/leer";
    }
}

//Deprecated get function(but it works!) dont know the problems of this¿?¿
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
} 

var json_obj = JSON.parse(Get(path));

//need to do this onload to avoid get a null getting an element 
window.onload = function (){
    for (var i = json_obj.length - 1; i >= 0; i--) {
        console.log(json_obj[i]);
        //replace <> to avoid injection
        code = json_obj[i].textarea.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        //create new card
        const div = document.createElement("div");
        div.className = "container";
        div.innerHTML = "<div class='row'>"+
            "<div class='col m12'>"+
                "<div class='card darken-1'>" +
                    "<div class='card-content'>" +
                        "<span class='card-title'>"+ json_obj[i].name +"</span>" +
                        "<pre>" + code+"</pre>" +
                        "</div>" +
                        "<div class='card-action'>"+
                        "<a href='#'>Copiar codigo</a>" +
                        "</div>" +
                    "</div>" +
                "</div>";
        
        //atach the card to the container element
         const container = document.getElementById("container");
         container.appendChild(div);
    }
    
}







 