
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

// Task 1. 

// The shop owner has asked to remove the items from the inventory 
// that are not healthy. Using filter, remove from the inventory any items that are marked Not Healthy


function removeNonHealthy(element){
    if (element.isHealthy === true){
        return true;
    } 
} 

let onlyHealthyItems = inventory.filter(removeNonHealthy)
console.log(onlyHealthyItems);


// A trolley has been taken to the checkout but the
//customer noticed that some junk food items have mysteriously been added to their trolley. Remove all items that are not healthy.

// compare elements in trolley with onlyHealthyItems. 
// keep everything that matches and remove items that don't
// need to match trolley ID with inventory ID's. 
// can use forEach to got through each inventory item and make a function to check. 



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

let healthyTrolley = trolley.filter(isNotJunk) // .filter will assign all new values to a new variable that match a criteria. 
console.log(healthyTrolley)


// I loop for inventory. count through each item in inventory, and compare with trolley item 1, before moving on to trolley item two and running inventory loop 
//again. 

//trolleyElement can be a parameter of the outlying for loop and used inside the nested loop to compare with. 

// inventory id 1 compare trolley 1
// inventory id 2 compare trolley 1
// inventory id 3 compare trolley 1
// inventory id 4 compare trolley 1
// inventory id 1 compare trolley 2
// inventory id 2 compare trolley 2
// inventory id 3 compare trolley 2
// inventory id 4 compare trolley 2

//If you want to compare one element with all elements in another list. A nested for loop will be required. 
// a variable to sae the results of the nested loop is also needed. 




// Task 2: Incorrect Item In The Bagging Area
// The customer is now at the point they're running through the self checkout. Inside this cart there are several items. Unfortunately, some items in the cart have 
// been recalled and are no longer available. Remove all items from the cart that are marked for recall


// this task is similar to the one just above. 

// compare each item in the cart (healthyTrolley) with the inventory again. 
// if they match, look at healthyItemInv.recalled.
// if this === false, we want to keep the item. 




function filterRecalledItems(trolleyElement){

    let nonRecalled = []; // somewhere to save my results of nested loop
    

    onlyHealthyItems.forEach(function(healthyItemInv){

        //   if (healthyItemInv.recalled === false){ // try the other way around? If not for recall, match ID with trolley items.
        //      if(trolleyElement.id === healthyItemInv){
        //          return healthyItemInv
        //      }
        //   } nonRecalled.push(healthyItemInv) 
        

        if (trolleyElement.id === healthyItemInv.id){ // if the id of trolley element and healthy inventory elements match
            if (healthyItemInv.recalled === false){ // check to see if the recalled key of inventory item is false
                nonRecalled.push(healthyItemInv) // then push this inventory item onto the nonRecalled Array, then return the array.
                console.log(nonRecalled) 
            } 
        }return nonRecalled
        
    }) 
} 


let areNotRecalled = healthyTrolley.filter(filterRecalledItems);
console.log(areNotRecalled);
console.log(nonRecalled)







//STUCK!!! --- seems to select the items i want, but not sure how to push them into my nonRecalled array?! 

//Task 3

// The customer wants a receipt for this shopping cart. Using the shopping basket array and inventory object, create an array of objects that includes name, quantity and total price of product. See the example below for a clearer example

// i couldn't do the recall challange so I will try and write a receipt for the 7 items in the healthyTrolley array. 


// I need to create an array with name, quantity & price of the product
// in my array at the minute I have id & quantity. 
// so again compare trolley to inventory. If match, I need to take, name & price. I already have quantity in current array. 
// so i need to keep the trolley.quantity key and also take the inventory name & price key and put them all together.

// so would I need nested loop again, using for Each. 
// if match, combine key:value pairs from both arrays, to make a new array and store in a new variable.

// ALT. If I did have the array with the recalled items in I could use this... but I will still need to add the quantity key values in somewhere. 





