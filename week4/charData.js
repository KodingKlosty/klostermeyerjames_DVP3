// set background image
document.body.style.background = "#222222 url('https://kodingklosty.github.io/klostermeyerjames_DVP3/week3/images/FormBGimage.jpg')";


const strike = "https://randomuser.me/api/?result=2";
const comp = "https://randomuser.me/api/?result=3";
const curcible = "https://randomuser.me/api/?result=5";
const raid = "https://randomuser.me/api/?result=5";

var userChoice;
var setHTTP;
var count;
var firstRun = true;

function jsonTest()
{
    fetch(setHTTP)
    .then(function(data){return data.json();})
    .then(function(displyJSON){console.log(displyJSON);})
}

function loadPlayer()
{
fetch(setHTTP)
    .then((jsonResp) => jsonResp.json())
    .then(function (gamerData){
        let gamerInfo = gamerData.results;
        return gamerInfo.map(function (gamer){
            let li = fireteamMember('li'),
                img = fireteamMember('img'),
                p = fireteamMember('p');
            img.src = gamer.picture.large;
            p.innerHTML = `${gamer.login.username}`
            append(li,img);
            append(li, p);
            append(document.getElementById('gamerInfo'), li);
        })
    })

    .catch(error => console.log(error));
}
function fireteamMember(element)
{
    return document.createElement(element)
}

function append(parent, element)
{
    return parent.appendChild(element)
}

function radioSelect()
{
    var userChoice = document.querySelector('input[name="ftType"]:checked').value; 
    console.log(userChoice);

    if(userChoice === "strike")
    {
        setHTTP = strike
        count = 2;
    }
    else if(userChoice === "comp")
    {
        setHTTP = comp
        count = 3;
    }
    else if(userChoice === "curcible")
    {
        setHTTP = curcible
        count = 5;
    }
    else 
    {
        setHTTP = raid
        count = 5;
    }
    console.log(setHTTP);
    // jsonTest();  //DEBUG
    for(var i = 0; i < count; i++)
    {
        loadPlayer();
    }
}

function clearList()
{
    
    var eraseList = document.getElementById("gamerInfo")
    while(eraseList.hasChildNodes)
    {
        eraseList.removeChild(eraseList.firstChild);
    }
}

