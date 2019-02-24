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


function isIsogram(str){

	
	let compareStr = str.split('').map(letter=>

	 	 letter.toLowerCase()

	 )

	strLength = compareStr.length;

	for (let i = 0; i<strLength; i++) {
		
	
			for (let i2 = 0; i2<strLength; i2++) {

				if(compareStr[i]===compareStr[i2] && i!==i2){

					return false;
				};

			}
	}

  return true;

}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));


/*Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
Test.assertSimilar( isIsogram("isogram"), true );
Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
Test.assertSimilar( isIsogram("isIsogram"), false );
Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );*/



//Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");