let title = document.querySelector('.container');
let field = '<span>Ką moku</span>';

const navList = nav;

for(let i = 0; i < nav.length; i++) {
    field += `<div>
                <img src="./img/ico/${navList[i]['img']}" alt="">
                <p>${navList[i]['text']}</p>
              </div>`;

}
console.log(navList[1]['img']);


title.innerHTML = field;