window.onload = () => {
    let input = document.querySelector("#search");
    input.oninput = function () {
        let value = this.value.trim();
        let list = document.querySelectorAll();
        if (value != '') {
            list.forEach(elem => {
                if (elem.innerText.search(value) == -1) {
                    elem.classList.add('hide');
                }
            });

        }
        else {
            list.forEach(elem => {
                elem.classList.remove('hide')
            });
        }

    };
};
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const backgroundImg = document.createElement("img");
backgroundImg.src = "./image/armmap.png";

const locImg = document.createElement("img");
locImg.src = "./image/location.png";

let data = {
    locat: {
        xDelta: 0,
        yDelta: 0,
        x: 0,
        y: 0,
        width: 20,
        height: 20
    }

}


function update() {
    data.locat.x += data.locat.xDelta;
    data.locat.y += data.locat.yDelta;

}

function drow() {
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    context.drawImage(locImg, data.locat.x, data.locat.y, data.locat.width, data.locat.height);
  
    if (add == 1) {
        data.locat.x = 70;
        data.locat.y = 100;
    }
    if (add == 2) {
        data.locat.x = 120;
        data.locat.y = 140;
    }
    if (add == 3) {
        data.locat.x = 60;
        data.locat.y = 120;
    }
    if (add == 4) {
        data.locat.x = 160;
        data.locat.y = 120;
    }
    if (add == 5) {
        data.locat.x = 110;
        data.locat.y = 100;
    }
    if (add == 6) {
        data.locat.x = 90;
        data.locat.y = 35;
    } 
    if (add == 7) {
        data.locat.x = 40;
        data.locat.y = 45;
    }
    if (add == 8) {
        data.locat.x = 240;
        data.locat.y = 200;
    }
    if (add == 9) {
        data.locat.x = 150;
        data.locat.y = 45;
    }
    if (add == 10) {
        data.locat.x = 170;
        data.locat.y = 165;
    }
    if (add == 11) {
        data.locat.x = 100;
        data.locat.y = 125;
    }
}
let add =0;
function addCell(a) {
    add = a;
}
function loop() {
    requestAnimationFrame(loop);
    update();
    drow();
    addCell();
}
loop();

