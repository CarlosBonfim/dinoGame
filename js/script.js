const dino = document.querySelector(".dino");
function handleKeyUp(event) {
    // apertou botao pra pular
    if (event.keyCode === 32) {
        jump();
    }
}
function jump() {
    let position = 0;
    let upInterval = setInterval(() => {
        //pra evitar que suba indefinidamente
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                //pra evitar que desca indefinidamente
                if (position <= 0) {
                    clearInterval(downInterval);
                } else {
                    //descer
                    position -= 20;
                    dino.style.bottom = position + "px";
                }
            }, 20);
        } else {
            //subir
            position += 20;
            dino.style.bottom = position + "px";
        }
    }, 20);
}

document.addEventListener("keyup", handleKeyUp);
