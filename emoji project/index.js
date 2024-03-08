



const emoji = document.getElementById("emojibox");
const keymovment = 30;
let x = 0;
let y = 0;

function color(event){
    emoji.textContent = "😂";
    emoji.style.backgroundColor = "green";
}
document.addEventListener("keydown",color)

 

document.addEventListener("keyup", event => {
    emoji.textContent = "😊";
    emoji.style.backgroundColor = "green";
})


document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -=keymovment;                
                break;
            case "ArrowDown":
                y+= keymovment;
                break;
            case "ArrowLeft":
                x -= keymovment;
                break;
            case "ArrowRight":
                x += keymovment;
                break;
        }
    emoji.style.top = `${y}px`;
    emoji.style.left = `${x}px`;
}
});
