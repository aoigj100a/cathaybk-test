/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or
‘systemAnalytics’.
**/

/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this
array and print it out.
**/

const users = [
  { firstName: "John", lastName: "Doe", customerID: "123" },
  { firstName: "Alice", lastName: "Smith", customerID: "456" },
  { firstName: "Bob", lastName: "", customerID: "789" },
];

function sortUserName(users) {
  return users.sort((a, b) => {
    const keyA = a.firstName + (a.lastName || "") + a.customerID;
    const keyB = b.firstName + (b.lastName || "") + b.customerID;
    return keyA.localeCompare(keyB);
  });
}

/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/

function sortByType(user) {}
