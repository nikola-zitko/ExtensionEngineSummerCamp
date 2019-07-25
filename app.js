
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


var cook = function(order, thingToDoAfterCooking) {

    // 1. make dough
    // var dough = makeDough();
    // 2. put toppings on dough
    // var preppedMeal = putToppings(order, makeDough());
    // 3. bake
    var COOK_TIME = 3000;
    var thingThatsTakingTime = function() {  
             
        var cookedMeal = bake(putToppings(order, makeDough()));
    
        thingToDoAfterCooking(cookedMeal);
    }
    window.setTimeout(thingThatsTakingTime, COOK_TIME);

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

    var thingToDoAfterCooking = function(cookedMeal) {
        eat(serve(cookedMeal));
    }

    
    // 1. cook food
    cook(order, thingToDoAfterCooking);

}


haveDinner(order);

