"use strict";

let memes = [];


function addMeme(imgLink, topText, bottomText){
  console.log("addMeme")

  memes.push({
    imgLink : imgLink,
    topText : topText,
    bottomText : bottomText
  })
}

function showMemes(){
  console.log(showMemes)

  let memeArea = document.getElementById("meme");
  let html = "";

  for (let i = 0; i < memes.length; i++){
    let meme = memes[i]
    let image = `<img class="img-thumbnail rounded" src="${meme.imgLink}">`;
    let topText = `<span class="top-text d-block">${meme.topText}</span>`;
    let bottomText = `<span class="bottom-text d-block">${meme.bottomText}</span>`;

    html += `
    <div id="meme-${i}" class="text-center mt-3 mb-3 col-md-5 meme">
      ${image}
      ${topText}
      ${bottomText}
    </div>
    `
  }
memeArea.innerHTML = html

}

function handleSubmit(evt){
  console.log("handleSubmit")
  evt.preventDefault();

  let form = document.getElementById("meme-form");
  let imgLink = form.image.value;
  let topText = form.top.value;
  let bottomText = form.bottom.value;

  addMeme(imgLink, topText, bottomText);
  showMemes();
}

function memeClick(){
  console.log("memeClick")
}

function memeHover(){
  console.log("memeHover")

}

function deleteMeme(){
  console.log("deleteMeme")
}

document.getElementById("meme-form").addEventListener("submit", handleSubmit);

