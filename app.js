var questionNumber = document.getElementById("questionNumber")
var totalQuestionNumber = document.getElementById("totalQuestionNumber")
var question = document.getElementById("question")
var options = document.getElementById("options")

var quizDisplay = document.getElementById("quizDisplay")
var resultDisplay = document.getElementById("resultDisplay")

var showMarks = document.getElementById("showMarks")

var questions = [ 
    
    {
    question1: "HTML STANDS FOR ________",
    option: ["Hyper text markup language", "Hyper Tangent Mock language","Hyper text makeup Language","Hypo Text Markup Lang"],
    correctAns: "hyper text markup language"
},

{
    question1: "CSS STANDS FOR ________",
    option: ["cascading style sheet", "html","html","html"],
    correctAns: "cascading style sheet"
},

{
    question1: "RAM STANDS FOR ________",
    option: ["Random Acess Memory ", "Read Only Memory","Storage Memory"," Randon Aided Memory"],
    correctAns: "Random Acess "
},

{
    question1: "ROM STANDS FOR ________",
    option: ["Read Only Memory", "Reply On Message","Redirect On Memory ","Javascript"],
    correctAns: "Read Only Memory"
}

]

var indexValue = 0;
var marks = 0;



function renderQuestion(){

question.innerHTML = questions[indexValue].question1;
    for(var i = 0; i <questions[indexValue].option.length; i++){



        options.innerHTML += `<div class="col-md-6" > 
        <button onclick = "checkQuestion('${questions[indexValue].option[i]}', '${questions[indexValue].correctAns}')"
        class="
        btn btn-light 
        mt-3 py-3 p-2 w-100 
        shadow text-info">
        ${questions[indexValue].option[i]}
        </button>
        </div>`

    }

    totalQuestionNumber.innerHTML = questions.length;
    questionNumber.innerHTML = indexValue + 1;

}
renderQuestion();


function nextQuestion(){
    options.innerHTML = "";
    if(indexValue + 1 == questions.length){
        resultDisplay.style.display = "block";
        quizDisplay.style.display = "none";
        var percentage = (marks/4)*100;
        //   console.log(percentage)
        showMarks.innerHTML = percentage;

    } else{
        indexValue++;
        //  console.log(indexValue)
        renderQuestion();
    }
    
   }

function checkQuestion(optionValue, correctValue){
if(optionValue == correctValue){
    marks++
    // console.log(marks)
}
nextQuestion()

}



