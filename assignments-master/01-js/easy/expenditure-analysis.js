/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
// My learning
// You can use Object.keys() to get an array of object keys and Object.values() to get an array of object values. Then, you can iterate over the keys and use them to access the corresponding values.
//  The map() method in JavaScript iterates over each element of an array and creates a new array by applying a provided function to each element. It does not mutate the original array; instead, it returns a new array with the results of applying the provided function to each element.
function calculateTotalSpentByCategory(transactions) {
const categoryTotal = {};
for (let i = 0 ; i<transactions.length;i++){
  const currentCatory =transactions[i].category;
  if (!categoryTotal[currentCatory]){
    categoryTotal[currentCatory] = transactions[i].price;
  }else{
    categoryTotal[currentCatory]+= transactions[i].price;
  }
}

  // Create an array of objects with "category" and "totalSpent" properties
const resultArray = Object.keys(categoryTotal).map(category => ({
  category,
  totalSpent: categoryTotal[category],
}));

console.log(resultArray);
return resultArray;
}
// const category = Object.keys(categoryTotal)
// const price = Object.values(categoryTotal)
// const originalTotal = []
// for(let i =0;i<categoryTotal.length,i++;i++){
//   originalTotal = 
// }
// }

module.exports = calculateTotalSpentByCategory;


// expected
// [{"category": "Food", "totalSpent": 30}, {"category": "Clothing", "totalSpent": 40}, {"category": "Electronics", "totalSpent": 30}];

// my code
// {"Clothing": 40, "Electronics": 30, "Food": 30}