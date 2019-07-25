
var order = 'pizza';

var makeDough = function(){
    return 'dough';
}

var putToppings = function(order, base) {
    var toppings = {
        pizza: 'tomato, mozzarella, basil'
    }

    return toppings[order] + ' on ' + base;
}

var bake = function(preppedMeal) {
    return 'baked: ' + preppedMeal;
}


var cook = function(order) {

    // 1. make dough
    // var dough = makeDough();
    // 2. put toppings on dough
    // var preppedMeal = putToppings(order, makeDough());
    // 3. bake
    var cookedMeal = bake(putToppings(order, makeDough()));
    
    return cookedMeal;
}

var serve = function(cookedMeal) {
    return 'plate of ' + cookedMeal;
}

var eat =  function(servedMeal) {
    var result = 'eat a ' + servedMeal;
    console.log(result);
}


var haveDinner = function(order) {
    
    // 1. cook food
    var cookedMeal = cook(order);
    // 2. serve food
    var servedMeal = serve(cookedMeal);
    // 3. eat food
    eat(servedMeal);
}


haveDinner(order);

