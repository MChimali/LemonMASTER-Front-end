
//Trazas por consola

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = triggers => {
  triggers[0]();
  setTimeout(()=>triggers[1](),100);  
  setTimeout(()=>console.log("first"),300);
};

run(triggers);

//Acceso en profundidad - Apartado A

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  },
  
};

const deepGet = (object, ...arrayArg) =>{
  if(arrayArg.length>1){
    let iterator = [...arrayArg].slice(1,); 
    if(object[arrayArg[0]] instanceof Object){
       return deepGet(object[arrayArg[0]], ...iterator)
    }
  }else return object[arrayArg[0]];
  
};
//console.log(deepGet(myObject, "b", "d", "f"));

//Acceso en profundidad - Apartado B

const deepSet = (element, object, ...references) => {
  if(references.length === 0){
    return object;    
  }
  
  if(references.length>1){
    let counter = 0;
    let newObject = object;
    for(let i = 0; i < references.length - 1; i++){
      if(newObject[references[i]]){
        newObject = newObject[references[i]];
        counter++;       
      }
    }
    if(counter === references.length - 1 && typeof newObject ===  'object' ){
      newObject[references[references.length - 1]] = element;
      return newObject;
    }
    let iterate = references.slice(0,-1);
       
    return deepSet({[references[references.length - 1]]: element}, object, ...iterate)
                   
  }else{
    object[references[0]] = element;
    return object
  }
}
const myObject2 = {};
deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2));  // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2));  // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2));  // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2));  // Do nothing // {a: 3}


//Aplanando arrays - Apartado A & B
const sample = [1, [2,[3]], [[4, 5,], 7]];

type Unflatten<type> = type extends (infer T)[]? Unflatten<T>:type;

const flatten2 = <T extends any[]> (array: T,  newArray = [] ): Unflatten<T>[] =>  {  
  array.forEach(element => Array.isArray(element) ? flatten2(element, newArray) : newArray.push(element) )
  return newArray
}

let test = flatten2(sample);


//Memoization - Apartado A & B

const expensiveFunction  = () => {
  console.log("Una única llamada");
  return 3.1415;
}

function memoize (a, value = 0){
  return function(){
    if(!value){
      return memoize(a, value = a())()
    }else{
      return value
    }
  }
}

const memoize2 = (a:Function, value?) => () => value ?? false? value : (value = a());
  
const memoized = memoize2(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized())
console.log(memoized())
console.log(memoized())
console.log(memoized())
console.log(memoized())

//Memoization - Apartado C

let count = 0;

const repeatText = (repetitions: number, text: string): string => {
  count++
  return`${text} `.repeat(repetitions).trim()
}

const memoizeFunction = function (f) { 
  const map = new Map();
  return function (repetitions, string) {
    if(map.get(string)){      
      if(map.get(string)[repetitions]){
        return map.get(string)[repetitions]
      } else {        
        return (map.get(string)[repetitions] = f(repetitions, string))
      }       
    } else {
      map.set(string,[]);
      map.get(string)[repetitions] = f(repetitions, string)
      return map.get(string)[repetitions]
    }   
  }   
}
//map > PAM   [1, 2, 3, 4, 5...]
//      CHUN  [1, 2, 3, 4, 5...]
const memoizedGreet = memoizeFunction(repeatText);
  
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(2, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));
console.log(memoizedGreet(4, "chun"));
console.log(memoizedGreet(5, "chun"));
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2 

//TREE - TYPESCRIPT

interface TreeInterface<T> {
  nodo: T;
  children?: Array<TreeInterface<T>>;
}

const numbers: TreeInterface<number> = {
  nodo:2,
  children:[
    {nodo:7, children:[
      {nodo:2}, 
      {nodo:6, children:[
        {nodo:5}, {nodo:11}
      ]}
    ]},
    {nodo:5, children:[
      {nodo:9, children:[
        {nodo:4}
      ]}
    ]}
  ]
}