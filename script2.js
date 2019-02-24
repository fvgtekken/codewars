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




console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"

//toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"