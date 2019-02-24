function isValidIP(str) {
  
  
      let ip=str.split('.');
    

     let regNumebrs = new RegExp('^[0-9]+$');
     let regPositive = new RegExp('^[0-9]+$');
     let regWhiteSpace = new RegExp('[ \t]');
     let regN = new RegExp('[ \n]');

  
     let ipLenght = ip.length;

     if(ipLenght<=3 || ipLenght>4){

      return false;
     }


     for (let i=0; i<ipLenght; i++) {

        const number=parseInt(ip[i]);
            
        
        if(regN.exec(ip[i])) {
           return false;
        }

        if(regWhiteSpace.exec(ip[i])) {
           return false;
        }


        if(ip[i].substr(0, 1)==='0' && ip[i].length>1){
          return false
      }
    

        if(ip[i].substr(1, 1)==='e'){
          return false
      }


        if(!regPositive.exec(number)) {
           return false;
        }


          if(!regNumebrs.exec(number)) {
           return false;
        }
      
        if(number>255){
          return false
        };
      
     }


  return true;

}

console.log(isValidIP('1e0.1e1.1e2.2e2'))

console.log(isValidIP('1e0.1e1.1e2.2e2'))

