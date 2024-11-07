function sum(a,b){
    // let firstno=5;
    // let secondno=6;
    // let sum = firstno+secondno;
    let sum=a+b;
    return sum;
}
// console.log(sum(2,5));

function canvote(age){
    if (age>18){
        return true;
    }
    else{
        return false;
    }
}

let sample = canvote(2);
// console.log(sample);




function greet(user){
    let prefix;
    if(user.gender == "male"){
        prefix = "Mr. ";
    }
    if(user.gender == "female"){
        prefix = "Ms.";
    }
    else{
        prefix = "eneter correct gender ";
    }
    console.log("hi "+ prefix + user.name + "your age is " + user.age);
}

let user = {                //its called an object!!
    name: "aashish kumar",
    age: 20,
    gender: "male"
}

// console.log(greet(user));
// console.log(user);



//create an function that take an array of objects as input and
// returns the user whose age>18 and are male 

function checker(arr){
    let arr2=[];
    for (let i =0; i <arr.length; i++ ){
        if(arr[i].gender === "male" && arr[i].age> 18){
            arr2.push(arr[i])
        }
    }
    return arr2;
}

const candidates =[{
    name: "aashish kumar",
    age: 20,
    gender: "male"
}, {
    name: "computer",
    age: 17,
    gender: "neutral"
},{
    name: "aash",
    age: 55,
    gender: "male"
}
]

// console.log(checker(candidates));