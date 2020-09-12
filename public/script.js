
//Submit del boton en forms.html

console.log(window.location.hostname);
const path = window.location.hostname + "/leer";
var pageElement;

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
} 

var json_obj = JSON.parse(Get('http://localhost:3000/leer'));

window.onload = function (){
    for (var i = json_obj.length - 1; i >= 0; i--) {
        console.log(json_obj[i]);
        
        const div = document.createElement("div");
        div.className = "container";
        div.innerHTML = "<div class='row'>"+
            "<div class='col m12'>"+
                "<div class='card darken-1'>" +
                    "<div class='card-content'>" +
                        "<span class='card-title'>"+ json_obj[i].name +"</span>" +
                        "<pre>" + json_obj[i].textarea +"</pre>" +
                        "</div>" +
                        "<div class='card-action'>"+
                        "<a href='#'>Copiar codigo</a>" +
                        "</div>" +
                    "</div>" +
                "</div>";
        
         const container = document.getElementById("container");
         container.appendChild(div);
    }
    /*json_obj.forEach(element => {
        console.log(element);   
        const div = document.createElement("div");
        div.className = "container";
        div.innerHTML = "<div class='row'>"+
            "<div class='col m12'>"+
                "<div class='card darken-1'>" +
                    "<div class='card-content'>" +
                        "<span class='card-title'>"+ element.name +"</span>" +
                        "<pre>" + element.textarea +"</pre>" +
                        "</div>" +
                        "<div class='card-action'>"+
                        "<a href='#'>Copiar codigo</a>" +
                        "</div>" +
                    "</div>" +
                "</div>";
        
         const container = document.getElementById("container");
         container.appendChild(div);
              
    });*/
}







 