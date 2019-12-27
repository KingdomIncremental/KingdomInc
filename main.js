//Initial game vars
var food = 0;
var wood = 0; 
var totalCitizens = 0;
var availableCitizens = 0;

var foodLoss = 0; 

var incrementLevel = 1;


var foodGatherers = 0;
var woodGatherers = 0;

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

window.onload = function () {
    setInterval(gatherResources, 100);
}

function gatherResources()
{
    wood += woodGatherers;
    food += foodGatherers;
}