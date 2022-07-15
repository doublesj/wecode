
const even = (num) => {
  
  const arr = [];
  
  for (let num = 1; num < 51; num++){
  if (num%2 === 0) {
	  arr.push(num);
  } 
 }
  return arr;
}
even();