function solve(n) {

		let number1 =  (n-1)/2;
		let numbers = [];
		numbers = [number1, number1];  


		   if(!Number.isInteger(number1)) {
		   		number1 = Math.floor(number1);
			   	let	number2 = number1+1;
			    numbers = [number1, number2];	   	
		   } 

		 

		  console.log(numbers);
		  console.log(numbers.join('').split(''));
		  
		return (numbers.join('').split('').reduce((anterior, siguiente)=>{

				//console.log(anterior);
		   		return parseInt(anterior) + parseInt(siguiente);

		   })) +1; 


}

console.log(solve(67))


/*Test.assertEquals(solve(18),18);
Test.assertEquals(solve(29),11);
Test.assertEquals(solve(45),18);
Test.assertEquals(solve(1140),33);
Test.assertEquals(solve(7019),35);*/