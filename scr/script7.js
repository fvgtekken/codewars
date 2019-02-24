function spinWords(strings) {

  if(strings===''){
    return strings;
  }

  let prov=[];
  let stringT=[];
  let composeString=[];
  let spacesIndex=[];

  stringT.push(...strings);
  stringT.filter((elem, index)=>{
       elem===' '?spacesIndex.push(index):null;
  })


  composeString  =  strings.split(' ').map(( word, index ) => {
          
          if(word.length>=5){
            
              prov=[];
              prov.push(...word);

              return prov.reverse().join('');
          }  

          return word;
           
    }).join('');

    
   stringT=[...composeString];
   
   spacesIndex.forEach((elem, index)=>{
      stringT.splice(elem, 0, " ");
   });



   return stringT.reduce((prev, next)=>prev+next);
  // console.log(finalString);
}



/*Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and 
spaces. Spaces will be included only when more than one word is present.*/


//Examples:

spinWords("You are almost to the last test");
spinWords("Hey Yanque");
spinWords();

/*spiWords( "Hey fellow warriors" ) n=> returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"*/