
console.log("hello")

const trolley = [
    {
        id: 'frt1',
        quantity: 4,
    },
    {
        id: 'ml1',
        quantity: 2,
    },
    {
        id: 'ml2',
        quantity: 1,
    },
    {
        id: 'chc1',
        quantity: 1,
    },
    {
        id: 'drk1',
        quantity: 12,
    },
    {
        id: 'drk2',
        quantity: 4,
    },
    {
        id: 'frt2',
        quantity: 10,
    },
    {
        id: 'msc1',
        quantity: 5,
    },
    {
        id: 'ele1',
        quantity: 3,
    },
    {
        id: 'pen1',
        quantity: 4,
    },
];

const inventory = [
    {
        id: 'frt1',
        name: 'Apple',
        isHealthy: true,
        recalled: false,
        price: 1,
    },
    {
        id: 'chc1',
        name: 'Large Chocolate bar',
        isHealthy: false,
        recalled: false,
        price: 3,
    },
    {
        id: 'ml1',
        name: 'Pasta Salad Meal',
        isHealthy: true,
        recalled: false,
        price: 4,
    },
    {
        id: 'frt2',
        name: 'Large Banana',
        isHealthy: true,
        recalled: true,
        price: 2,
    },
    {
        id: 'ml2',
        name: 'Chicken Sandwich Meal',
        isHealthy: true,
        recalled: false,
        price: 3,
    },
    {
        id: 'drk1',
        name: 'Red Bull Energy Drink',
        isHealthy: false,
        recalled: true,
        price: 4,
    },
    {
        id: 'pen1',
        name: 'A Pack Of Pens',
        isHealthy: true,
        recalled: false,
        price: 3,
    },
    {
        id: 'drk2',
        name: 'Orange Juice',
        isHealthy: false,
        recalled: true,
        price: 2,
    },
    {
        id: 'msc1',
        name: 'Pack Of Paper',
        isHealthy: true,
        recalled: false,
        price: 2,
    },
    {
        id: 'drk3',
        name: 'Bottled Water',
        isHealthy: true,
        recalled: true,
        price: 3,
    },
    {
        id: 'ele1',
        name: 'Laptop Computer',
        isHealthy: true,
        recalled: false,
        price: 300,
    },
    {
        id: 'nut1',
        name: 'Pack of Salted Peanuts',
        isHealthy: true,
        recalled: true,
        price: 1,
    },
    {
        id: 'nut2',
        name: 'Pack of Mixed Nuts',
        isHealthy: true,
        recalled: false,
        price: 2,
    },
    {
        id: 'hdc1',
        name: 'Large Latte',
        isHealthy: false,
        recalled: false,
        price: 4,
    },
    {
        id: 'hdc2',
        name: 'Large Skinny Cappucino',
        isHealthy: true,
        recalled: false,
        price: 4,
    }
];

const receipt = [];



function removeNonHealthy(element){
    if (element.isHealthy === true){
        return true;
    } 
} 

let onlyHealthyItems = inventory.filter(removeNonHealthy)  /// only healthy items in inventory
console.log(onlyHealthyItems);



function isNotJunk (trolleyElement) {  //<< trolleyElement = element of trolley, the parameter is necersarray just like with most array methods. 
    
    let healthyOrNot; // declare a variable to 'catch' the healthy items once compared from the nested for loop. Otherwise the selected items have nowhere to go.

//NESTED FOR LOOP WITH FOREACH
onlyHealthyItems.forEach(function(invItem){ // here forEach will count through onlyHealthyItems items (found above). invItem is for each element
        if(trolleyElement.id === invItem.id) {  // comparing each onlyHealthyItems item id with the trolley id. This is a nested for loop. for for Each is I, and filter is J (see below)
           healthyOrNot = true
          
        }
    })
return healthyOrNot

}

let healthyTrolley = trolley.filter(isNotJunk) // Only healthy items in trolley



// now we want to remove any recalled items. 
// if recalled remove from healthyInventory. 
// then compare healthy inventory with healthy trolley. 
// only return values that match

// do two filter methods. 


function nonRecalledItems () {

    let nonRecalled =[]
    console.log(nonRecalled)

    for(let i = 0; i < onlyHealthyItems.length ; i++){
        if (onlyHealthyItems.recalled === false ){
            nonRecalled.push(onlyHealthyItems)
    }
    
    
    } 

}






