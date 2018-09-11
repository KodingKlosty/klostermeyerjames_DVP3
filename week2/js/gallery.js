document.querySelector("#gallery h2").innerHTML = "Destiny 2";

// Get JSON Data and build HTML in class pagination
var lid = new XMLHttpRequest();
lid.onload = function()
{
  var data = JSON.parse(lid.responseText);
  var gallerySelector = document.getElementsByClassName("pagination")
  for(var i = 0; i < data.length; i++ )
    {
      var listElement = document.createElement("li");
      var imgElement = document.createElement("img");
      imgElement.setAttribute("src", data.D2Worlds[i].image);
      imgElement.setAttribute("alt", "");
      if(i = 2)
      {
          imgElement.setAttribute("class","active");
      }
      listElement.appendChild(imgElement);
    }


  
}

lid.open('GET','https://kodingklosty.github.io/klostermeyerjames_DVP3/week2/D2Worlds.json', true);
lid.send(null);

function changeImage(event) {
    var image = event.target.src;
    var parent = event.target.parentElement;
    var largeImage = document.querySelector('#gallery img');

    // Change Image
    largeImage.src = image;

    // Change active indicator
    document.querySelector("#gallery .active").classList.remove("active");
    parent.className = 'active';
}

// Attach Event Listeners to all thumbnails
var thumbnails = document.querySelectorAll('.pagination img');
for (var i=0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', changeImage);
}
// Change Image via Thumbnail
function changeImage(event) {
    var image = event.target.src;
    var parent = event.target.parentElement;
    var largeImage = document.querySelector('#gallery img');

    // Change Image
    largeImage.src = image;

    // Change active indicator
    document.querySelector("#gallery .active").classList.remove("active");
    parent.className = 'active';
}

// Change via Next Button
function nextImage(event) {

    // Find Current Image
    var thumbnails = document.querySelectorAll('.pagination li');
    var activeIndex; // js (starts /w 0)
    var activeListItem; // css (starts /w 1)
    for (var i=0; i < thumbnails.length; i++) {
        if (thumbnails[i].className == 'active') {
            activeIndex = i;
            activeListItem = i + 1;
        }
    }

    // Determine Next Image
    if (activeIndex >= 5) {
        var nextIndex = 1;
        var nextListItem = 2;
    } else {
        var nextIndex = activeIndex + 1;
        var nextListItem = activeListItem + 1;
    }

    // Change Large Image
    var image = document.querySelector('.pagination li:nth-of-type(' + nextListItem + ') img').src;
    var largeImage = document.querySelector('#gallery img');
    largeImage.src = image;

    // Change active indicator
    document.querySelector("#gallery .active").classList.remove("active");
    var parent = document.querySelector('.pagination li:nth-of-type(' + nextListItem + ')');
    parent.className = 'active';

}

// Change via Previous Button
function previousImage(event) {

    // Find Current Image
    var thumbnails = document.querySelectorAll('.pagination li');
    var activeIndex; // js (starts /w 0)
    var activeListItem; // css (starts /w 1)
    for (var i=0; i < thumbnails.length; i++) {
        if (thumbnails[i].className == 'active') {
            activeIndex = i;
            activeListItem = i + 1;
        }
    }

    // Determine Pevious Image
    if (activeIndex <= 1) {
        var previousIndex = 5;
        var previousListItem = 6;
    } else {
        var previousIndex = activeIndex - 1;
        var previousListItem = activeListItem - 1;
    }

    // Change Large Image
    var image = document.querySelector('.pagination li:nth-of-type(' + previousListItem + ') img').src;
    var largeImage = document.querySelector('#gallery img');
    largeImage.src = image;

    // Change active indicator
    document.querySelector("#gallery .active").classList.remove("active");
    var parent = document.querySelector('.pagination li:nth-of-type(' + previousListItem + ')');
    parent.className = 'active';

}

// Attach Event Listeners to all thumbnails
var thumbnails = document.querySelectorAll('.pagination img');
for (var i=0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", changeImage);
}

// Attach Event to Next/Previous
var next = document.querySelector('.pagination li:last-of-type button');
next.addEventListener("click", nextImage);

var previous = document.querySelector('.pagination li:first-of-type button');
previous.addEventListener("click", previousImage);