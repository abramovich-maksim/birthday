var current = -1;
var questions = [
    { "text": "Question 1", "img": "img\\quest1.jpg", "answer": "a1", "alternativeAnswer": "admin" },
    { "text": "Question 2", "img": "img\\quest2.jpg", "answer": "a2", "alternativeAnswer": "12345" },
    { "text": "Question 3", "img": "img\\quest3.jpg", "answer": "a3", "alternativeAnswer": "password" },
    { "text": "Question 4", "img": "img\\quest4.jpg", "answer": "a4", "alternativeAnswer": "qwerty" },
]

function getTemplate(index) {
    return `<div class="container" id="question${index}">
        <div class="caption">
            <span class="border">${questions[index].text}</span>
            <div><img src="${questions[index].img}" style="width: 200px; height: 100px;"></img></div>
            <div><input type="text" id="answer${index}"></div>
            <div><button id="submit${index}">Submit</button></div>
            </div>
    </div>`;
}

function appendQuestion() {
    var template = getTemplate(current);
    $("body").append(template);
}

function nextQuestion() {
    current++;
    
    appendQuestion();
    var question = $("#question" + current);
    var destination = question.offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);

    $(`#submit${current}`).on("click", function(e) {
        var answer = $(`#answer${current}`).val();
        if (answer == questions[current].answer) {
            nextQuestion();
        } else {
            alert('Неверный ответ, попробуйте еще раз');
        }
    });
}

$("#begin").on("click", function () {
    nextQuestion();
})