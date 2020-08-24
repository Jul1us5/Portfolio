
// Print DIV
let title = document.querySelector('.all');
let field = '';

const navList = nav;

for(let i = 0; i < nav.length; i++) {
    field += `<div>
                <img src="./img/ico/${navList[i]['img']}" alt="">
                <p>${navList[i]['text']}</p>
              </div>`;
}

title.innerHTML = field;

// Print Links

let link = document.querySelector('.links');
let newLinks = '';

const linkList = links;

for(let i = 0; i < linkList.length; i++) {
  newLinks += `<p><i class="fa ${linkList[i]['img']}"></i><a href="${linkList[i]['link']}">${linkList[i]['title']}</a></p>`;
}

link.innerHTML = newLinks;

// Print Links

let textArea = document.querySelector('.text');
textArea.innerHTML = texts[0]['text'];



