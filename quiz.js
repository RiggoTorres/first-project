const showQuestion = document.getElementById("show-question");
const score = document.getElementById("score");
const option = document.getElementById("options");
const numberofquestion = document.getElementById("number-of-question");

const questions = [
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide"
  },
  {
    question: "What is the square root of 144?",
    options: ["11", "13", "12", "14"],
    correctAnswer: "12"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Go", "Gd"],
    correctAnswer: "Au"
  },
  {
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Albert Einstein", "Alexander Graham Bell", "Isaac Newton"],
    correctAnswer: "Alexander Graham Bell"
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    correctAnswer: "Africa"
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "80°C"],
    correctAnswer: "100°C"
  },
  {
    question: "Which language is the most widely spoken in the world?",
    options: ["English", "Hindi", "Spanish", "Mandarin"],
    correctAnswer: "Mandarin"
  },
  {
    question: "Who is known as the Father of Computers?",
    options: ["Alan Turing", "Bill Gates", "Charles Babbage", "Steve Jobs"],
    correctAnswer: "Charles Babbage"
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    correctAnswer: "Tokyo"
  },
  {
    question: "Which is the largest organ in the human body?",
    options: ["Liver", "Heart", "Skin", "Brain"],
    correctAnswer: "Skin"
  },
  {
    question: "What is the process of water turning into vapor called?",
    options: ["Condensation", "Evaporation", "Freezing", "Melting"],
    correctAnswer: "Evaporation"
  },
  {
    question: "What does the 'HTTP' in a website address stand for?",
    options: ["HyperText Transfer Protocol", "High Tech Transfer Protocol", "Hyper Tool Text Process", "Home Transfer Text Protocol"],
    correctAnswer: "HyperText Transfer Protocol"
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "Which vitamin is known as the sunshine vitamin?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: "Vitamin D"
  },
  {
    question: "Which country is famous for inventing pizza?",
    options: ["France", "Spain", "Italy", "Germany"],
    correctAnswer: "Italy"
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "6"
  },
  {
    question: "In which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: "1945"
  },
  {
    question: "What is the main gas found in the air we breathe?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Nitrogen"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Leopard", "Lion"],
    correctAnswer: "Lion"
  },
  {
    question: "How many bones are there in the adult human body?",
    options: ["206", "210", "208", "200"],
    correctAnswer: "206"
  },
  {
    question: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
    correctAnswer: "Thermometer"
  },
  {
    question: "What is the name of the galaxy we live in?",
    options: ["Andromeda", "Milky Way", "Whirlpool", "Orion"],
    correctAnswer: "Milky Way"
  },
  {
    question: "Which planet is famous for its rings?",
    options: ["Jupiter", "Mars", "Saturn", "Venus"],
    correctAnswer: "Saturn"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond"
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific"
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    question: "Which blood group is known as the universal donor?",
    options: ["A", "B", "AB", "O"],
    correctAnswer: "O"
  },
  {
    question: "Which planet is known for having the most moons?",
    options: ["Earth", "Jupiter", "Saturn", "Uranus"],
    correctAnswer: "Saturn"
  },
  {
    question: "Which gas is essential for breathing?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
    correctAnswer: "Oxygen"
  },
  {
    question: "Who was the first person to step on the moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    correctAnswer: "Neil Armstrong"
  },
  {
    question: "What is the chemical symbol for Iron?",
    options: ["Ir", "Fe", "I", "In"],
    correctAnswer: "Fe"
  },
  {
    question: "What is the process by which plants make their food?",
    options: ["Digestion", "Respiration", "Photosynthesis", "Transpiration"],
    correctAnswer: "Photosynthesis"
  },
  {
    question: "Which country has the largest population?",
    options: ["USA", "India", "China", "Russia"],
    correctAnswer: "China"
  },
  {
    question: "Which bird is known for its colorful feathers and mimicry?",
    options: ["Sparrow", "Parrot", "Crow", "Peacock"],
    correctAnswer: "Parrot"
  },
  {
    question: "What is the unit of electrical resistance?",
    options: ["Volt", "Ohm", "Watt", "Ampere"],
    correctAnswer: "Ohm"
  },
  {
    question: "Which color is made by mixing blue and yellow?",
    options: ["Orange", "Green", "Purple", "Brown"],
    correctAnswer: "Green"
  },
  {
    question: "What is the most widely used search engine?",
    options: ["Yahoo", "Google", "Bing", "DuckDuckGo"],
    correctAnswer: "Google"
  },
  {
    question: "Which sense is associated with the tongue?",
    options: ["Sight", "Smell", "Taste", "Touch"],
    correctAnswer: "Taste"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "Which continent is the largest by area?",
    options: ["Europe", "Asia", "Africa", "North America"],
    correctAnswer: "Asia"
  },
  {
    question: "Which animal is the largest land animal?",
    options: ["Elephant", "Rhino", "Hippopotamus", "Giraffe"],
    correctAnswer: "Elephant"
  },
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "32°C", "10°C", "100°C"],
    correctAnswer: "0°C"
  },
  {
    question: "Which month has 28 days in a non-leap year?",
    options: ["February", "April", "March", "June"],
    correctAnswer: "February"
  },
  {
    question: "Which is the smallest unit of life?",
    options: ["Tissue", "Organ", "Cell", "Organism"],
    correctAnswer: "Cell"
  },
  {
    question: "What is the main function of the heart?",
    options: ["To digest food", "To pump blood", "To control thoughts", "To store oxygen"],
    correctAnswer: "To pump blood"
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Aluminum", "Iron", "Lead"],
    correctAnswer: "Mercury"
  }
];


let countScore = 0;
let currentIndex = 0;

const askQuestion = () => {
  const progressBar = document.getElementById("progress-bar");
  const progressProgress = ((currentIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progressProgress}%`;

  const currentQuestion = questions[currentIndex];
  showQuestion.textContent = currentQuestion.question;
  option.innerHTML = "";
  numberofquestion.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

  currentQuestion.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span> ${optionText}`;
    button.classList.add("option-button");
    option.appendChild(button);

    button.addEventListener("click", () => {
      const allButtons = document.querySelectorAll(".option-button");
      allButtons.forEach(btn => btn.disabled = true);

      if (optionText === currentQuestion.correctAnswer) {
        countScore++;
        score.textContent = `Score: ${countScore} / ${questions.length}`
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
        allButtons.forEach(btn => {
          if (btn.textContent.includes(currentQuestion.correctAnswer)) {
            btn.classList.add("correct");
          }
        });
      }

      currentIndex++;
      setTimeout(() => {
        if (currentIndex < questions.length) {
          askQuestion();
        } else {
          endOfQuiz();
        }
      }, 500);
    });
  });

  const skipbutton = document.createElement("button");
  skipbutton.textContent = "Skip";
  skipbutton.classList.add("skip-button");
  option.appendChild(skipbutton);

  skipbutton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      askQuestion();
    } else {
      endOfQuiz();
    }
  });
};

askQuestion();

const endOfQuiz = () => {
  showQuestion.textContent = "Quiz Over!";
  option.innerHTML = `<h3 class="completemsg">You've completed the quiz! Your final score is ${countScore}/${questions.length}.`;
  score.textContent = `Score: ${countScore}`;
  const restart = document.createElement("button");
  restart.textContent = "Restart Quiz";
  restart.classList.add("restart-button");
  option.appendChild(restart);

  restart.addEventListener("click", () => {
    currentIndex = 0;
    countScore = 0;
    askQuestion();
  });
};