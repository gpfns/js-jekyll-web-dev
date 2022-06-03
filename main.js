function jokes() {
    const myWindow = window.open();
    myWindow.document.open();
    fetch("https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode&type=single")
    .then(response => response.text()).then(r=>myWindow.document.write(r));
}

function bored() {
    const myWindow = window.open();
    myWindow.document.open();
    fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.text())
    .then(result => JSON.parse(result,function(key,value) {
        if (key == "activity") {
            myWindow.document.write(value);
        }
    }))
    .catch(error => console.log('error', error));
}

function dogs() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.text())
    .then(result => JSON.parse(result,function(key,value) {
      if (key == "message") {
        window.location.href = value;
      }
  }))
  .catch(error => console.log('error', error));
}

function ipFast() {
    const myWindow = window.open();
    myWindow.document.open();
    fetch("https://ip-fast.com/api/ip/")
    .then(response => response.text()).then(r=>myWindow.document.write(r));
}

function pixel() {
    window.location.href = "https://app.pixelencounter.com/api/basic/monsters/random";
}

function randomUser() {
    const myWindow = window.open();
    myWindow.document.open();
    fetch("https://randomuser.me/api/")
    .then(response => response.text()).then(r=>myWindow.document.write(r))    

}
function fun() {
    let num=document.getElementById("number").value;
    fetch("http://numbersapi.com/"+num).then(response => response.text()).then(r=>document.getElementById("resp").innerText=r)
}

function shownum() {
    document.getElementById("numapi").style.display="block";
}
function gender() {
    let url = "https://api.genderize.io?name=";
    let name = document.getElementById("genname").value
    fetch(url + name)
    .then(response => response.text())
    .then(result => JSON.parse(result,function(key,value) {
      if (key == "gender") {
        document.getElementById("res").innerText=value;
      }
    }))
    .catch(error => console.log('error', error));
}
function showgen(){
    document.getElementById("genapi").style.display="block";
}
function agify() {
    let url = "https://api.agify.io?name=";
    let name = document.getElementById("agifyname").value
    fetch(url + name)
    .then(response => response.text())
    .then(result => JSON.parse(result,function(key,value) {
        if (key == "age") {
            document.getElementById("age").innerText=value;
        }
    }))
    .catch(error => console.log('error', error));
}
function showagify(){
    document.getElementById("ageapi").style.display="block";
}
function func(){
    let nam=document.getElementById("nationname").value;
    fetch("https://api.nationalize.io/?name=" + nam)
    .then(response => response.json()).then((fun)=>{
    let params=fun.country;
    let coun=[];
    for(let i=0;i<params.length;i++)
    {
        let str="";
        str=str + params[i].country_id + " -- " + params[i].probability + "%";
        coun.push(str);
    }
    document.getElementById("country").innerHTML=coun;
});
}
function shownation(){
    document.getElementById("nationapi").style.display="block";
}
function getLocation() {
    const x = document.getElementById("demo");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
    document.getElementById("geolocation").style.display="block";
  }
  
function showPosition(position) {
    const x = document.getElementById("demo");
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }
function freegeo(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch("https://api.ipbase.com/v1/json/", requestOptions)
      .then(response => response.json())
      .then(result =>{console.log(result),
      (document.getElementById('a').innerHTML=result.ip),(document.getElementById("aa").innerHTML=result.country_name),(document.getElementById("aaa").innerHTML=result.latitude),(document.getElementById("aaaa").innerHTML=result.longitude)})
      .catch(error => console.log('error', error));
    document.getElementById("freegeoip").style.display="block";
}
  
  
