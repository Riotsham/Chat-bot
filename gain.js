
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

    `Day 1: (Upper Body (Chest and Triceps))

    Bench Press: 4 sets of 6-8 reps,
    Dumbbell Flyes: 3 sets of 10-12 reps,
    Push-Ups: 3 sets to failure,
    Tricep Dips: 3 sets of 8-10 reps,
    Overhead Tricep Extension: 3 sets of 10-12 reps`,

     `Day 2: (Lower Body (Legs and Core))
    Squats: 4 sets of 6-8 reps,
    Lunges: 3 sets of 10-12 reps per leg,
    Deadlift: 4 sets of 6-8 reps,
    Leg Press: 3 sets of 10-12 reps,
    Plank: 3 sets of 30-60 seconds`,

    `Day 3: Rest or Light Cardio (e.g., 20-30 minutes walking or cycling)`, 

     `Day 4: (Back and Biceps)
    Pull-Ups or Lat Pulldown: 4 sets of 6-8 reps,
    Dumbbell Row: 3 sets of 10 reps per arm,
    Face Pulls: 3 sets of 12 reps,
    Bicep Curls: 3 sets of 10-12 reps,
    Hammer Curls: 3 sets of 10 reps`,

      `Day 5: (Shoulders and Core)
    Overhead Press: 4 sets of 8 reps,
    Lateral Raises: 3 sets of 12 reps,
    Rear Delt Flyes: 3 sets of 12 reps,
    Russian Twists: 3 sets of 20 twists,
    Leg Raises: 3 sets of 15 reps`,

       `Day 6: (Lower Body (Glutes and Hamstrings))
    Deadlifts: 4 sets of 8 reps,
    Leg Curls: 3 sets of 12 reps,
    Bulgarian Split Squats: 3 sets of 10 reps per leg,
    Calf Raises: 3 sets of 15 reps,
    Bicycle Crunches: 3 sets of 20 reps,
    `,

    `Day 7: Rest`
];

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addMessage(userInput, "user-message");
    document.getElementById("user-input").value = "";

    let botResponse = getBotResponse(userInput.toLowerCase());
    setTimeout(() => addMessage(botResponse, "bot-message"), 500);
}

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault();   
        sendMessage();            
    }
});


function addMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


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
            "5. \"Suggest a workout plan.\" - Receive a customized workout plan.",
            "6. \"What today's plan.\" - Receive a workout plan for current."
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
       sendListWithDelay(fats,"Here are some protein sources: ");
    } else if (input.includes("workout plan")) {
        sendListWithDelay(workouts, "Here are some protein sources: ");
    }else if(input.includes("today's plan")||input.includes("plan today")){
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayName = daysOfWeek[today.getDay()];
        console.log("Today is " + dayName);

        if( dayName== "Sunday"){
            return`Bench Press: 4 sets of 6-8 reps,
            Dumbbell Flyes: 3 sets of 10-12 reps,
            Push-Ups: 3 sets to failure,
            Tricep Dips: 3 sets of 8-10 reps,
            Overhead Tricep Extension: 3 sets of 10-12 reps`
        }
        else if(dayName == "Monday"){
            return ` Squats: 4 sets of 6-8 reps,
            Lunges: 3 sets of 10-12 reps per leg,
            Deadlift: 4 sets of 6-8 reps,
            Leg Press: 3 sets of 10-12 reps,
            Plank: 3 sets of 30-60 seconds`
        }
        else if(dayName == "Tuesday"){
                return`Rest or Light Cardio (e.g., 20-30 minutes walking or cycling)`
        }
        else if(dayName == "Wednesday"){
            return` Pull-Ups or Lat Pulldown: 4 sets of 6-8 reps,
            Dumbbell Row: 3 sets of 10 reps per arm,
            Face Pulls: 3 sets of 12 reps,
            Bicep Curls: 3 sets of 10-12 reps,
            Hammer Curls: 3 sets of 10 reps`
        }
        else if(dayName == "Thursday"){
            return ` Overhead Press: 4 sets of 8 reps,
            Lateral Raises: 3 sets of 12 reps,
            Rear Delt Flyes: 3 sets of 12 reps,
            Russian Twists: 3 sets of 20 twists,
            Leg Raises: 3 sets of 15 reps`
        }
        else if(dayName == "Friday"){
            return`Deadlifts: 4 sets of 8 reps,
            Leg Curls: 3 sets of 12 reps,
         Bulgarian Split Squats: 3 sets of 10 reps per leg,
         Calf Raises: 3 sets of 15 reps,
         Bicycle Crunches: 3 sets of 20 reps`
        }
        else if(dayName == "Saturday"){
            return`Rest`
        }
        
    }
        
     else {
        return "I'm sorry, I didn't understand that. Please try a different command or type 'help' for a list of commands";
    }



