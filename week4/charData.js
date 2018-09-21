// set background image
document.body.style.background = "#222222 url('https://kodingklosty.github.io/klostermeyerjames_DVP3/week3/images/FormBGimage.jpg')";

/* =====================================================
This code was taken from the Bungie API community. The referanced website is found below
http://destinydevs.github.io/BungieNetPlatform/docs/Getting-Started
===================================================== */

var apiKey = "ed9eb60a012f45588c35e5028467e0c6";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  var json = JSON.parse(this.responseText);
  console.log(json); //Gjallarhorn
 }
}

xhr.send();