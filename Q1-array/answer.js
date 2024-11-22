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
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "123",
    profession: "engineer",
    note: "Senior developer",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    customerID: "456",
    profession: "systemAnalytics",
    note: "Lead analyst",
  },
  {
    firstName: "Bob",
    lastName: "",
    customerID: "789",
    profession: "student",
    note: "",
  },
  {
    firstName: "Emma",
    lastName: "Wilson",
    customerID: "321",
    profession: "productOwner",
    note: "Product team",
  },
  {
    firstName: "David",
    lastName: "Chen",
    customerID: "654",
    profession: "freelancer",
    note: "Contract work",
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    customerID: "987",
    profession: "",
    note: "New hire",
  }, // 空的profession
  {
    firstName: "Michael",
    lastName: "Brown",
    customerID: "147",
    profession: "engineer",
    note: "Backend specialist",
  },
  {
    firstName: "Lisa",
    lastName: "",
    customerID: "258",
    profession: null,
    note: "Pending",
  }, // null profession
  {
    firstName: "Tom",
    lastName: "Miller",
    customerID: "369",
    profession: "systemAnalytics",
    note: "Data team",
  },
  {
    firstName: "Jane",
    lastName: "Taylor",
    customerID: "741",
    profession: "student",
    note: "Intern",
  },
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

const professionWeight = {
  systemAnalytics: 5,
  engineer: 4,
  productOwner: 3,
  freelancer: 2,
  student: 1,
  '': 0  // 空值給予最低權重
};

function sortByType(users) {
  return users.sort((a, b) => {
    const weightA = professionWeight[a.profession || '']; // 使用 || 運算符處理undefined或null
    const weightB = professionWeight[b.profession || ''];
    return weightB - weightA;
  });
}
