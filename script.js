window.addEventListener("keydown", playAllKey  );

function playAllKey(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    // console.log(key);
    key.classList.add("playing");
}


const allKey = document.querySelectorAll(".key");
allKey.forEach(item => item.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    // console.log(e); 
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
    //console.log(e.propertyName);

}
//console.log(allKey);