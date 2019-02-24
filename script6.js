function isValidIP(str) {
  
	  console.log(str);
  	  let ip=str.split('.');
  	  console.log(ip);

  	 //let regNumebrs = new RegExp('^[0-9]+$');
  	// let regPositive = new RegExp('^[0-9]+$');
  	 //let regWhiteSpace = new RegExp('[ \t]');
  	 //let regN = new RegExp('[ \n]');

  
  	 let ipLenght = ip.length;

  	 if(ipLenght<=3 || ipLenght>4){

  	 	return false;
  	 }


  	 for (let i=0; i<ipLenght; i++) {

  	 		const number=parseInt(ip[i]);
  	 		console.log(number); 	 	
  	 		
  	 		if(/[ \n]/.exec(ip[i])) {
  	 			 console.log('Hay un /n');
  	 		 	 return false;
  	 		}

  	 		if(/[ \t]/.exec(ip[i])) {
  	 			 console.log('Hay un Espacio en Blanco');
  	 		 	 return false;
  	 		}


  	 		if(ip[i].substr(0, 1)==='0' && ip[i].length>1){
  	 			console.log('es mas de un numero y contiene 0 al principio');
  	 			return false
			}
			

  	 		if(ip[i].substr(1, 1)==='e'){
  	 			return false
			}


  	 		if(!/^[0-9]+$/.exec(number)) {
  	 			console.log('No es Positivo');
  	 		 	 return false;
  	 		}


  	 	    if(!/^[0-9]+$/.exec(number)) {
  	 			    console.log('No es un Numero');
  	 		 	    return false;
  	 		}
  	 	
  	 		if(number>255){
  	 			console.log('Mayor a 255');
  	 			return false
  	 		};
			
  	 }


  return true;

}

console.log(isValidIP('ll.23.45.78'))





/*
Valid Inputs
1.2.3.4
123.45.67.89

Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
*/