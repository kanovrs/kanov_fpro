//Create smileys data
const smileys = [
  {
    smile: "😆",
    voteCount: 0,
  },
  {
    smile: "😅",
    voteCount: 0,
  },
  {
    smile: "😃",
    voteCount: 0,
  },
  {
    smile: "😈",
    voteCount: 0,
  },
  {
    smile: "😉",
    voteCount: 0,
  },
  {
    smile: "😉",
    voteCount: 0,
  },
];

//Get smile && vote containers
let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');

//Update vote scores
function updateVotes() {
  voteContainer.innerHTML = "";

  smileys.forEach((item) => {
    let voteElement = document.createElement('div');
    voteElement.classList.add('vote-score');
    voteElement.textContent = item.voteCount;

    voteContainer.appendChild(voteElement);
  })
}

//show smile && btn
function showSmiles() {
  smileContainer.innerHTML = "";
  smileys.forEach((item, index) => {

    let smileItem = document.createElement('div');
    smileItem.classList.add('smile-item');

    let smileElement = document.createElement('div');
    smileElement.classList.add('smile-elem')
    smileElement.textContent = item.smile;

    smileElement.addEventListener('click', () => {
      smileys[index].voteCount++;
      updateVotes();
    })

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Видалити';

    deleteButton.addEventListener('click', () => {
      smileys.splice(index, 1); 
      showSmiles();
      updateVotes();
    });
    
    smileContainer.appendChild(smileItem);
    smileItem.appendChild(deleteButton);
    smileItem.appendChild(smileElement);

  })
}

//add smile
function addSmile(newSmile) {
      smileys.push({
        smile: newSmile,
        voteCount: 0,
      });
      showSmiles();
      updateVotes();
    }

const addSmileButton = document.querySelector('#add-smile-button');

addSmileButton.addEventListener('click', () => {
    const newSmile = prompt('додайте новий смайл')
    const smileRegex = /^[\uD800-\uDFFF\u2600-\u2B55\u23E9\u23EA\u2B05\u2194\u21AA\u21A9\u2B06\u2B07\u2934\u2935\u25AA-\u25FE\u1F97]*$/;

    function isSmile(text) {
    return smileRegex.test(text);
}

    if (isSmile(newSmile)) {
     addSmile(newSmile);
     console.log(newSmile)
    } else if (newSmile === null) {
      alert(`Вставте смайлик`)
    }
    else {
      alert(`це не смайлик`)
    }
});

//Initialization
showSmiles();
updateVotes();
