let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
let row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

let ul = document.createElement('ul');
row.appendChild(ul);

for( let f in car){
    
    let li1 = document.createElement('li');
    li1.innerText = car[f].name;
    ul.appendChild(li1);

    let li2 = document.createElement('li');
    li2.innerText = '';
    ul.appendChild(li2);

    let li3 = document.createElement('li');
    li3.innerText = '';
    ul.appendChild(li3);

    let li4 = document.createElement('li');
    li4.innerText = '';
    ul.appendChild(li4);

    let li5 = document.createElement('li');
    li5.innerText = '';
    ul.appendChild(li5);

    let li6 = document.createElement('li');
    li6.innerText = '';
    ul.appendChild(li6);
}