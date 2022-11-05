var index=0;
var apiQ=[]
async function getQuotes(){
    const url = "https://type.fit//api/quotes";
    try{
        const res = await fetch(url);
         apiQ = await res.json();
        document.querySelector("#text").innerHTML = `"${apiQ[0].text}"`;
        document.querySelector("#author-name").innerHTML = `- ${apiQ[0].author}`;
    }
    
    catch(err){
        console.log(err);
    }
}
getQuotes();

async function nextQuote(){
    const url = "https://type.fit//api/quotes";
    try{
        // const res = await fetch(url);
        // var apiQ = await res.json();
        if(apiQ.length==index){
            alert("No More Extra Quotes");
        }else{
            
        
        document.querySelector("#text").innerHTML = `"${apiQ[index+1].text ||""}"`;
        document.querySelector("#author-name").innerHTML = `- ${apiQ[index+1].author ||"No Author"}`;
    index=index+1;
        }
    }

    
    catch(err){
        console.log(err);
    }
}
async function backQuote(){
    const url = "https://type.fit//api/quotes";
    try{
        // const res = await fetch(url);
        // var apiQ = await res.json();
        if(index==0){
            alert("No More Previous Quotes");
        }else{
        document.querySelector("#text").innerHTML = `"${apiQ[index-1].text ||""}"`;
        document.querySelector("#author-name").innerHTML = `- ${apiQ[index-1].author ||"No Author"}`;
    index=index-1;
    }
    }
    
    catch(err){
        console.log(err);
    }
}