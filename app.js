var output = document.getElementById("output");
var list = document.getElementById("list");

function myFunction() {
    var buildHTML = "";
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        for (var i = 0; i < json.length; i++) {
            buildHTML += "<li>";
            buildHTML += json[i].company;
            buildHTML += "</li>";
        }
    }
    list.innerHTML = buildHTML;
}

var myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = myFunction;
//url or file location of what page we're trying to access
//myRequest.open("GET", "https://api.soundcloud.com/tracks?client_id=1dff55bf515582dc759594dac5ba46e9&amp;q=beyonce");
myRequest.open("GET", "https://api.myjson.com/bins/bjcy5");
myRequest.send();
console.log(myRequest);
