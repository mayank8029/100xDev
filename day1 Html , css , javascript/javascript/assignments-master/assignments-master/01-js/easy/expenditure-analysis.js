/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let hash = {} ; 
  transactions.map((temp)=>{
    hash[temp.category]? hash[temp.category]= hash[temp.category]+temp.price : hash[temp.category]= temp.price ; 

  })

  const ans = [] ; 
  // let hash1keys = Object.keys(hash1)
  // let hash2keys = Object.keys(hash2)

  let hashkey = Object.keys(hash) ; 
for(let i = 0 ; i < hashkey.length ; i++){
   const tempp = {
    category:hashkey[i] ,
    totalSpent: hash[hashkey[i]] 
  }
  ans.push(tempp) ; 
}
  return ans ; 
}

module.exports = calculateTotalSpentByCategory;
