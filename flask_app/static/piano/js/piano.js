const sound = {
                65:"http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
                87:"http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
                83:"http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
                69:"http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
                68:"http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
                70:"http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
                84:"http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
                71:"http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
                89:"http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
                72:"http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
                85:"http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
                74:"http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
                75:"http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
                79:"http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
                76:"http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
                80:"http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
                186:"http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav",
                555:"https://orangefreesounds.com/wp-content/uploads/2020/09/Creepy-piano-sound-effect.mp3?_=1"       
            };
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function(mobileMenu) {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

let awoken = "weseeyou";
let key_strokes = "";
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

window.addEventListener('keypress', function(isWoken) {
    key_strokes += String.fromCharCode(isWoken.keyCode);
    for (let i = 0; i < awoken.length; i++) {
        if (key_strokes[i] != awoken[i] && key_strokes[i] != undefined) {
            key_strokes = ""
        }
    }

    if (key_strokes == awoken) {
        key_strokes = "";
        audioObj = new Audio(sound[555]);
        audioObj.play();

        let whiteKeys = document.getElementsByClassName("white-key");
        let blackKeys = document.getElementsByClassName("black-key");
        for (let i = 0; i < whiteKeys.length; i++) {
            whiteKeys[i].style["visibility"]="hidden";
        }
        for (let i = 0; i < blackKeys.length; i++) {
            blackKeys[i].style["visibility"]="hidden";
            
        }
        document.getElementById("scary-text").innerHTML = "I have awoken.";
        document.getElementById("piano-id").style.backgroundImage = "url('../static/piano/images/texture.jpeg')";
    }
})
document.addEventListener('keydown', function(letter) {
    if (letter.keyCode == 65)
    {
        audioObj = new Audio(sound[65]);
        audioObj.play();
        document.getElementById("a-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 87)
    {
        audioObj = new Audio(sound[87]);
        audioObj.play();
        document.getElementById("w-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 83)
    {
        audioObj = new Audio(sound[83]);
        audioObj.play();
        document.getElementById("s-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 69)
    {
        audioObj = new Audio(sound[69]);
        audioObj.play();
        document.getElementById("e-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 68)
    {
        audioObj = new Audio(sound[68]);
        audioObj.play();
        document.getElementById("d-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 70)
    {
        audioObj = new Audio(sound[70]);
        audioObj.play();
        document.getElementById("f-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 84)
    {
        audioObj = new Audio(sound[84]);
        audioObj.play();
        document.getElementById("t-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 71)
    {
        audioObj = new Audio(sound[71]);
        audioObj.play();
        document.getElementById("g-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 89)
    {
        audioObj = new Audio(sound[89]);
        audioObj.play();
        document.getElementById("y-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 72)
    {
        audioObj = new Audio(sound[72]);
        audioObj.play();
        document.getElementById("h-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 85)
    {
        audioObj = new Audio(sound[85]);
        audioObj.play();
        document.getElementById("u-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 74)
    {
        audioObj = new Audio(sound[74]);
        audioObj.play();
        document.getElementById("j-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 75)
    {
        audioObj = new Audio(sound[75]);
        audioObj.play();
        document.getElementById("k-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 79)
    {
        audioObj = new Audio(sound[79]);
        audioObj.play();
        document.getElementById("o-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 76)
    {
        audioObj = new Audio(sound[76]);
        audioObj.play();
        document.getElementById("l-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 80)
    {
        audioObj = new Audio(sound[80]);
        audioObj.play();
        document.getElementById("p-key").style.backgroundColor="#4583ef";
    }
    if (letter.keyCode == 186)
    {
        audioObj = new Audio(sound[186]);
        audioObj.play();
        document.getElementById("semicolon-key").style.backgroundColor="#4583ef";
    }
});

document.addEventListener('keyup', function(letter) {
    if (letter.keyCode == 65)
    {
        document.getElementById("a-key").style.backgroundColor="white";
    }
    if (letter.keyCode == 87)
    {
        document.getElementById("w-key").style.backgroundColor="black";
    }
    if (letter.keyCode == 83)
    {
        document.getElementById("s-key").style.backgroundColor="white";
    }
    if (letter.keyCode == 69)
    {
        document.getElementById("e-key").style.backgroundColor="black";
    }
    if (letter.keyCode == 68)
    {
        document.getElementById("d-key").style.backgroundColor="white";
    }
    if (letter.keyCode == 70)
    {
        document.getElementById("f-key").style.backgroundColor="white";
    }
    if (letter.keyCode == 84)
    {
        document.getElementById("t-key").style.backgroundColor="black";
    }
    if (letter.keyCode == 71)
    {
        document.getElementById("g-key").style.backgroundColor="white";
    }
    if (letter.keyCode == 89)
    {
        document.getElementById("y-key").style.backgroundColor="black";
    }
    if (letter.keyCode == 72)
    {
        document.getElementById("h-key").style.backgroundColor="white";
    }
    if (letter.keyCode == 85)
    {
        document.getElementById("u-key").style.backgroundColor="black";
    }
    if (letter.keyCode == 74)
    {
        document.getElementById("j-key").style.backgroundColor="white";
    }
    if (letter.keyCode == 75)
    {
        document.getElementById("k-key").style.backgroundColor="white";
    }
    if (letter.keyCode == 79)
    {
        document.getElementById("o-key").style.backgroundColor="black";
    }
    if (letter.keyCode == 76)
    {
        document.getElementById("l-key").style.backgroundColor="white";
    }
    if (letter.keyCode == 80)
    {
        document.getElementById("p-key").style.backgroundColor="black";
    }
    if (letter.keyCode == 186)
    {
        document.getElementById("semicolon-key").style.backgroundColor="white";
    }
});