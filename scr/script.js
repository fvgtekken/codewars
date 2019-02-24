function findOutlier(value){
  
	let numbers={pair:[], odd:[]};
	let typeNumber;

 	 value.map((elem)=>{
 	 	
 	 			typeNumber = elem/2;
 	 			
 	 			if(!Number.isInteger(typeNumber)){
 	 					numbers.odd.push(elem);
 	 				} else {
 	 					numbers.pair.push(elem);
 	 			};	
 	 		

 	 });
  
 	// console.log(numbers.odd.length);
 	// console.log(numbers.pair.length);

  return	(numbers.pair.length===1?numbers.pair[0]:numbers.odd[0]);

}


console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))