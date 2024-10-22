## Overview
This project is a simple product management system implemented in TypeScript. It demonstrates the use of Object-Oriented Programming (OOP) principles, higher-order functions, asynchronous programming, and data manipulation techniques. The system includes functionality for managing products, calculating discounts, applying taxes, and handling JSON data.

## Techniques Used
1. Object-Oriented Programming (OOP)
Classes: The code defines a Product class and a DiscountedProduct class that inherits from Product. This encapsulates the properties and behaviors of products, such as their name, price, category, and discount handling.
Constructor: The constructor initializes product properties and increments a static counter (productCount) to keep track of the total number of products.
Method Overriding: The DiscountedProduct class overrides the getProductInfo() method to provide additional information about discounts.
2. Higher-Order Functions
Function Creation: The function createPriceMultiplier is defined to return a new function that multiplies a given price by a specified multiplier. This demonstrates the concept of higher-order functions in JavaScript/TypeScript.
Tax Calculation: The applyTax function uses createPriceMultiplier to apply a tax rate of 7%, showcasing how to create reusable function logic.
3. Asynchronous Programming
Promise-Based API Simulation: The fetchProductData function simulates fetching product data from an API using Promise and setTimeout. This represents a common pattern in modern web applications for handling asynchronous data fetching.
Async/Await Syntax: The main function utilizes async/await to handle the asynchronous fetch operation, making the code more readable and manageable.
4. Data Manipulation
Array Methods: The code utilizes array methods like filter, map, and reduce to manipulate collections of products:
filter: To select products above a certain price.
map: To create an array of product names.
reduce: To calculate the total cost of all products.
5. Error Handling
JSON Parsing: The parseProductData function demonstrates error handling during JSON parsing. It checks whether the parsed data is an array and catches potential errors, returning appropriate error messages.

## Problem-Solving Approach

1. Requirements Gathering: Identify the core functionalities needed for a product management system, including product creation, price updates, discounts, and tax calculations.

2. Class Design: Use OOP principles to design classes that represent the main entities (e.g., Product, DiscountedProduct). This promotes code reusability and organization.

3. Function Implementation: Implement utility functions (higher-order functions) for specific tasks like price multiplication and tax application. This modular approach enhances maintainability.

4. Asynchronous Data Handling: Simulate data fetching from an API to mimic real-world scenarios where data is not immediately available. Use Promises and async/await for clarity and structure.

5. Data Operations: Utilize array methods to efficiently manage and analyze collections of products. This allows for concise and expressive data manipulation.

6. Testing and Validation: Validate the system's output through various test cases, including valid and invalid JSON strings, to ensure robustness and reliability.

## Conclusion

This project showcases a blend of fundamental programming techniques, effective data management, and error handling practices in TypeScript. It serves as a foundation for further exploration of more complex systems or enhancements, such as integrating a real database or developing a user interface.
