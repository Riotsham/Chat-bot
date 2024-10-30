
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
    "Bench press",
    " pull-ups",
     "squats", 
     "leg press",
      "push-ups",
       " cardio"
];

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addMessage(userInput, "user-message");
    document.getElementById("user-input").value = "";

    let botResponse = getBotResponse(userInput.toLowerCase());
    setTimeout(() => addMessage(botResponse, "bot-message"), 500);
}

// Add Message to Chat
function addMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Get Bot Response Function
function getBotResponse(input) {
    if (input.includes("weight gaining plan")) {
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
        return; // Exit after starting the message queue
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

// Ask for Height and Weight Function
function askForHeightAndWeight() {
    const weight = prompt("Please enter your weight in kilograms (e.g., 70):");
    
    var maincaltoo =((weight*2.2*14)+600);
    var protein = ((maincaltoo*0.25)/4);
    var carbs = ((maincaltoo*0.6)/4);
    var fats =((maincaltoo*0.15)/9);

    var calories = parseInt(maincaltoo)
    var pro = parseInt(protein)
    var car = parseInt(carbs)
    var fat = parseInt(fats)
    
  
    if(weight >40 && weight<=50){
       
        var too = (weight*0.05).toFixed(1);
        return ` According to your weight you need to increase 5% of your current weight
                    Your weight is ${weight}kg you need to increase ${too}kg per month, to increase
                    it you need to intake ${calories} g of calories per day (protein- ${pro} g , carbs- ${car}g , Fat- ${fat} g).`;
                
                }
    
    else if(weight>50 && weight<=60){
        var too = (weight*0.025).toFixed(1)
        
        return ` According to your weight you need to increase 2.5% of your current weight
                    Your weight is ${weight}kg you need to increase ${too}kg per month, to increase
                    it you need to intake ${calories} g of calories per day (protein- (protein- ${pro} g , carbs- ${car}g , Fat- ${fat} g).`;
    }
    
    else if(weight>60 && weight<=70){
        var too = (weight*0.0125).toFixed(1)
        
        return ` according to your weight you need to increase 1.25% of your current weight
                    Your weight is ${weight}kg you need to increase ${too}kg per month, to increase
                    it you need to intake ${calories} g of calories per day (protein- ${pro} g , carbs- ${car}g , Fat- ${fat} g).`;
    }
}
// }




function sendListWithDelay(list) {
    addMessage(); // Send introductory message
    list.forEach((item, index) => {
        setTimeout(() => {
            addMessage(item, "bot-message"); // Send each item after a delay
        }, index * 1000); // Adjust the delay (1000 ms = 1 second)
    });
}