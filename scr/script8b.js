function longestConsec(strarr, k) {
  
      let saveIndex=[]; 
      let startIndex;
      let endIndex;

      let lengthForward;
      let lengthBack;

     if(k>strarr.length || k<=0 || strarr.length===0){
       return "";
     }   
      

     let lengthStarr = strarr.length-1; 

     let stringsLargos =  strarr.map((elem, index)=>{
             
             // console.log(elem.length);

              return elem.length;

      }).sort(function(a,b){return a - b;});

     // console.log(stringsLargos);
    

      maxLength =  stringsLargos[stringsLargos.length-1]
    

      strarr.filter((elem, index) => {
            
              if(elem.length===maxLength) {
                console.log("Max Index");
                 //console.log(index);
                 console.log(elem);
                saveIndex.push(index);
                return elem
              }
      })

        let cut1 = strarr.splice(saveIndex[0], lengthStarr);
        console.log(cut1);  
        console.log('---------------------------------------------------------')
        console.log(saveIndex);       


        //console.log(k);
        //console.log(startIndex);
        //console.log(endIndex);

      //  console.log(strarr.splice(startIndex, endIndex));

      return strarr.splice(startIndex, endIndex);

}



stringArray = ["yuwbzw","pxzenjajtmpns","mcicwbdfmemfuk","jofxpnkff","robvbjoxy","jqblhsq","ojrlrzrdou","ewyqbd","gzexygjir","aoivewoswp","nqfvidcrl","eooonjubloel","bemiyajkbf","fkcfzhunawmk","hpdldch","qckpllzssokkwraj","mihscdok","oeoyaczx","zocctnd","kbzgrjgxioqyfycyfe","sjxupqykbtt","oyvvtjsgzrr","dlseqiu","zecnawrbghgpp","mykibsgkp","pocmtlmdofe","etmgwddiyt","bdebknxk","ceusrsoww","jruddbaqdd","pzdyibm","hjkpkzs","aajafvedif","lpzvdmvgo","cyjaywsngira","ebfojzcfhod","cnjczykd","kjobbphkdprvj","hibnaphfxq","xfvkatttax","txdfgreu","wixzbeappznsp","mpamsxzrdcd","oteejtbvxemrwxbo","bsofyknz","boxrli","ncxihaxf","yhysjiwxnlztra","ebfyalqk","jqyfpwjxwvlzy","cpmbwteg","ccfqhupbocx","cgdfeg","porrlnkwkrn","smdetgf","ncdxqeplapdd","kyltcmjhgufoe","eipcyuzsbo","bdzlrtk","fieeolqwcph","ktzkgzyzxfbgxbi","ekpzmln","vejrvyzjjsehio","tuydanpvizi","gozdwlcixm","jytsvrnz","gacbrfphgxhlw","ktzdjzdoenwk","pjqvjb","htlkhjhskkvd","auvkgziqvl","cjhsdjci","xvwlznpqhhhrf","iiruokodbthd","deimzcmkr","sxtzidwabjzem","ppnxpbyfdtsw","dsrmlbof","frianmcguoc","hlwatxrfyfcq","jmaojpazphj","njlgyckhvwlytxwd","njhisdzy","wkamgtqfvwrqlba","uccfinqtya","qtvygqbusnd","wshvekxoulyt","eokvpeg","fskfglt","xrpnqj","znugkcnmid","yiaxmjfu","xtxtvzuhep","tfwkabhcsp","bvadwtfjehii","fqprnkgcaqg","rlogbflfrow","uhgktigiszyu","iasmujntaq","apthqqx","xehkiyoop","xryoywebco","mgbzaxmmeq","vvwnioph","vexizwgxnytx","jhduuxywsuird","abdtsfwfgjvxg","chkwcckyik","nrnsumitxqu","jbgtajnhggymuu","bzxelzjt","renossfvg","xddeaybjyhviu","kfxkxzccej","zqefpw","zinkwxzbu","vdtyfyqtm","gahxuyrrdn","knjrkeirna","ryzfeyxiys","xjjqxohiszh","xgflzje","mkesemci","adyazmstiudtgyv","xsdsejrrbf","qjejultc","otxhgasj","kibyifc","drsvdbkaqb","jdievsgkljp","sptqakty","tscuqlhag","mwcrdsairuv","tngofvcsnd","yacyqszmslrq","aqkcchvuhu","jcixqgbbmicebay","kwhwocshffojeyb","bdrdtmonyupbt","qwbskmhvvpuomh","lemrgimi","vwypvuib"]
//'gzexygjiraoivewoswpnqfvidcrleooonjubloelbemiyajkbffkcfzhunawmkhpdldchqckpllzssokkwrajmihscdokoeoyaczxzocctndkbzgrjgxioqyfycyfesjxupqykbttoyvvtjsgzrrdlseqiuzecnawrbghgppmykibsgkppocmtlmdofeetmgwddiytbdebknxkceusrsowwjruddbaqddpzdyibmhjkpkzsaajafvediflpzvdmvgocyjaywsngiraebfojzcfhodcnjczykdkjobbphkdprvjhibnaphfxqxfvkatttaxtxdfgreuwixzbeappznspmpamsxzrdcdoteejtbvxemrwxbobsofyknzboxrlincxihaxfyhysjiwxnlztraebfyalqkjqyfpwjxwvlzycpmbwtegccfqhupbocxcgdfegporrlnkwkrnsmdetgfncdxqeplapddkyltcmjhgufoeeipcyuzsbobdzlrtkfieeolqwcphktzkgzyzxfbgxbiekpzmlnvejrvyzjjsehiotuydanpvizigozdwlcixmjytsvrnzgacbrfphgxhlwktzdjzdoenwkpjqvjbhtlkhjhskkvdauvkgziqvlcjhsdjcixvwlznpqhhhrfiiruokodbthddeimzcmkrsxtzidwabjzemppnxpbyfdtswdsrmlboffrianmcguochlwatxrfyfcqjmaojpazphjnjlgyckhvwlytxwdnjhisdzywkamgtqfvwrqlbauccfinqtyaqtvygqbusndwshvekxoulyteokvpegfskfgltxrpnqjznugkcnmidyiaxmjfuxtxtvzuheptfwkabhcspbvadwtfjehiifqprnkgcaqgrlogbflfrowuhgktigiszyuiasmujntaqapthqqxxehkiyoopxryoywebcomgbzaxmmeqvvwniophvexizwgxnytxjhduuxywsuirdabdtsfwfgjvxgchkwcckyiknrnsumitxqujbgtajnhggymuubzxelzjtrenossfvgxddeaybjyhviukfxkxzccejzqefpwzinkwxzbuvdtyfyqtmgahxuyrrdnknjrkeirnaryzfeyxiysxjjqxohiszhxgflzjemkesemciadyazmstiudtgyvxsdsejrrbfqjejultcotxhgasjkibyifcdrsvdbkaqbjdievsgkljpsptqaktytscuqlhagmwcrdsairuvtngofvcsndyacyqszmslrqaqkcchvuhujcixqgbbmicebaykwhwocshffojeybbdrdtmonyupbtqwbskmhvvpuomh'
console.log(longestConsec(stringArray, 132))
















//["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"]

/*You are given an array strarr of strings and an integer k. Your task is to return 
the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".*/

// consecutive strings : follow one after another without an interruption

/*
function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

Test.describe("longestConsec",function() {
Test.it("Basic tests",function() { 
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
    testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
    testing(longestConsec([], 3), "")
    testing(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    testing(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
})})*/