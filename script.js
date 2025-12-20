var butn = document.querySelector(".add-button");
var popup = document.querySelector(".pop");
var pop = document.querySelector(".popup");

butn.addEventListener("click", function() {
    pop.style.display = "block";
    popup.style.display = "block";
});
var canbtn=document.getElementById("cancel-p")
canbtn.addEventListener("click",function(event){
event.preventDefault()
pop.style.display="none";
popup.style.display="none";
})
var container=document.querySelector(".con")
var addplayer=document.getElementById("add-p")
var playername=document.getElementById("pname")
var playerposition=document.getElementById("ppos")
var playerdiscription=document.getElementById("pdis")

addplayer.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","player")
    div.innerHTML=` <h3>${playername.value}</h3>
            <h5>${playerposition.value}</h5>
            <p>${playerdiscription.value}</p>
             <button onclick="delplayerdetail(event)">Delete</button>`
    container.append(div)
    pop.style.display="none";
    popup.style.display="none";
} )
function delplayerdetail(event){
    event.target.parentElement.remove()
}
