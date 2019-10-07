function createImage(src,className, width, height) {
    let img = document.createElement('img');
    img.src = src;
    img.className=className;
    img.style.width = width;
    img.style.height = height;
    return img;
}
function createh(text,className){
    let h=document.createElement('h2');
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

    let img = createImage('img/expresspay_081214.jpg',['photo'], '15%','120px');
    document.body.appendChild(img);
    let h=createh('Xidmeti Secin',['choose']);
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

    let btnb1 = createButton('Bank Xidmetleri', ['bank']);
    let btnb2 = createButton('Mobil operatorlar', ['bank']);
    let btnb3 = createButton('Komunal xidmetler', ['bank']);

    anotherdiv.appendChild(btnb1);
    anotherdiv.appendChild(btnb2);
    anotherdiv.appendChild(btnb3);

}
loadHtml();