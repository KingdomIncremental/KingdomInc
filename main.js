//Initial game vars
var food = 0;
var wood = 0; 
var totalCitizens = 0;
var availableCitizens = 0;

var foodLoss = 0; 

var incrementLevel = 1;

var foodGatherers = 0;
var foodMultiplier = 1;
var woodGatherers = 0;
var woodMultiplier = 1;

var kingMultplier = .25;
var kingOfWood = false;
var kingOfFood = false; 

//Food functions
function addFoodGatherer(incrementLevel)
{
    if(availableCitizens >= incrementLevel)
    {
        foodGatherers += incrementLevel;
        availableCitizens -= incrementLevel;
    }
    document.getElementById("foodGathers").innerHTML = foodGatherers;
}
function subFoodGatherer(incrementLevel)
{
    if(foodGatherers >= incrementLevel)
    {
        foodGatherers -= incrementLevel;
        availableCitizens += incrementLevel;
    }
    document.getElementById("foodGathers").innerHTML = foodGatherers;
}


//Wood functions
function addWoodGatherer(incrementLevel)
{
    if(availableCitizens >= incrementLevel)
    {
        woodGatherers += incrementLevel;
        availableCitizens -= incrementLevel;
    }
    document.getElementById("woodGatherers").innerHTML = woodGatherers;
}
function subWoodGatherer(incrementLevel)
{
    if(woodGatherers >= incrementLevel)
    {
        woodGatherers -= incrementLevel;
        availableCitizens += incrementLevel;
    }
    document.getElementById("woodGatherers").innerHTML = woodGatherers;
}


//king functions
function assignKingFood()
{
    if(kingOfFood == false && kingOfWood == false)
    {
        foodGatherers++;
        foodMultiplier += kingMultplier;
        kingOfFood = true;
        document.getElementById("foodGathers").innerHTML = foodGatherers;
    }
}

function assignKingWood()
{
    if(kingOfWood == false && kingOfFood == false)
    {
        woodGatherers++;
        woodMultiplier += kingMultplier;
        kingOfWood = true;
        document.getElementById("woodGatherers").innerHTML = woodGatherers;
    }
}

function unassignKing()
{
    if(kingOfFood == true)
    {
        foodGatherers--;
        foodMultiplier -= kingMultplier;
        kingOfFood = false
    }
    if(kingOfWood == true)
    {
        woodGatherers--;
        woodMultiplier -= kingMultplier;
        kingOfWood = false
    }
}



window.onload = function () {
    setInterval(gatherResources, 1000);
}

function gatherResources()
{
    gatherFood();
    gatherWood();
}

function gatherFood(){
    food += foodGatherers * foodMultiplier;
    document.getElementById("food").innerHTML = food;
}
function gatherWood(){
    wood += woodGatherers * woodMultiplier;
    document.getElementById("wood").innerHTML = wood;
}