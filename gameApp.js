
const adviceList = ['Good', 'Bad', 'Not Sure', 'Maybe', 'Try Again', 'Think it twice', 'May not be', 'Very Bad', 'Very Good'];

function adviceApp(){
    const pickAdvice = Math.floor(Math.random() * adviceList.length)

    return adviceList[pickAdvice]
}

const buttons = document.getElementById('btn3');
const answers = document.getElementById('answers');
const buttons2 = document.getElementById('btn4');


buttons.addEventListener('click', function(){
    const finalAdvice = adviceApp()
    answers.textContent = finalAdvice
});

buttons2.addEventListener('click', function(){
    const rest = ""
    answers.textContent = rest
});


