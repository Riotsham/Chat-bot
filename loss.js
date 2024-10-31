var Prot = [
  "Here are some of common food and protein level",
  "1.Chicken breast - 31g",
  "2.Egg - 13g",
  "3.Soya chunks - 52g",
  "4.Paneer - 18g",
  "5.Chickpeas - 19g",
  "5.Fish - 20 to 25g",
  "6.Whey protein - 80-90g (depending on brand and type)"
];



var carbo = [
  "Here are some of common food and Carbohydrate level",
  "1.White rice - 28g",
  "2.Potato - 17g",
  "3.Sweet potato - 20g",
  "4.Chapathi - 30g",
  "5.Oats - 66g",
  "6.Bread - 40g",
  "7.Banana - 23g",
  "8.Other fruits"
];

var fats = [
  "Here are some of common food and fat level",
  "1.Nuts - 50g",
  "2.Egg yolk - 27g",
  "3.Peanut butter - 50g",
  "4.Olive oil - 100g",
  "5.Avocado - 15g",
  "6.Milk - 3.5g",
  "7.Cheese - 13g",
  "8.Fish - 13g",
  "9.Paneer - 20g"
];

var workouts = [
  `Sure here is your workout plan`,

  `Day 1: (Full Body Strength)

  Squats: 3 sets of 12 reps,
  Push-Ups: 3 sets of 15 reps,
  Bent-Over Rows: 3 sets of 12 reps,
  Lunges: 3 sets of 12 reps per leg,
  Plank: 3 sets of 30-45 seconds`,

   `Day 2 & 6: (High-Intensity Interval Training (HIIT))

  Jump Rope or High Knees: 30 seconds on, 15 seconds rest, for 1015 minutes;
  Circuit of Burpees, Jump Squats, and Mountain Climbers: 30 seconds each, for 3 rounds`,

  `Day 3: (Lower Body and Core)

  Deadlift: 3 sets of 10 reps,
  Glute Bridge: 3 sets of 15 reps,
  Leg Press: 3 sets of 12 reps,
  Russian Twists: 3 sets of 20 reps,
  Bicycle Crunches: 3 sets of 20 reps`, 

   `Day 4: (Steady-State Cardio)

  30-45 minutes of brisk walking, jogging, or cycling at a moderate pace`,

    `Day 5: (Upper Body and Core)

  Shoulder Press: 3 sets of 12 reps,
  Lat Pulldown: 3 sets of 12 reps,
  Bicep Curls: 3 sets of 12 reps,
  Tricep Dips: 3 sets of 12 reps,
  Mountain Climbers: 3 sets of 30 seconds`,

     `Day 7: (Active Recovery or Light Cardio)

Light activity such as yoga, stretching, or a casual walk
  `
];

function sendMessage() {
const userInput = document.getElementById("user-input").value;
if (userInput.trim() === "") return;

document.addEventListener("DOMContentLoaded", () => {
const inputField = document.getElementById("user-input");
inputField.addEventListener("keydown", (e) => {
if (e.code === "Enter") {
  let input = inputField.value;

  setTimeout(() => {
    let botResponse = getBotResponse(userInput.toLowerCase());
    addMessage(botResponse, "bot-message");
}, 1000); 
document.getElementById("user-input").value = "";
  inputField.value = "";
  output(input);
}
});
});


addMessage(userInput, "user-message");


let botResponse = getBotResponse(userInput.toLowerCase());
setTimeout(() => addMessage(botResponse, "bot-message"), 500);


document.getElementById("user-input").value = "";
}

function addMessage(message, className) {
const chatBox = document.getElementById("chat-box");
const messageDiv = document.createElement("div");
messageDiv.className = className;
messageDiv.textContent = message;
chatBox.appendChild(messageDiv);
chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {

  if (input.includes("weight loss plan")){

     return askForHeightAndWeight();
  }
  if (input.includes("hello")) {
      return "Hello there! How can I assist you?";
  } else if (input.includes("help")) {
    const lines = [
      "Here are some commands you can use:",
      "1. \"Can you suggest a weight gain plan?\" - Get a tailored diet plan.",
      "2. \"List high protein foods.\" - Receive a list of protein-rich foods.",
      "3. \"List high carbohydrate foods.\" - Get a list of carbohydrate-rich foods.",
      "4. \"List high fat foods.\" - Access a list of fat-rich foods.",
      "5. \"Suggest a workout plan.\" - Receive a customized workout plan."
  ];

  lines.forEach((line, index) => {
    setTimeout(() => {
        addMessage(line, "bot-message");
    }, index * 1000);
});
return;
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day!";
} else if (input.includes("protein foods") || input.includes("protein food") || input.includes("protein")) {
    sendListWithDelay(Prot, "Here are some protein sources: ");
} else if (input.includes("carbo foods") || input.includes("carbohydrates foods") || input.includes("carbo")) {
    sendListWithDelay(carbo, "Here are some protein sources: ");
} else if (input.includes("fat foods") || input.includes("fat food") || input.includes("fat")) {
    sendListWithDelay(fats, "Here are some protein sources: ");
} else if (input.includes("workout plan")) {
    sendListWithDelay(workouts, "Here are some protein sources: ");
} else {
    return "Enter valid commands. Type 'help' to display commands.";
}
}


function askForHeightAndWeight() {

const weight = prompt("Please enter your weight in kilograms (e.g., 70):");



  if(weight >80 && weight<=90){
      var too = (weight*0.01).toFixed(1)
      var maincaltoo =((weight*2.2*12)+600);
      var protein = ((maincaltoo*0.25)/4);
      var carbs = ((maincaltoo*0.6)/4);
      var fats =((maincaltoo*0.15)/9);

      var calories = parseInt(maincaltoo)
      var pro = parseInt(protein)
      var car = parseInt(carbs)
      var fat = parseInt(fats)

      return ` According to your weight you need to reduce 1% of your current weight,
                  Your weight is ${weight}kg you need to reduce ${too}kg per month, to reduce
                  it you need to intake ${calories}g of calories per day (protein- ${pro} , carbs-${car} , Fat-${fat})`;
              
              }

  else if(weight>90){
      var too = (weight*0.01).toFixed(1)
      var maincaltoo =((weight*2.2*10)+600);
      var protein = ((maincaltoo*0.25)/4);
      var carbs = ((maincaltoo*0.6)/4);
      var fats =((maincaltoo*0.15)/9);

      var calories = parseInt(maincaltoo)
      var pro = parseInt(protein)
      var car = parseInt(carbs)
      var fat = parseInt(fats)

      return ` According to your weight you need to reduce 1% of your current weight
                  Your weight is ${weight}kg you need to reduce ${too}kg per month, to reduce
                  it you need to intake ${calories}g of calories per day (protein- ${pro} , carbs-${car} , Fat-${fat})`;
     
  }

  

  else{
      return"enter valid weight"
  }



         
}

function sendListWithDelay(list) {
  addMessage(); // Send introductory message
  list.forEach((item, index) => {
      setTimeout(() => {
          addMessage(item, "bot-message"); // Send each item after a delay
      }, index * 1000); // Adjust the delay (1000 ms = 1 second)
  });
}


