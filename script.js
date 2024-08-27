var output = [];
let count = 1;

function fizzBuzz(){
  while(count<100){
    if(count % 3 === 0 && count % 5 === 0){
        output.push('fizzbuzz');
    }
       else if(count % 3 === 0){
          output.push('fizz');
        }
       else if(count % 5 === 0){
          output.push('buzz');
        }
      
        else{
            output.push(count)
        }
  

        count++;
     
    }
    console.log(output);
        }
    

// fizzBuzz();

const whosPaying = () =>{
    let players = ['Angela', 'Opisa', 'Ellen', 'Ize'];
    let rNum = Math.floor(Math.random()*players.length);
    console.log(players[rNum]);
}

// whosPaying()

const fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib.push(fib[i-1] + fib[i-2]);
    }
    return fib.slice(0, n);
  }
  
//   console.log(fibonacci(10)); 

function NewEmployee (name, age, department){
    this.name = name;
    this.age =age;
    this.department = department;
}

let employee1 = new NewEmployee("Joy", 25, "English");
let employee2 = new NewEmployee("Rhoda", 35, "Trader");

console.log(employee1);
console.log(employee2);

$(document).keydown((e)=>{
    $("h1").text(e.key)
})