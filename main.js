function doubleNumbers(arr){
    let newArr = arr.map(i=>i*2);
    return newArr;
}
  
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  
function stringItUp(arr){
    let newArr = arr.map( i => String(i) );
    return newArr;
}
  
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  
function capitalizeNames(arr){
    let newArr = arr.map((i)=>{
        let lowercase = i.toLowerCase();
        let capitalized = lowercase.charAt(0).toUpperCase() +  lowercase.slice(1);;
        return capitalized;
    });

    return newArr;
}
  
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
//   // Output:
//   // ["John", "Jacob", "Jingleheimer", "Schmidt"]

function namesOnly(arr){
    let newArr = arr.map(i=> i.name);
    return newArr;
}
  
console.log(namesOnly([
    {
        name: "Angelina Jolie",
         age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
function makeStrings(arr){
    let newArr= arr.map(i=>{
        if(i.age>=18){
            return i.name + ' can go to The Matrix';
        }else{
            return i.name + ' is under age!!';
        }
    });

    return newArr;
}
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
function readyToPutInTheDOM(arr){
    let newArr = arr.map(i=> '<h1>'+i.name+'</h1><h2>'+i.age+'</h2>');
    return newArr;
}
console.log(readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
        name: "Eric Jones",
      age: 2
    },      
    {
      name: "Paris Hilton",
        age: 5
    },
    {
      name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]