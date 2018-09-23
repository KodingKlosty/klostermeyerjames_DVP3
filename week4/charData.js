// set background image
document.body.style.background = "#222222 url('https://kodingklosty.github.io/klostermeyerjames_DVP3/week3/images/FormBGimage.jpg')";

/* =====================================================
This code was taken from the Bungie API community. The referanced website is found below
http://destinydevs.github.io/BungieNetPlatform/docs/Getting-Started
===================================================== */

const apiKey = "ed9eb60a012f45588c35e5028467e0c6";
const D2Manifest = "https//www.bungie.net/platform/Destiny2/Manifest/"



fetch(D2Manifest)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(d2json)
    {
        console.log(JSON.stringify(d2json));
    });
/*var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny2/Manifest/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  var json = JSON.parse(this.responseText);
  console.log(json); //Gjallarhorn
 }
}

xhr.send();*/