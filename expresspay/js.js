function createImage(src,className, width, height) {
    let img = document.createElement('img');
    img.src = src;
    img.className=className;
    img.style.width = width;
    img.style.height = height;
    return img;
}
function createDiv(text,className){
    let h=document.createElement('div');
    h.innerText=text;
    h.className=className;
    return h;
}
function createContainer() {
    let dvContainer = document.createElement('div');
    dvContainer.className = 'batn';
    return dvContainer;
}
function createContainer1() {
    let dvContainer1 = document.createElement('div');
    dvContainer1.className = 'ban';
    return dvContainer1;
}

function createButton(text, className) {
    let btn = document.createElement('button');
    btn.innerText = text;
    btn.className=className;
    return btn;
}



function loadHtml() {

    let img = createImage('img/express.png',['photo'], '20%','160px');
    document.body.appendChild(img);
    let h=createDiv('Xidmeti Secin',['xidmet']);
    document.body.appendChild(h);



    let dvContainer = createContainer();
    document.body.appendChild(dvContainer);


    let btn1 = createButton('expressbank', ['btn']);
    let btn2 = createButton('bakcell', ['btn']);
    let btn3 = createButton('Nar', ['btn']);
    let btn4 = createButton('AzerEnerji', ['btn']);
    let btn5 = createButton('azersu', ['btn']);
    let btn6 = createButton('AileTv', ['btn']);
    let btn7 = createButton('EmbaFinans', ['btn']);

    dvContainer.appendChild(btn1);
    dvContainer.appendChild(btn2);
    dvContainer.appendChild(btn3);
    dvContainer.appendChild(btn4);
    dvContainer.appendChild(btn5);
    dvContainer.appendChild(btn6);
    dvContainer.appendChild(btn7);

    let anotherdiv=createContainer1();
    document.body.appendChild(anotherdiv);

    let btnb1 = createButton('Bank Xidmetleri', ['square']);
    let btnb2 = createButton('Mobil operatorlar', ['square']);
    let btnb3 = createButton('Komunal xidmetler', ['square']);
    let btnb4 = createButton('Kabel TV', ['square']);
    let btnb5 = createButton('Internet', ['square']);
    let btnb6 = createButton('Eylence', ['square']);


    anotherdiv.appendChild(btnb1);
    anotherdiv.appendChild(btnb2);
    anotherdiv.appendChild(btnb3);
    anotherdiv.appendChild(btnb4);
    anotherdiv.appendChild(btnb5);
    anotherdiv.appendChild(btnb6);

}
loadHtml();