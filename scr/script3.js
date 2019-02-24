function toCamelCase(str){
 

		let typeSplit;

        str.indexOf('-')!==-1?typeSplit='-':typeSplit='_';
                     	
 		const str2 = str.split(typeSplit);

		const missword = str2.splice(0, 1);

		str2.forEach((word, index)=>{

			str2[index] = word.charAt(0).toUpperCase() +  word.slice(1);
		   
		});

		str2.splice(0 , 0, missword[0]);
		return (str2.join(''));
	
}


var str = "How can mirrors be real if our eyes aren't real";
String.prototype.toJadenCase = function () {
 
		return str.split(' ').map((word, index)=>{

			 return word.charAt(0).toUpperCase() +  word.slice(1);
		   
		}).join(' ');


};

console.log(str.toJadenCase())



//Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");