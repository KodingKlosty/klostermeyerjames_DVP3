document.querySelector("#gallery h2").innerHTML = "Destiny 2";

//image array data
var images = [];
images[0] = "https://kodingklosty.github.io/klostermeyerjames_DVP3/week2/images/D2one.jpg";
images[1] = "https://kodingklosty.github.io/klostermeyerjames_DVP3/week2/images/D2two.jpg";
images[2] = "https://kodingklosty.github.io/klostermeyerjames_DVP3/week2/images/D2three.jpg";
images[3] = "https://kodingklosty.github.io/klostermeyerjames_DVP3/week2/images/D2four.jpg";
images[4] = "https://kodingklosty.github.io/klostermeyerjames_DVP3/week2/images/D2five.jpg";
images[5] = "https://kodingklosty.github.io/klostermeyerjames_DVP3/week2/images/D2six.jpg";

//get class data
for(var i = 0; i < images.length; i++)
{
    var parent = document.getElementById('pagination');
    var listItem = document.createElement('li');
    var listImg = document.createElement('img');
    
    parent.appendChild(listItem, images[i]);
}

