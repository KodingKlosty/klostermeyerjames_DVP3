// Update page title
document.querySelector("h2").innerHTML = "<h2><strong>Destiny 2</strong> Contact Form</h2>";

// Change backgroud image
document.body.style.background = "#222222 url('https://kodingklosty.github.io/klostermeyerjames_DVP3/week3/images/FormBGimage.jpg')";

// Update First Paragraph
var firstP = "We are sorry you are having issues guardian. Please enter you infromation and submit it to the postmaster."
var getfirst = document.querySelector("p");
getfirst.textContent = firstP;

// **** Update form info
// Update Name
document.getElementsByName('name')[0].placeholder='Guardian Name';
// Update Phone to Gamertag
document.getElementsByName('phone')[0].placeholder='Gamertag';
// Update Message to Trouble Ticket Infomation
document.getElementsByName('message')[0].placeholder='Trouble Ticket Information'


