// Exercice 1 :
// const welcome = document.getElementById("welcome");

// function Fwelcome(){
//     const welcomeMsg = "Bienvenue dans le monde du JavaScript !"
//     welcome.textContent = welcomeMsg;
// }

// setTimeout(Fwelcome, 2000);


// Exercice 2 : 
// const countdown = document.getElementById("countdown");
// let second = 6;

// function test(){
//     countdown.textContent = second;
//     second --;
//     countdown.textContent = second;
//     if(second === 0){
//         clearInterval(interval1);
//         countdown.textContent = "Go !";
//     }
// }
// let interval1 = setInterval(test ,1000)


// Exercice 3 : 
// const blink = document.getElementById("blink");

// let interval2 = setInterval(() => {
//     if(blink.style.display === "none"){
//         blink.style.display = "block";
//         blink.textContent = "Clignotant..."
//     } else{
//         blink.style.display = "none"
//     }
// },500)

// Exercice 4 : 
// const clock = document.getElementById("clock");

// let interval3 = setInterval( () => {
//     const date = new Date();
//     const dateHours = date.getHours()
//     const dateMinutes = date.getMinutes()
//     const dateSeconds = date.getSeconds()
//     clock.textContent = dateHours + " : " + dateMinutes + " : " + dateSeconds;
// },1000)