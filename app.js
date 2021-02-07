var searchFood = document.getElementById('search-food');
var searchedFood = searchFood.value;

// button
document.getElementById('search-button').addEventListener('click', function () {
    searchedFood = searchFood.value;

    foodPath();
})

function foodPath() {
    searchedFood = searchFood.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => {

            const foodName = data.meals;
            getFoodInfo(foodName)
        })
        .catch(err => alert('Your keyword didnt match to any of our recipes'))
}



// To get food info
const getFoodInfo = mealHere => {
    const content = document.getElementById('foods');
    mealHere.forEach(meal => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'each-food'
        const foodInfo = `<h3 class = 'food-name'>${meal.strMeal}</h3>
            <button onclick = 'displayIngredientsAPI("${meal.strMeal}")'=>Ingredients </button>`;
        foodDiv.innerHTML = foodInfo;
        content.appendChild(foodDiv);
    })
}
document.getElementById('search-button').addEventListener('click',function(){
    foodPath();
    document.getElementById('search-food').value ='';
    document.getElementById('foods').innerHTML = '';
})



    


const displayIngredients = ingredients => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderIngredients(data[0]));

}
const renderIngredients = meals => {

    const foodDiv = document.getElementById('food-detail');
    meals.forEach(details => {
        const mealIngredientDiv = document.createElement('div')
        const mealIngredientInfo = `
         <h2 class = "text">${details.strMeal}<h2>
         <h3 class = "text"> Ingredients </h3> 
         <li class = "text">${details.strIngredient1}</li>
         <li class = "text">${details.strIngredient2}</li>
         <li class = "text">${details.strIngredient3}</li>
         <li class = "text">${details.strIngredient4}</li>
         <li class = "text">${details.strIngredient5}</li>
         <li class = "text">${details.strIngredient6}</li>
         <li class = "text">${details.strIngredient7}</li>
         <li class = "text">${details.strIngredient8}</li>
         <li class = "text">${details.strIngredient9}</li>
         <li class = "text">${details.strIngredient10}</li>`
        mealIngredientDiv.innerHTML = mealIngredientInfo;
        foodDiv.appendChild(mealIngredientDiv);

    });


}

const displayIngredientsAPI = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals;
            renderIngredients(meal);
        })
}




