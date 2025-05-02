function greet(name,callback)
{
  setTimeout(() => {
    console.log(`Hello, ${name}`);
    callback(name);
  }, 1000);
}

const x=(arguments)=>{
  console.log("This is a callback function");
  console.log(arguments);
}

greet("Rahul",x);