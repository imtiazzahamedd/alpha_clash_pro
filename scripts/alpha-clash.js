// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

}

function play(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame()
}