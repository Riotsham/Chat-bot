const apiKey = 'fK63z5HWiLqUQlNqb7fDbK4W1TGgIWC9ZdV3JRiK'; 

const NUTRIENT_IDS = {
    calories: 1008,  
    protein: 1003,   
    carbs: 1005,     
    fat: 1004        
};


async function fetchNutritionInfo() {
    const foodItem = document.getElementById('foodInput').value;
    
    if (!foodItem) {
        alert('Please enter a food name.');
        return;
    }

    try {
        const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${foodItem}&api_key=${apiKey}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        const data = await response.json();
        const food = data.foods[0];
        
        if (!food) {
            document.getElementById('nutritionInfo').innerHTML = 'Food item not found.';
            return;
        }

        
        const nutrients = food.foodNutrients;
        const nutritionInfo = {
            name: food.description,
            calories: nutrients.find(n => n.nutrientId === NUTRIENT_IDS.calories)?.value || 'N/A',
            protein: nutrients.find(n => n.nutrientId === NUTRIENT_IDS.protein)?.value || 'N/A',
            carbs: nutrients.find(n => n.nutrientId === NUTRIENT_IDS.carbs)?.value || 'N/A',
            fat: nutrients.find(n => n.nutrientId === NUTRIENT_IDS.fat)?.value || 'N/A'
        };

        
        document.getElementById('nutritionInfo').innerHTML = `
            <p><strong>Calories:</strong> ${nutritionInfo.calories} kcal</p>
            <p><strong>Protein:</strong> ${nutritionInfo.protein} g</p>
            <p><strong>Carbohydrates:</strong> ${nutritionInfo.carbs} g</p>
            <p><strong>Fat:</strong> ${nutritionInfo.fat} g</p>
        `;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('nutritionInfo').innerHTML = 'An error occurred. Please try again later.';
    }
}


