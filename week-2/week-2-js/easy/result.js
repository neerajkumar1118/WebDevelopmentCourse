const { calculateTotalSpentByCategory } = require('./expenditure-analysis');  // Destructure the imported object

console.log('Type of imported function:', typeof calculateTotalSpentByCategory);

const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    // ... rest of your transactions array
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);