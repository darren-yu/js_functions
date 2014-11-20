//load products.json
var data = require("./products.json")

//define getItemsCount function
//accepts full item data
//returns the length of the items array
// var getItemsCount = function(itemData){
// 	return itemData.items.length;
// };

var getItemsCount = function() {
	return data["items"].length;
};

//output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

//create your answer in this file.
//the above is just provided as a simple example.


// Problem #1

var getItems = function() {
	return data["items"];
};
// console.log(getItems());



// Problem #2

var getItemsByBrand = function(array, itemsBrand) {
	var newArray1 = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i].product.brand === itemsBrand) {
			newArray1.push(array[i]);
		}
	}
	return newArray1;
};
// console.log(getItemsByBrand(getItems(),"Panasonic"));



// Problem #3

var getItemsByAuthor = function(array, itemsAuthor) {
	var newArray2 = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i].product.author.name.split(" ")[0] === itemsAuthor) {
			newArray2.push(array[i]);
		}
	}
	return newArray2;
};
// console.log(getItemsByAuthor(getItems(), "eBay"));



// Problem #4

var getAvailableProducts = function(array) {
	var newArray3 = [];
	for (var i = 0; i < array.length; i++){
		if (array[i].product.inventories[0].availability === "inStock") {
			newArray3.push(array[i]);
		}
	}
	return newArray3;
};
// console.log(getAvailableProducts(getItems()));




// Problem #5


// #5.1
// All items made by Nikon with the author eBay.
console.log(getItemsByBrand((getItemsByAuthor(getItems(), "eBay")),"Nikon"));

var nikonWithSony = getItemsByBrand((getItemsByAuthor(getItems(), "eBay")),"Nikon");


// #5.2
// All items made by Sony.
console.log(getItemsByBrand(getItems(),"Sony"));

var sonyMade = getItemsByBrand(getItems(),"Sony");



// #5.3
// All items made by Sony that are available.
console.log(getAvailableProducts(getItemsByBrand(getItems(),"Sony")));

var sonyMadeAvailable = getAvailableProducts(getItemsByBrand(getItems(),"Sony"));



// If we wanted to add all the arrays to output every single output from above, I used the .concat below.
console.log(nikonWithSony.concat(sonyMade,sonyMadeAvailable));




	










