import quizData from "./data.js";
import resultMessages from "./results.js";
const quizContainer = document.getElementById("quiz-container");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleQuizData(quizData) {
  shuffleArray(quizData);

  quizData.forEach((question) => {
    shuffleArray(question.answers);
  });
}

function createApp() {
  const section = document.createElement("section");
  section.classList.add("quiz__question-block");

  const h1 = document.createElement("h1");
  h1.classList.add("quiz__title");
  h1.textContent = "Тестирование";

  const h2 = document.createElement("h2");
  section.appendChild(h2);

  const form = document.createElement("form");
  form.classList.add("quiz__form");

  let i = 0;
  let timerId;

  createQuize(form, h2, quizData[i]);

  form.addEventListener("click", (e) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      form.innerHTML = "";
      checked(e.target.name, e.target.id);
      if (i < quizData.length - 1) {
        i++;
        progress.value = i;
        createQuize(form, h2, quizData[i]);
      } else {
        quizContainer.innerHTML = "";
        createResult();
      }
    }, 1000);
  });

  const containerProgress = document.createElement("div");
  containerProgress.classList.add("quiz__progress");

  const containerNums = document.createElement("div");
  containerNums.classList.add("quiz__progress-numbers");

  const spanStart = document.createElement("span");
  spanStart.textContent = "0";

  const spanEnd = document.createElement("span");
  spanEnd.textContent = `${quizData.length}`;

  const progress = document.createElement("progress");
  progress.classList.add("quiz__progress-bar");
  progress.value = i;
  progress.max = `${quizData.length}`;

  section.appendChild(form);
  containerNums.appendChild(spanStart);
  containerNums.appendChild(spanEnd);
  containerProgress.appendChild(containerNums);
  containerProgress.appendChild(progress);
  quizContainer.appendChild(h1);
  quizContainer.appendChild(section);
  quizContainer.appendChild(containerProgress);
}

function createInput(form, answer, name) {
  const container = document.createElement("div");
  container.classList.add("quiz__option");

  const input = document.createElement("input");
  input.classList.add("quiz__radio");
  input.type = "radio";
  input.name = name;
  input.id = answer.id;

  const label = document.createElement("label");
  label.setAttribute("for", answer.id);
  label.textContent = answer.text;
  label.classList.add("quiz__label");

  container.appendChild(input);
  container.appendChild(label);
  form.appendChild(container);
}

function createQuize(form, h2, quizItem) {
  h2.textContent = quizItem.question;
  h2.classList.add("quiz__question");

  quizItem.answers.forEach((item) => {
    createInput(form, item, quizItem.name);
  });
}

function checked(name, id) {
  quizData.forEach((item) => {
    if (item.name === name) {
      item.answers.forEach((answer) => {
        if (answer.id === id) {
          answer.checked = true;
        } else {
          answer.checked = false;
        }
      });
    }
  });
}

function createResult() {
  document.body.removeAttribute("style");
  quizContainer.id = "quiz__result-container";

  const section = document.createElement("section");
  section.classList.add("quiz__result-block");

  let correctCount = 0;
  const message = new resultMessages();

  const h1 = document.createElement("h1");
  h1.classList.add("quiz__title");

  const resultMess = document.createElement("p");
  resultMess.classList.add("quiz__text");

  const ul = document.createElement("ul");
  ul.classList.add("quiz__result-list");

  quizData.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("quiz__result-item");
    const chekedAns = item.answers.find((answer) => answer.checked);

    if (chekedAns.correct) {
      li.classList.add("quiz__result-item--correct");
      correctCount++;
    } else {
      li.classList.add("quiz__result-item--incorrect");
    }

    const container = document.createElement("div");
    container.classList.add("quiz__answer");
    li.appendChild(container);

    const h2 = document.createElement("h2");
    h2.classList.add("quiz__answer-question");
    h2.textContent = item.question;
    container.appendChild(h2);

    const p = document.createElement("p");
    p.classList.add("quiz__answer-text");
    p.textContent = chekedAns.text;
    container.appendChild(p);

    ul.appendChild(li);
  });

  if (correctCount === 9) {
    h1.textContent = message.success.h2;
    resultMess.innerHTML = message.success.p;
  } else if (correctCount >= 5) {
    h1.textContent = message.middle.h2;
    resultMess.innerHTML = message.setCountAnswer(correctCount);
  } else {
    h1.textContent = message.fail.h2;
    resultMess.innerHTML = message.fail.p;
  }

  section.appendChild(ul);
  quizContainer.appendChild(h1);
  quizContainer.appendChild(resultMess);
  quizContainer.appendChild(section);
}

shuffleQuizData(quizData);
createApp();
