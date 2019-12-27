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
    
}

function assignWoodGatherer(incrementLevel)
{
    if(availableCitizens >= incrementLevel)
    {
        woodGatherers += incrementLevel;
        availableCitizens -= incrementLevel;
    }
}

function assignKingFood()
{
    foodGatherers++;
    foodMultiplier += kingMultplier;
    kingOfFood = true;
}

function assignKingWood()
{
    woodGatherers++;
    woodMultiplier += kingMultplier;
    kingOfWood = true;
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
    wood += woodGatherers * woodMultiplier;
    food += foodGatherers * foodMultiplier;
}