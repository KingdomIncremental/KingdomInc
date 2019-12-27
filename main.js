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


function assignFoodGatherer(incrementLevel)
{
    if(availableCitizens >= incrementLevel)
    {
        foodGatherers += incrementLevel;
        availableCitizens -= incrementLevel;
    }
    
    document.getElementById("foodGathers").innerHTML = foodGatherers;
}

function assignWoodGatherer(incrementLevel)
{
    if(availableCitizens >= incrementLevel)
    {
        woodGatherers += incrementLevel;
        availableCitizens -= incrementLevel;
    }
    document.getElementById("woodGatherers").innerHTML = woodGatherers;
}

function assignKingFood()
{
    if(kingOfFood == false)
    {
        assignFoodGatherer(1);
        foodMultiplier += kingMultplier;
        kingOfFood = true;
    }
}

function assignKingWood()
{
    if(kingOfWood == false)
    {
        assignWoodGatherer(1);
        woodMultiplier += kingMultplier;
        kingOfWood = true;
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
    setInterval(gatherResources, 100);
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
