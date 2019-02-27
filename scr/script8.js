function longestConsec(strarr, k) {
  
      let saveIndex=[]; 
      let startIndex;
      let endIndex;

      let lengthForward;
      let lengthBack;

     if(k>strarr.length || k<=0 || strarr.length===0){
       return "";
     }   
      

     let lengthStarr = strarr.length; 

     let stringsLargos =  strarr.map((elem, index)=>{
             
              console.log(elem.length);

              return elem.length;

      }).sort(function(a,b){return a - b;});

      console.log(stringsLargos);
    

      maxLength =  stringsLargos[stringsLargos.length-1]
    

      strarr.filter((elem, index) => {
            
              if(elem.length===maxLength) {
                console.log("Max Index");
                console.log(index);
                 console.log(elem);
                saveIndex.push(index);
                return elem
              }
      })

        let cut1 = strarr.splice(saveIndex[0], lengthStarr);
        console.log(cut1); 


        
        if(strarr[saveIndex[0]+1]!==undefined){
          lengthForward = strarr[saveIndex[0]+1].length;
        }


        if(strarr[saveIndex[0]-1]!==undefined){
          lengthBack = strarr[saveIndex[0]-1].length;
        }

        console.log(lengthBack);
        console.log(lengthForward);



         if(strarr[(saveIndex[0]) + (k-1)]!==undefined && (lengthForward>lengthBack)) {
             
              console.log("Go Fowrward");

              startIndex = saveIndex[0];
              endIndex = saveIndex[0]+(k-1);

              if(k==1) {
                endIndex = 1;
              }              

          } else {

             console.log("Go back");
             startIndex = saveIndex[0]-(k-1);
             endIndex = saveIndex[0]+1;
           
         }

        

        console.log(startIndex);
        console.log(endIndex);

      //  console.log(strarr.splice(startIndex, endIndex));

      return strarr.splice(startIndex, endIndex);

}



stringArray = ["wxzjrmyb","ddxrewxhksn","pjegvyvold","ircwudfwyzxs","uphzsgmbqpnsvmv","kmdtosgnjd","ryjxrakxgicipl","cqurioh","ollnyrfnob","qmcugxkovnbmf","djnscjulvaom","kdjjgibgclbby","pysvlupyodu","lrtqpduhbon","vkyiebgx","tvbhnqplrk","whoxllgwpo","kydgaotxsu","iirzvqopbzt","fnyfxcfl","wwjhfnkaqpi","ssqrhepgqsq","rmofinzzik","lsdlqci","bfwagskyjup","ktrgbusk","rkltkbjuyilb","vmbtdao","wfscinx","paaormjpj","bdzzrjcqgs","asjdmqgsgv","bcanxhzxrvcrq","mvdhihoglws","pauknximogoneq","vaqiltdbwcmx","dkjems","viearaw","iqtmlnlrjl","uwbhhcppwsdr","rtrawikgk","ipawhjbibhnjnen","munhaznd","attwazxobvtxsgi","jtrosjezvvtc","gbdckks","wtukdecv","xmjjglelpw","aptuxehld","bmhklbszuzxcr","zawzmapffqmx","gznfykkmf","brtvwevi","atplebcbxy","wqzbyrlv","ajdemvat","cggpkozk","wogxuvt","lobaahfbfo","vvfavykiynen","azlftlaqrjq","mqqzhdwuvvkt","vpzqskmrtgob","gmwgqncbqf","exwwwbcy","smhscydrbbwv","vrrljbymxnsurw","tpgkzmvvv","cfrcdshvybhyfh","nyblzfvi","cdwuyrvlbqmjyg","eijflenhckc","jnrxabte","sttsabdzwp","eplxmprop","dyealvfndxskd","tjyzjfpl","qbrxedwmd","rhsqkqrdkrwztjw","tksbgtgcrv","qhhmxmyjjqnwtet","fgjncnsjczwbiydn","kznknktpsgy","prmnvljgoc","fyrkrfnvlbbfl","iuedmezc","nrijtjdlkf","lybhixtmvzsp","muhzskofk","ksoqlcvyvhcm","hfowqmzitbppqnnr","iiudkcde","kyvicsoyjfure","ibghpnfxonwtqsl","yxxvfqoeltkk","fphsliyagub","dlvfzwru","iinnvtgenfl","fhkdemddppy","qfbsmnhqqata","dsyoiso","ufrxdyseevj","raisgoy","nwxmessmyl","sqhgrfhco","lpffrretyaohd","yoggfaxj","kvztsocdgixs","rrfxtwyydzkcukb","eouakfastk","vcnibuxzwyys","aqbijdvtjh","hlwuivyocel","qunyfo","vrftrfqbbsi","wxeehlmjnyntn","dudipibbeui","dyfynv","fkzpirdrw","ijbbndjwbuan","abwlchzt","ssypqzp","ipluqsmskoumidjsmg","rwbtbwyx","bpuektlh","sinkwovtbodkdk","krgifwdkp","vstmtndexvfd","ovfpyltafo","stspmrcsaw","uryuueno","dtsunffisnd","pbuyutaxbzzia","hzipgxwnt","nnjzcywd","rjonvjhnjloyqbl","vqrblzau","tyblmvjlizh","ecqrguyi","cuquozlsbc","umczppci","oxkqkeag","vehcvy","xwapmcc","vysbymtrhsggklxl","xwlzsjpfvrqzu","nxhbzbrnp","mipugxzlqzhy","lejpyldse","hhpancpmiccvp","zwmambrhaolj","rbcfwogwyme","scihanbhriuxu","hiekjarz","yomhdglq","odzbdwrypvb","dwpslluqns","rdwcpl","qawyzvksqo","eulnjaqd","yxprurahvgv","csnolqplyyozq","ywvawronxetbdpdo","sjmueyhntb","ynebqpmny","xegexnmlsjpinww","xlzqenew","fltnqixuhxmj","ifovdik","frjnxavjrmu","cuvjditiu","qhiecbhgruaflx","keptnimnloeswwi","xwgospfsjs","clqzeegbpt","oqpcfdk","zkbnxipdf","lpgslrns","upqwruziw","ejbgbhem","vwryjjptcpij","lgtydzxhomyztl"];

