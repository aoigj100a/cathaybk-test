# 國泰數銀部測驗-Frontend Interview Questions

## Table of Contents

- [Array Operations in JavaScript](#array-operations-in-javascript)
- [HTML/CSS Structure and Styling](#htmlcss-structure-and-styling)
- [Frontend Fundamentals](#frontend-fundamentals)

## Array Operations in JavaScript

### Q1: Array Sorting Challenge

Given an array where each item has the following format:
```javascript
{
  firstName: 'xxx', 
  lastName: 'xxx', 
  customerID: 'xxx', 
  note: 'xxx', 
  profession: 'xxx'
}
```

Rules:
- lastName and note can be empty
- customerID can only contain numbers
- profession can only be one of: 'student', 'freelancer', 'productOwner', 'engineer', 'systemAnalytics'

#### Part 1: Name Sorting
Sort the array based on ('firstName' + 'lastName' + 'customerID') and print the result.

```javascript
function sortUserName(user) {
  // Implementation
}
```

#### Part 2: Profession Sorting
Sort by profession following this order: systemAnalytics > engineer > productOwner > freelancer > student

```javascript
function sortByType(user) {
  // Implementation
}
```

## HTML/CSS Structure and Styling

### Q2: CSS Selector Challenge

Given this HTML structure:
```html
<div class="container">
  <div class="header">Outdoor Checklist 5/8</div>
  <div class="content">
    <ol class="shop-list">
      <li class="item">Bread</li>
      <li class="item">T-shirt</li>
      <li class="item">Water</li>
      <li class="item">Tent</li>
    </ol>
    <ul class="shop-list">
      <li class="item">Motion sickness pills</li>
      <li class="item">Cold medicine</li>
      <li class="item">Pain relief patches</li>
      <li class="item">Cough syrup</li>
    </ul>
  </div>
  <div class="footer">For reference only</div>
</div>
```

CSS:
```css
.container {
  font-size: 14px;
}
.container .header {
  font-size: 18px;
}
.container .shop-list {
  list-style: none;
  margin-left: -15px;
}
.container .shop-list li.item {
  color: green;
}
.container .shop-list .item {
  color: blue;
}
```

#### Part 1: Selector Issue
Explain why the blue color doesn't work and how to fix it for the first list.

#### Part 2: Alternating Colors
Write CSS to create alternating background colors for list items.

### Q3: Array Unique Values

Write a function to log unique values from this array:
```javascript
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];

function getUniqueNumber(items) {
  // Implementation
}
```

## Frontend Fundamentals

### Q4: HTML Semantic Elements
Explain the difference between `<section>` and `<article>`. Provide usage examples.

### Q5: CSS Box Model
Explain the CSS Box Model and its components.

### Q6: CSS Specificity
Explain CSS specificity rules and your principles for writing CSS stylesheets.

### Q7: Semantic HTML
Introduce semantic HTML elements you know and provide examples of their usage.

### Q8: Responsive Design Structure
Create a mobile-first, SEO-friendly HTML base structure:

```html
<body>
  <!-- Start HTML structure -->
</body>
```

## Project Structure
```
├── Q1-array          // Part 1: Array Operations (2 questions)
├── Q2-HTML-CSS       // Part 2: HTML/CSS & Frontend Basics (7 questions)
│   ├── Q2-1-2       // CSS Selector Challenge
│   ├── Q2-3         // Array Unique Values
│   ├── Q2-4-5-6     // HTML/CSS Fundamentals
│   └── Q2-7         // Semantic HTML & Responsive Design
└── README.md
```