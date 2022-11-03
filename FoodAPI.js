const FoodAPI = () => {
    
    document.getElementById("foodSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("foodInput").value;
    //const url = "";
    console.log(value);
    
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
    const urlR = "https://www.themealdb.com/api/json/v1/1/random.php";
    if (value === "" || value === "Random") {
        fetch(urlR)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                //console.log(json);
                let results = "";
                results += '<h2>' + json.meals[0].strMeal + "</h2>";
                //document.getElementById("searchFood").innerHTML = results;
                results += '<img src="' + json.meals[0].strMealThumb + '">';
                //document.getElementById("searchFood").innerHTML = results;

                //populate Ingredients
                let ingredientList = [];
                let count = 0;
                if (!(json.meals[0].strIngredient1 === "")) {
                    ingredientList.push(json.meals[0].strIngredient1);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient2 === "")) {
                    ingredientList.push(json.meals[0].strIngredient2);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient3 === "")) {
                    ingredientList.push(json.meals[0].strIngredient3);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient4 === "")) {
                    ingredientList.push(json.meals[0].strIngredient4);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient5 === "")) {
                    ingredientList.push(json.meals[0].strIngredient5);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient6 === "")) {
                    ingredientList.push(json.meals[0].strIngredient6);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient7 === "")) {
                    ingredientList.push(json.meals[0].strIngredient7);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient8 === "")) {
                    ingredientList.push(json.meals[0].strIngredient8);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient9 === "")) {
                    ingredientList.push(json.meals[0].strIngredient9);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient10 === "")) {
                    ingredientList.push(json.meals[0].strIngredient10);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient11 === "")) {
                    ingredientList.push(json.meals[0].strIngredient11);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient12 === "")) {
                    ingredientList.push(json.meals[0].strIngredient12);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient13 === "")) {
                    ingredientList.push(json.meals[0].strIngredient13);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient14 === "")) {
                    ingredientList.push(json.meals[0].strIngredient14);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient15 === "")) {
                    ingredientList.push(json.meals[0].strIngredient15);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient16 === "")) {
                    ingredientList.push(json.meals[0].strIngredient16);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient17 === "")) {
                    ingredientList.push(json.meals[0].strIngredient17);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient18 === "")) {
                    ingredientList.push(json.meals[0].strIngredient18);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient19 === "")) {
                    ingredientList.push(json.meals[0].strIngredient19);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient20 === "")) {
                    ingredientList.push(json.meals[0].strIngredient20);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                


                //populate Measures
                let measureList = [];
                if (!(json.meals[0].strMeasure1 === "")) {
                    measureList.push(json.meals[0].strMeasure1);
                }
                if (!(json.meals[0].strMeasure2 === "")) {
                    measureList.push(json.meals[0].strMeasure2);
                }
                if (!(json.meals[0].strMeasure3 === "")) {
                    measureList.push(json.meals[0].strMeasure3);
                }
                if (!(json.meals[0].strMeasure4 === "")) {
                    measureList.push(json.meals[0].strMeasure4);
                }
                if (!(json.meals[0].strMeasure5 === "")) {
                    measureList.push(json.meals[0].strMeasure5);
                }
                if (!(json.meals[0].strMeasure6 === "")) {
                    measureList.push(json.meals[0].strMeasure6);
                }
                if (!(json.meals[0].strMeasure7 === "")) {
                    measureList.push(json.meals[0].strMeasure7);
                }
                if (!(json.meals[0].strMeasure8 === "")) {
                    measureList.push(json.meals[0].strMeasure8);
                }
                if (!(json.meals[0].strMeasure9 === "")) {
                    measureList.push(json.meals[0].strMeasure9);
                }
                if (!(json.meals[0].strMeasure10 === "")) {
                    measureList.push(json.meals[0].strMeasure10);
                }
                if (!(json.meals[0].strMeasure11 === "")) {
                    measureList.push(json.meals[0].strMeasure11);
                }
                if (!(json.meals[0].strMeasure12 === "")) {
                    measureList.push(json.meals[0].strMeasure12);
                }
                if (!(json.meals[0].strMeasure13 === "")) {
                    measureList.push(json.meals[0].strMeasure13);
                }
                if (!(json.meals[0].strMeasure14 === "")) {
                    measureList.push(json.meals[0].strMeasure14);
                }
                if (!(json.meals[0].strMeasure15 === "")) {
                    measureList.push(json.meals[0].strMeasure15);
                }
                if (!(json.meals[0].strMeasure16 === "")) {
                    measureList.push(json.meals[0].strMeasure16);
                }
                if (!(json.meals[0].strMeasure17 === "")) {
                    measureList.push(json.meals[0].strMeasure17);
                }
                if (!(json.meals[0].strMeasure18 === "")) {
                    measureList.push(json.meals[0].strMeasure18);
                }
                if (!(json.meals[0].strMeasure19 === "")) {
                    measureList.push(json.meals[0].strMeasure19);
                }
                if (!(json.meals[0].strMeasure20 === "")) {
                    measureList.push(json.meals[0].strMeasure20);
                }


                results += '<ol>';
                for (let i = 0; i < ingredientList.length; i++) {
                    results += '<li>' + ingredientList[i] + "   -   " + measureList[i] + '</li>';
                }
                results += '</ol>';
                //document.getElementById("searchFood").innerHTML = results;

                results += '<p>' + json.meals[0].strInstructions + "</p>";

                //results += '<img src="' + json.meals[0].strMealThumb + '">'

                results += '<a href="' + json.meals[0].strYoutube + '">watch a video on this cuisine!</a>';
                //<a href="nested/indexx.html">Go to nested index.html</a>
                document.getElementById("searchFood").innerHTML = results;
                //document.getElementById("weatherResults").
            });
    }
    else {
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                //console.log(json);
                let results = "";
                results += '<h2>' + json.meals[0].strMeal + "</h2>";
                //document.getElementById("searchFood").innerHTML = results;
                results += '<img src="' + json.meals[0].strMealThumb + '">';
                //document.getElementById("searchFood").innerHTML = results;

                //populate Ingredients
                let ingredientList = [];
                let count = 0;
                if (!(json.meals[0].strIngredient1 === "")) {
                    ingredientList.push(json.meals[0].strIngredient1);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient2 === "")) {
                    ingredientList.push(json.meals[0].strIngredient2);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient3 === "")) {
                    ingredientList.push(json.meals[0].strIngredient3);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient4 === "")) {
                    ingredientList.push(json.meals[0].strIngredient4);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient5 === "")) {
                    ingredientList.push(json.meals[0].strIngredient5);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient6 === "")) {
                    ingredientList.push(json.meals[0].strIngredient6);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient7 === "")) {
                    ingredientList.push(json.meals[0].strIngredient7);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient8 === "")) {
                    ingredientList.push(json.meals[0].strIngredient8);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient9 === "")) {
                    ingredientList.push(json.meals[0].strIngredient9);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient10 === "")) {
                    ingredientList.push(json.meals[0].strIngredient10);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient11 === "")) {
                    ingredientList.push(json.meals[0].strIngredient11);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient12 === "")) {
                    ingredientList.push(json.meals[0].strIngredient12);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient13 === "")) {
                    ingredientList.push(json.meals[0].strIngredient13);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient14 === "")) {
                    ingredientList.push(json.meals[0].strIngredient14);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient15 === "")) {
                    ingredientList.push(json.meals[0].strIngredient15);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient16 === "")) {
                    ingredientList.push(json.meals[0].strIngredient16);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient17 === "")) {
                    ingredientList.push(json.meals[0].strIngredient17);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient18 === "")) {
                    ingredientList.push(json.meals[0].strIngredient18);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient19 === "")) {
                    ingredientList.push(json.meals[0].strIngredient19);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                if (!(json.meals[0].strIngredient20 === "")) {
                    ingredientList.push(json.meals[0].strIngredient20);
                    if(ingredientList[count] === null){ingredientList.pop(); count--;}
                    count++;
                }
                


                //populate Measures
                let measureList = [];
                if (!(json.meals[0].strMeasure1 === "")) {
                    measureList.push(json.meals[0].strMeasure1);
                }
                if (!(json.meals[0].strMeasure2 === "")) {
                    measureList.push(json.meals[0].strMeasure2);
                }
                if (!(json.meals[0].strMeasure3 === "")) {
                    measureList.push(json.meals[0].strMeasure3);
                }
                if (!(json.meals[0].strMeasure4 === "")) {
                    measureList.push(json.meals[0].strMeasure4);
                }
                if (!(json.meals[0].strMeasure5 === "")) {
                    measureList.push(json.meals[0].strMeasure5);
                }
                if (!(json.meals[0].strMeasure6 === "")) {
                    measureList.push(json.meals[0].strMeasure6);
                }
                if (!(json.meals[0].strMeasure7 === "")) {
                    measureList.push(json.meals[0].strMeasure7);
                }
                if (!(json.meals[0].strMeasure8 === "")) {
                    measureList.push(json.meals[0].strMeasure8);
                }
                if (!(json.meals[0].strMeasure9 === "")) {
                    measureList.push(json.meals[0].strMeasure9);
                }
                if (!(json.meals[0].strMeasure10 === "")) {
                    measureList.push(json.meals[0].strMeasure10);
                }
                if (!(json.meals[0].strMeasure11 === "")) {
                    measureList.push(json.meals[0].strMeasure11);
                }
                if (!(json.meals[0].strMeasure12 === "")) {
                    measureList.push(json.meals[0].strMeasure12);
                }
                if (!(json.meals[0].strMeasure13 === "")) {
                    measureList.push(json.meals[0].strMeasure13);
                }
                if (!(json.meals[0].strMeasure14 === "")) {
                    measureList.push(json.meals[0].strMeasure14);
                }
                if (!(json.meals[0].strMeasure15 === "")) {
                    measureList.push(json.meals[0].strMeasure15);
                }
                if (!(json.meals[0].strMeasure16 === "")) {
                    measureList.push(json.meals[0].strMeasure16);
                }
                if (!(json.meals[0].strMeasure17 === "")) {
                    measureList.push(json.meals[0].strMeasure17);
                }
                if (!(json.meals[0].strMeasure18 === "")) {
                    measureList.push(json.meals[0].strMeasure18);
                }
                if (!(json.meals[0].strMeasure19 === "")) {
                    measureList.push(json.meals[0].strMeasure19);
                }
                if (!(json.meals[0].strMeasure20 === "")) {
                    measureList.push(json.meals[0].strMeasure20);
                }


                results += '<ol>';
                for (let i = 0; i < ingredientList.length; i++) {
                    results += '<li>' + ingredientList[i] + "   -   " + measureList[i] + '</li>';
                }
                results += '</ol>';
                //document.getElementById("searchFood").innerHTML = results;

                results += '<p>' + json.meals[0].strInstructions + "</p>";

                //results += '<img src="' + json.meals[0].strMealThumb + '">'

                results += '<a href="' + json.meals[0].strYoutube + '">watch a video on this cuisine!</a>';
                //<a href="nested/indexx.html">Go to nested index.html</a>
                document.getElementById("searchFood").innerHTML = results;
                //document.getElementById("weatherResults").
            });
    }
    
    
    
    
});

    
  return (
      <div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-lg">
        <h1>Recipe Finder<br/></h1>
        <form>
          <label>Search any Food! To display a random recipe, leave the field blank, or type Random!</label><br/>
          <input id="foodInput" type="text"></input><br/>
          <input id="foodSubmit" type="submit" value="Submit"></input>
        </form>
        <div id="searchFood">
        </div>

      </div>
      <div class="col-sm"></div>
    </div>
  </div>
      
      );
      
};

export default FoodAPI;