function askForHeightAndWeight() {
        

    const weight = prompt("Please enter your weight in kilograms (e.g., 70):");
    const height = prompt("Please enter your Height in Meters (e.g.1.75):");
    
    let bmi = weight / (height * height);
       
    

    var maincaltoo =((weight*2.2*14)+600);
    var protein = ((maincaltoo*0.25)/4);
    var carbs = ((maincaltoo*0.6)/4);
    var fats =((maincaltoo*0.15)/9);

    var calories = parseInt(maincaltoo)
    var pro = parseInt(protein)
    var car = parseInt(carbs)
    var fat = parseInt(fats)
    
  
    if(bmi>14 && bmi<=15){
       
        var too = (weight*0.05).toFixed(1);
        return `  Based on your current weight. it's recommended  to gain  5% of your current weight,
                  Your current weight is ${weight}kg it's recommended to gain ${too}kg per month, To reach this
                  goal,try to keep your daily calorie intake around ${calories}g with protein- ${pro} , carbs-${car} , Fat-${fat}`;
                    
                
                }
    
    else if(bmi>16 && bmi<=17){
        var too = (weight*0.025).toFixed(1)
        
        return ` Based on your current weight. it's recommended  to gain  2.5% of your current weight,
                  Your current weight is ${weight}kg it's recommended to gain ${too}kg per month, To reach this
                  goal,try to keep your daily calorie intake around ${calories}g with protein- ${pro} , carbs-${car} , Fat-${fat}`;
    }
    
    else if(bmi>17 && bmi<18.5){
        var too = (weight*0.0125).toFixed(1)
        
        return `Based on your current weight. it's recommended  to gain  1.25% of your current weight,
                  Your current weight is ${weight}kg it's recommended to gain ${too}kg per month, To reach this
                  goal,try to keep your daily calorie intake around ${calories}g with protein- ${pro} , carbs-${car} , Fat-${fat}`;
    }
    else if(bmi>18.5 && bmi<24.9){
        return `You are at normal weight`;
    }
    else if(bmi>30){
        return`You are over weight`;
    }
    else{
        return`Enter a valid height and weight`;
    }
}





function sendListWithDelay(list) {
    addMessage(); 
    list.forEach((item, index) => {
        setTimeout(() => {
            addMessage(item, "bot-message");
        }, index * 1500); 
    });
    
}
}


function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addMessage(userInput, "user-message");
    document.getElementById("user-input").value = "";

    showTypingIndicator();

    let botResponse = getBotResponse(userInput.toLowerCase());
    setTimeout(() => {
        hideTypingIndicator();
        addMessage(botResponse, "bot-message");
    }, 1000); 
}

function showTypingIndicator() {
    const chatBox = document.getElementById("chat-box");
    const typingDiv = document.createElement("div");
    typingDiv.className = "typing-indicator";
    typingDiv.id = "typing-indicator";
    typingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTypingIndicator() {
    const typingDiv = document.getElementById("typing-indicator");
    if (typingDiv) typingDiv.remove();
}

