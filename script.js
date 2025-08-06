const container = document.querySelector(".cardboards");
const emojis = ["😂", "🤔","❤️" ,"😠","🤩" ,"😭" , "🥳","✨"];
let emoji = [...emojis,...emojis];
let matchedcount = 0;
let flippedcard = [];
shuffle(emoji);
for (let i = 0; i < 16; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = ""
    card.setAttribute("data-emoji", emoji[i]);
card.addEventListener("click",flip)
    container.appendChild(card);
    card.setAttribute("data-index", i);
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function flip(e){
  const card = e.target;
  if(card.classList.contains("flipped")|| card.classList.contains("matched")) return ;
  card.classList.add("flipped");
  card.innerText = card.getAttribute("data-emoji");
  flippedcard.push(card)
  if(flippedcard.length == 2){
    let[card1,card2] = flippedcard;
    if(card1.getAttribute("data-emoji")== card2.getAttribute("data-emoji")){
      card1.classList.add("matched")
      card2.classList.add("matched")
    }else{
      setTimeout(() => {
        card1.innerText= ""
        card2.innerText = ""
        card1.classList.remove("flipped");
        card2.classList.remove("flipped")
      }, 700);
    }
     flippedcard = []
  }
}