console.log(longestConsec(stringArray, 34))
// lobaahfbfovvfavykiynenazlftlaqrjqmqqzhdwuvvktvpzqskmrtgobgmwgqncbqfexwwwbcysmhscydrbbwvvrrljbymxnsurwtpgkzmvvvcfrcdshvybhyfhnyblzfvicdwuyrvlbqmjygeijflenhckcjnrxabtesttsabdzwpeplxmpropdyealvfndxskdtjyzjfplqbrxedwmdrhsqkqrdkrwztjwtksbgtgcrvqhhmxmyjjqnwtetfgjncnsjczwbiydnkznknktpsgyprmnvljgocfyrkrfnvlbbfliuedmezcnrijtjdlkflybhixtmvzspmuhzskofkksoqlcvyvhcmhfowqmzitbppqnnriiudkcdekyvicsoyjfureibghpnfxonwtqslyxxvfqoeltkkfphsliyagubdlvfzwruiinnvtgenflfhkdemddppyqfbsmnhqqatadsyoisoufrxdyseevjraisgoynwxmessmylsqhgrfhcolpffrretyaohdyoggfaxjkvztsocdgixsrrfxtwyydzkcukbeouakfastkvcnibuxzwyysaqbijdvtjhhlwuivyocelqunyfovrftrfqbbsiwxeehlmjnyntndudipibbeuidyfynvfkzpirdrwijbbndjwbuanabwlchztssypqzpipluqsmskoumidjsmgrwbtbwyxbpuektlhsinkwovtbodkdkkrgifwdkpvstmtndexvfdovfpyltafostspmrcsawuryuuenodtsunffisndpbuyutaxbzziahzipgxwntnnjzcywdrjonvjhnjloyqblvqrblzautyblmvjlizhecqrguyicuquozlsbcumczppcioxkqkeagvehcvyxwapmccvysbymtrhsggklxlxwlzsjpfvrqzunxhbzbrnpmipugxzlqzhylejpyldsehhpancpmiccvpzwmambrhaoljrbcfwogwymescihanbhriuxuhiekjarzyomhdglqodzbdwrypvbdwpslluqnsrdwcplqawyzvksqoeulnjaqdyxprurahvgvcsnolqplyyozqywvawronxetbdpdosjmueyhntbynebqpmnyxegexnmlsjpinwwxlzqenewfltnqixuhxmjifovdikfrjnxavjrmucuvjditiuqhiecbhgruaflxkeptnimnloeswwixwgospfsjsclqzeegbptoqpcfdkzkbnxipdf















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