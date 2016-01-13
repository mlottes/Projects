//created by Mark Lottes for N320 on 10/8/15
var data;

$.getJSON( "data/recipes.json")
    .done(function( json ) {

        data = json;
        showData();
        attachEvents();

    })
    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });

//show the listing of recipes
function showData() {

    for(var i = 0; i < data.recipes.length; i++) {
        $(".list").append("<li class='recipes'>" + data.recipes[i].name + "</li>");
    }
}



function attachEvents() {
    $(".recipes").click(showRecipeInfo);
}

function showRecipeInfo() {
    var recipe = _.findWhere(data.recipes, { name: $(this).html() });

    $("#recipeInfo").html("Recipe: " + recipe.name + "<br />" + "Serving size: " + recipe.serving + "<br />"+"Prep Time: " + recipe.prep_time + "<br />");

    for(var i = 0; i < recipe.ingredients.length; i++) {
        $("#recipeInfo").append("Ingredient Name: " + recipe.ingredients[i].name +"<br />"+"Ingredient Amount: "+ recipe.ingredients[i].amount +"<br />");
    }
}