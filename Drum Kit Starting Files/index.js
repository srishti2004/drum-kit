var Elements = document.querySelectorAll("button");
for (let i = 0; i < Elements.length; i++) {
   Elements[i].addEventListener("click", function() {

     var innerHtml = this.innerHTML;
     makesound(innerHtml);
     buttonanimation(innerHtml);
   })} 
   // detects clicking sound

 document.addEventListener("keydown" ,function(event) {
            makesound(event.key);
            buttonanimation(event.key);
        })
// detects keypress sound


function makesound(key)
            {
       switch (key) {
        case "w":
            var button = new Audio("sounds/tom-3.mp3")
           button.play();
            break;
        case "a":
            var button = new Audio("sounds/tom-2.mp3")
           button.play();
           break;
        case "s":
            var button = new Audio("sounds/kick-bass.mp3")
           button.play();
            break;
        case "d":
            var button = new Audio("sounds/crash.mp3")
           button.play();
            break;
        case "j":
            var button = new Audio("sounds/snare.mp3")
           button.play();
            break;
        case "k":
            var button = new Audio("sounds/tom-4.mp3")
           button.play();
            break;
        case "l":
            var button = new Audio("sounds/tom-1.mp3")
           button.play();
            break;
        default:
            break;
       }
    }
   
function buttonanimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function () {
        activebutton.classList.remove("pressed");
    },100);
}