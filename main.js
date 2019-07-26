var current = -1;
var questions = [
    { "text": "Первый вопрос", "img": "img\\quest1.jpg", "answer": "Кодзима - гений", "alternativeAnswer": "admin" },
    { "text": "Второй вопрос", "img": "img\\quest2.jpg", "answer": "Скриптонит", "alternativeAnswer": "12345" },
    { "text": "Третий вопрос", "img": "img\\quest3.jpg", "answer": "a3", "alternativeAnswer": "password" },
    { "text": "Четвертый вопрос", "img": "img\\quest4.jpg", "answer": "a4", "alternativeAnswer": "qwerty" },
]

function getTemplate(index) {
    return `
	<div class="background" id="question${index}">
        <div class="container">
			<div class="centered">
				<div class="blues">
					<span class="text">${questions[index].text}</text>
				</div>
				<div>
					<img src="${questions[index].img}" style="max-width: 80%"></img>
				</div>
				<div>
					<span class="superhero">
						<span class="text">Ответ:</span>
					</span>
					<input type="text" id="answer${index}">
				</div>
				<div>
					<button id="submit${index}">Дальше</button>
				</div>
			</div>
		</div>
    </div>`;
}

function appendQuestion() {
    var template = getTemplate(current);
    $("body").append(template);
}

function nextQuestion(prevButtonSelector) {
	$(prevButtonSelector).prop("disabled", true);
    current++;
    
    appendQuestion();
    var question = $("#question" + current);
    var destination = question.offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);

	var buttonSelector = `#submit${current}`;
    $(buttonSelector).on("click", function(e) {
        var answer = $(`#answer${current}`).val().toLowerCase();
		var expectedAnswer = questions[current].answer.toLowerCase();
		var expectedAnswer2 = questions[current].alternativeAnswer.toLowerCase();
        if (answer == expectedAnswer || answer == expectedAnswer2) {
            nextQuestion(buttonSelector);
        } else {
            alert('Неверный ответ, попробуйте еще раз');
        }
    });
}

$("#begin").on("click", function () {
    nextQuestion("#begin");
})
