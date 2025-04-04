// console.log('expenditure-analysis.js loaded');
// function calculateTotalSpentByCategory(transactions) {
//     const categoryTotalMap = {};
//     transactions.forEach((transaction) => {
//       const { category, price } = transaction;
//       if (category in categoryTotalMap) {
//         categoryTotalMap[category] += price;
//       } else {
//         categoryTotalMap[category] = price;
//       }
//     });
//     const result = [];
//     for (const category in categoryTotalMap) {
//       result.push({ category, totalSpent: categoryTotalMap[category] });
//     }
//     return result;
//   }
  
//   module.exports = calculateTotalSpentByCategory;
function calculateTotalSpentByCategory(transactions) {
    const categoryTotalMap = {};
    transactions.forEach((transaction) => {
        const { category, price } = transaction;
        if (category in categoryTotalMap) {
            categoryTotalMap[category] += price;
        } else {
            categoryTotalMap[category] = price;
        }
    });
    const result = [];
    for (const category in categoryTotalMap) {
        result.push({ category, totalSpent: categoryTotalMap[category] });
    }
    return result;
}

// Add console.log to see what's being exported
console.log('Type of exported function:', typeof calculateTotalSpentByCategory);
module.exports = { calculateTotalSpentByCategory };  // Export as an object