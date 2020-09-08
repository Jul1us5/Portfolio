
// Print DIV
let title = document.querySelector('.all');
let field = '';

const navList = svgPics;


for (let i = 0; i < nav.length; i++) {
  field += `<div class="ico">      
                 ${navList[i]['img']}          
              <p>${navList[i]['text']}</p> 
            </div>`;
}

title.innerHTML = field;


// Print QR code 

let qrCode = document.getElementById('qr');
qrCode.innerHTML = qr[0]['img'];


// Print Links

let link = document.querySelector('.links');
let newLinks = '';

const linkList = links;

for (let i = 0; i < linkList.length; i++) {
  newLinks += `<p><i class="fa ${linkList[i]['img']}"></i><a href="${linkList[i]['link']}">${linkList[i]['title']}</a></p>`;
}

link.innerHTML = newLinks;

// Print Text

let textArea = document.querySelector('.text');
textArea.innerHTML = texts[0]['text'];

// Print Foto

let fotoIm = document.getElementById('foto');
fotoIm.innerHTML = foto[0]['img'];

// Print Projects

let project = document.querySelector('.project');
let projectField = '';

for(let i = 0; i < projectItem.length; i++) {
    projectField += ` <div class="item">
                        <a class="card1" href="${projectItem[i]['url']}">
                          <h3>${projectItem[i]['title']}</h3>
                        </a>
                      </div>`;
}
project.innerHTML = projectField;


// Print Arrows for all

let manoDarbai1 = document.getElementById('arrow1');
let manoDarbai4 = document.getElementById('arrow4');
let manoDarbai5 = document.getElementById('arrow5');
manoDarbai1.innerHTML = projects[0]['img'];
manoDarbai4.innerHTML = projects[3]['img'];
manoDarbai5.innerHTML = projects[4]['img'];


// Print Timeline 

let timeline_Box = document.getElementById('left');
let xHTML = '';

for(let i = 0; i<timeline.length; i++) {
    xHTML += `<div class="left_box">
                <span>${timeline[i].title}
                    <b>${timeline[i].date}</b>
                </span>
                <div class="box_text">${timeline[i].text}</div>
                <b>. . . . .</b>
            </div>`;
            
}
timeline_Box.innerHTML = xHTML;


// Print Skill bar and Lang

let skills = document.getElementById('skills');
let arryField = '';
let skillField = '';
let langsField = '';

for (let i = 0; i < skill.length; i++) {
  skillField += `   <div class="progress-bar">
                      <div class="texts">
                          <div class="label">${skill[i].label}</div>
                          <div class="value">${skill[i].value}</div>
                      </div>
                      <div class="bar">
                          <div class="value" style="width: ${skill[i].value};">
                              <div class="loading"></div>
                          </div>
                      </div>
                    </div>`;

}

for (let i = 0; i < langs.length; i++) {
  langsField += `   <div class="progress-bar">
                      <div class="texts">
                          <div class="label">${langs[i].label}</div>
                          <div class="value">${langs[i].value}</div>
                      </div>
                      <div class="bar">
                          <div class="value" style="width: ${langs[i].value};">
                              <div class="loading"></div>
                          </div>
                      </div>
                    </div>`;

}

for (let i = 0; i < arry.length; i++) {
  if (i == 0) {
    arryField += `<div class="lang">
                  <span>${arry[i]}</span>
                        <div class="arrow">
                            ${projects[1]['img']}
                        </div>
                        ${skillField}
                  </div>`;
  } else {
    arryField += `<div class="lang">
                  <span>${arry[i]}</span>
                        <div class="arrow">
                            ${projects[2]['img']}
                        </div>
                        ${langsField}
                  </div>`;
  }

}

skills.innerHTML = arryField;
