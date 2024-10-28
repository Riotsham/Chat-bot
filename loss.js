var Prot  = ["chicken brest - 31g",
  "Egg - 13g",
  "Soya chunks - 52g",
  "Panner - 18g",
  "chick peas-19g",
  "Fish-20 to 25g",
  "Whey protein -80-90g of protein (depending on the brand and type)"]

var carbo =["white rice- 28g",
  "potato- 17g",
  "sweet potato -20g ",
  "chapathi - 30g",
  "oats - 66g",
  "Bread - 40g",
  "Banana - 23g",
  "other fruits"]

var fats =["Nuts - 50g ",
  "Egg yolk - 27g",
  "Peanutbutter - 50g",
  "Oliveoil - 100g",
  "Avacado - 15g",
  "Milk - 3.5g",
  "cheese - 13g",
  "Fish - 13g",
  "Panner - 20g"]

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
      return `
      1. "Can you suggest the weight loss plan" to get a diet plan       
      2. "List out high protein foods" to get a list of protein-rich foods
      3. "List out high carbohydrate foods" to get a list of carbohydrate-rich foods
      4. "List out high fat foods" to get a list of fat-rich foods
      5."suggest workout plan" to get the workout plan
      `
  } else if (input.includes("bye")) {
      return "Goodbye! Have a great day!";
  } else if (input.includes(" protein foods"&& "protein food" && "protein")){
    let proteinList = Prot.join(", ")
    return "Here are some protein sources: " + proteinList;
  }else if (input.includes(" carbo foods"&&"carbohydrates foods"&&"carbohydrates foods"&&"carbo food"&&"carbohydrates")){
    let proteinList = carbo.join(", ")
    return "Here are some protein sources: " + proteinList;
  }else if (input.includes("fat foods"&&"fat food"&& "fat")){
    let proteinList = fats.join(", ")
    return "Here are some protein sources: " + proteinList;
    }else if(input.includes("workout plan")){
      return `Bent-over,Shoulder-press,Squats,Deadlift,pushups,planks,Cardio are the workouts you need to focus on Lossing weight process`
    }
  else {
      return "Enter valid commands or type help to display commands";
  }
}


function askForHeightAndWeight() {

const weight = prompt("Please enter your weight in kilograms (e.g., 70):");


  if(weight >80 && weight<=90){
      var too = (weight*0.01).toFixed(1)
      var maincaltoo =((weight*2.2*12)+600).toFixed(3)
      return ` According to your weight you need to reduce 1% of your current weight,
                  Your weight is ${weight}kg you need to reduce ${too}kg per month, to reduce
                  it you need to intake ${maincaltoo}g of calories per day (protein- 205g , carbs-273 , Fat-91g)`;
              
              }

  else if(weight>90){
      var too = (weight*0.01).toFixed(1)
      var maincaltoo =((weight*2.2*10)+600).toFixed(3)
      return ` According to your weight you need to reduce 1% of your current weight
                  Your weight is ${weight}kg you need to reduce ${too}kg per month, to reduce
                  it you need to intake ${maincaltoo}g of calories per day (protein- 195g , carbs-260g , Fat-86g)`;
     
  }

  

  else{
      return"enter valid weight"
  }



         
}




