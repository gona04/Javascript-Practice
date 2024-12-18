const obj = [
  {
    key: "Sample 1",
    data: "data 1",
  },
  {
    key: "Sample 1",
    data: "data 2",
  },
  {
    key: "Sample 1",
    data: "data 3",
  },
];

const groupedObj = {};

obj.forEach((e) => {
  if (!groupedObj[e.key]) {
    groupedObj[e.key] = [];
  }
  groupedObj[e.key].push(e);
});

console.log(groupedObj);
//output
/* const obj = [
   Sample 1: [
    {
      key: "Sample 1",
      data: "data 1",
    },
    {
      key: "Sample 1",
      data: "data 2",
    },
    {
      key: "Sample 1",
      data: "data 3",
    }],
    Sample 2 : []
  ];
 */
