
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
                        ${skillField}
                  </div>`;
  } else {
    arryField += `<div class="lang">
                  <span>${arry[i]}</span>
                        ${langsField}
                  </div>`;
  }

}

skills.innerHTML = arryField;
