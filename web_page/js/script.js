window.Search = () => { 
    
    var url = document.getElementById('text1').value;     
    const cheerio = require('cheerio');    

     fetch(url)
        .then(function(response) {
        switch(response.status){
            case 200:
                return response.text();
            case 404:
                throw response; 
        }
        }).then(function(template) { 
            const $ = cheerio.load(template);
            var metin2 = $.text();
            var bol = /([A-Z])\w+/gi;
            var metin = metin2.match(bol); 
            var itemCount ={};
            metin.forEach(function (x) { itemCount[x] = (itemCount[x] || 0) + 1; });

            console.log(metin);
            var key = new Array();
            var count = new Array();
            var i=0,m=0;
    
	        for (var i in itemCount) 
            {
		        key[m] = i;
                count[m] = itemCount[i];
                m++;
	        }
            console.log("LEN: ",key.length);
            for (i=0; i<key.length; i++)
            {
                console.log("ANA URL KEY : ",key[i]," COUNT: ",count[i])
                document.getElementById("text2").innerHTML += key[i]+ "      " + count[i]+" \n ";
            }
        });
}

window.FindKeywords = () => {
    
    var url = document.getElementById('text3').value;
    const cheerio = require('cheerio');    

     fetch(url)
        .then(function(response) {
        switch(response.status){
            case 200:
                return response.text();
            case 404:
                throw response; 
        }
        }).then(function(template) { 
        const $ = cheerio.load(template);
        var metin2 = $.text();
        var bol = /([A-Z])\w+/gi;
        var metin = metin2.match(bol); 
        var itemCount ={};
        metin.forEach(function (x) { itemCount[x] = (itemCount[x] || 0) + 1; });

        var key = new Array();
        var count = new Array();
        var i=0,j=0,m=0;
    
	    for (var i in itemCount) 
        {
		    key[m] = i;
            count[m] = itemCount[i];
            m++;
	    }
        var metin1 = ["the","when","while","as","after","before","until","by the time","this","on","or","in","i","with","like","your","get","anymore",
                    "once","now that","since","during","if","unless","unless","providing","so long as","at","is","you","this","so","how","kind","few",
                    "on condition that","supposing","even if","only if","if only","if only","and","to","it","more","do","that","up","more","is","in","at",
                    "a","an","of","for","I","like","can","will","img","ago","website","site","we","can"];

        for (i=0; i<key.length; i++)
        {
            for(j=0; j<metin1.length; j++)
            {
                if(key[i] === metin1[j])
                {               
                    count[i] = 0;               
                }
            }
            
            if(key[i].length <= 3)
            {
                count[i] = 0;
            } 
        }
        for (i=0; i<count.length; i++)
        {
            for(j=0; j<count.length-1; j++)
            {
                if(count[j] > count[j+1])
                {
                    var tempc = count[j];
                    var tempk = key[j];

                    count[j] = count[j+1];
                    key[j] = key[j+1];
                    
                    count[j+1] = tempc;
                    key[j+1] = tempk;                    
                }
            }   
        }
        for (i=key.length-1; i>key.length-11; i--)
        {
            console.log("ANA URL KEY : ",key[i]," COUNT: ",count[i])
            document.getElementById("text4").innerHTML += key[i] + "      " + count[i] + " \n ";
        }
    }); 
}

window.FindSimilarity = () => {
    
    var url = document.getElementById('text5').value;
    var url1 = document.getElementById('text6').value;
    const cheerio = require('cheerio'); 

    var metin1 = ["the","when","while","as","after","before","until","by the time","this","on","or","in","i","with","like","your","get","anymore","the","why",
                "once","now that","since","during","if","unless","unless","providing","so long as","at","is","you","this","so","how","kind","few",
                "on condition that","supposing","even if","only if","if only","if only","and","to","it","more","do","that","up","more","is","in","at",
                "a","an","of","for","I","like","can","will","img","ago","website","site","we","can"];
    var counts = 0;
    var counts2 =0;

     fetch(url)
        .then(function(response) {
        switch(response.status){
            case 200:
                return response.text();
            case 404:
                throw response; 
        }
        }).then(function(template) { 
            const $ = cheerio.load(template);
            var metin2 = $.text();
            var bol = /([A-Z])\w+/gi;

            var metin = metin2.match(bol); 
            var itemCount ={};
            metin.forEach(function (x) { itemCount[x] = (itemCount[x] || 0) + 1; });

            var key = new Array();
            var count = new Array();
            var find = new Array();

            var z=0,i=0,j=0,m=0;
            var counts3=0;
    
	        for (var i in itemCount) 
            {
		        key[m] = i;
                count[m] = itemCount[i];                
                counts3 += count[m];
                m++;
	        }           

            for (i=0; i<key.length; i++)
            {
                for(j=0; j<metin1.length; j++)
                {
                    if(key[i] === metin1[j])
                    {               
                        count[i] = 0;               
                    }
                }            
                if(key[i].length <=3)
                {
                    count[i] = 0;
                } 
            }
            for (i=0; i<count.length; i++)
            {
                for(j=0; j<count.length-1; j++)
                {
                    if(count[j] > count[j+1])
                    {
                        var tempc = count[j];
                        var tempk = key[j];

                        count[j] = count[j+1];
                        key[j] = key[j+1];
                    
                        count[j+1] = tempc;
                        key[j+1] = tempk;                    
                    }
                }   
            } 
            for (i=key.length-1; i>key.length-11; i--)
            {
                console.log("ANA URL KEY : ",key[i]," COUNT: ",count[i])
                find[z]=key[i];
                counts2 += count[i];
                z++;
                document.getElementById("text9").innerHTML += key[i]+" "+ count[i]+" \n";
            }
        
            fetch(url1)
                .then(function(response) {
                    switch(response.status){                
                        case 200:
                            return response.text();                
                        case 404:
                            throw response; 
                    }
                }).then(function(template) {
                    const $1 = cheerio.load(template);
        
                    var metin2 = $1.text();
                    var bol = /([A-Z])\w+/gi;

                    var metin = metin2.match(bol); 
                    var itemCount1 ={};
                    metin.forEach(function (x) { itemCount1[x] = (itemCount1[x] || 0) + 1; });

                    var key1 = new Array();
                    var count1 = new Array();
                    m=0;
                    var counts4 = 0;
    
	                for (var i in itemCount1) 
                    {
		                key1[m] = i;
                        count1[m] = itemCount1[i];
                        counts4 += count1[m];
                        m++;
	                }
                    for (i=0; i<key1.length; i++)
                    {
                        for(j=0; j<metin1.length; j++)
                        {
                            if(key1[i] === metin1[j])
                            {
                                count1[i] = 0;
                            }
                        }
            
                        if(key1[i].length <=3 )
                        {
                            count1[i] = 0;
                        } 
                    }
                    
                    for (i=0; i<find.length; i++)
                    { 
                        for (j=0; j< key1.length; j++)
                        {
                            if(find[i] === key1[j])
                            {                    
                                console.log("tutulan-key :  " + key1[j] + "    tutulan count : " + count1[j] );
                                document.getElementById("text7").innerHTML += key1[j] + "  " + count1[j]+" \n ";
                                counts += count1[j];
                            }
                        }
                    }
                    var frequency = (100*((100*counts)/counts4))/((100*counts2)/counts3);
                    document.getElementById("text8").innerHTML = frequency; 
                });        
        });  
}

var url_keys1 = new Array();
var url_counts1 = new Array();

var url_keys2 = new Array();
var url_counts2 = new Array();

var url_ad = new Array();
var url_keys = new Array();
var url_counts = new Array();

var url_metin = new Array();
var ana_url_metin_count =0 ;
var ana_url_key_count = 0 ;


var url1;
var f=0;
var linkler1 = new Array();
var linkler2 = new Array();
var linkler4 = new Array();
var linkler5 = new Array();

window.Indexing = () =>{
  
    var url = document.getElementById('text10').value;
    const cheerio = require('cheerio');    

     fetch(url)
        .then(function(response) {
        switch(response.status){
            case 200:
                return response.text();
            case 404:
                throw response; 
        }
        }).then(function(template) { 
            const $ = cheerio.load(template);
            var metin2 = $.text();
            var bol = /([A-Z])\w+/gi;

            var metin = metin2.match(bol); 
            var itemCount ={};
            metin.forEach(function (x) { itemCount[x] = (itemCount[x] || 0) + 1; });

            var key = new Array();
            var count = new Array();
            var find = new Array();
            var linkler = new Array();
            var linkler1 = new Array();
            var linkler2 = new Array();
            var linkler3 = new Array();
            var tutulan_key = new Array();
            var tutulan_count = new Array();
            var tutulan_key1 = new Array();
            var tutulan_count1 = new Array();
            var tutulan_key2 = new Array();
            var tutulan_count2 = new Array();
            var son_key = new Array();
            var son_count = new Array();
            var counts3 = 0;
            var counts4 = 0;
            var counts5 = 0;


            var z=0,counts=0,counts2=0,m=0,t=0,k=0,s=0,l=0,i=0,j=0,x=0,g=0,index=0,w=0,n=0,q=0;
    
	        for (var i in itemCount) 
            {
		        key[m] = i;
                count[m] = itemCount[i];
                ana_url_metin_count = ana_url_metin_count + count[m];               
                m++;
	        }
            
            var metin1 = ["the","when","while","as","after","before","until","by the time","this","on","or","in","i","with","like","your","get","anymore",
                        "once","now that","since","during","if","unless","unless","providing","so long as","at","is","you","this","so","how","kind","few",
                        "on condition that","supposing","even if","only if","if only","if only","and","to","it","more","do","that","up","more","is","in","at",
                        "a","an","of","for","I","like","can","will","img","ago","website","site","we","can"];

            for (i=0; i<key.length; i++)
            {
                for(j=0; j<metin1.length; j++)
                {
                    if(key[i] === metin1[j])
                    {               
                        count[i] = 0;               
                    }
                }
            
                if(key[i].length <= 3)
                {
                    count[i] = 0;
                } 
            }   

            for (i=0; i<count.length; i++)
            {
                for(j=0; j<count.length-1; j++)
                {
                    if(count[j] > count[j+1])
                    {
                        var tempc = count[j];
                        var tempk = key[j];

                        count[j] = count[j+1];
                        key[j] = key[j+1];
                    
                        count[j+1] = tempc;
                        key[j+1] = tempk;                    
                    }
                }   
            } 

            for (i=key.length-1; i>key.length-11; i--)
            {
                console.log("ANA URL KEY : ",key[i]," COUNT: ",count[i])
                find[z]=key[i];
                document.getElementById("text25").innerHTML +=find[z]+ "\n"; 
                ana_url_key_count += count[i];
                z++;
                counts += count[i];

            }

            var url1 = document.getElementById('text11').value;     
            url1 = url1.split("\n");    
            var result1 = new Array();
            var result = new Array();
            var result2 = new Array();
        
            for(i=0; i<url1.length; i++)
            {
                var url = url1[i];                
                console.log("-fetch--------------- ",url);
                var p2 =  fetch(url).then(response => response.text())
                result2.push(p2);                              
            }

            Promise.all(result2).then(function (results2){
                               
                for(l=0; l<result2.length; l++)
                {           
                    const $1 = cheerio.load(results2[l]);
                    var metin2 = $1.text();
                    var bol = /([A-Z])\w+/gi;
                    var key1 = new Array();
                    var count1 = new Array();

                    var metin3 = metin2.match(bol); 
                    var itemCount1 ={};
                    metin3.forEach(function (y) { itemCount1[y] = (itemCount1[y] || 0) + 1; });
                    m=0;

                    for (var i in itemCount1) 
                    {
		                key1[m] = i;
                        count1[m] = itemCount1[i]; 
                        counts3 += count1[m];               
                        m++;
	                }

                    url_metin[f] = counts3;
                    counts3 = 0;
                    f++;
                    
                    for (i=0; i<z; i++)
                    { 
                        for (j=0; j< key1.length; j++)
                        {
                            if(find[i] === key1[j])
                            {                        
                                tutulan_key[t]= key1[j];
                                tutulan_count[t] = count1[j];
                                console.log("tutulan-key :  " + tutulan_key[t] + "    tutulan count : " + tutulan_count[t]);
                                t++;
                            }
                        }
                    }
                    tutulan_key[t]  = "1";
                    tutulan_count[t] = "-1";
                    t++;
                    s=0; 
                    $1('a').each((i, link) => {
                        if($1(link).attr('href'))
                        {
                            if($1(link).attr('href').match(/^[Hh]ttp/gm) != null)
                            {
                                if(s < 5)
                                {
                                    linkler1[s] = $1(link).attr('href'); 
                                    console.log(linkler1[s]);
                                    linkler5[w] = linkler1[s];
                                    s++;
                                    w++;
                                }
                            }             
                        }
                    })        
                    for(i=0; i<linkler1.length; i++)
                    {
                        var url = linkler1[i];
                        console.log("-fetch--------------- ",url);
                        var p =  fetch(url).then(response => response.text())
                        result.push(p)               
                    }                                             
                }                    
                url_ad.push(url1);
                url_keys.push(tutulan_key);
                url_counts.push(tutulan_count);                         

                console.log("--------------- ",url_ad);
                console.log("--------------- ",url_keys);
                console.log("--------------- ",url_counts);
            
                return result;
            }).then(function(result) {
                var url_index2 =0; 
                  
                Promise.all(result).then(function(results){
                    for(k=0; k<result.length; k++)
                    {
                        const $2 = cheerio.load(results[k]);
                        var metin2 = $2.text(); 
                        var bol = /([A-Z])\w+/gi;
                        var key3 = new Array();
                        var count3 = new Array();

                        var metin5 = metin2.match(bol); 
                        var itemCount3 ={};
                        metin5.forEach(function (y) { itemCount3[y] = (itemCount3[y] || 0) + 1; });
                        m=0;
                        
                        for (var i in itemCount3) 
                        {
		                    key3[m] = i;
                            count3[m] = itemCount3[i];
                            counts4 += count3[m];
                            m++;
	                    }

                        url_metin[f] = counts4;
                        counts4 = 0;
                        f++;                       
                        
                        console.log(linkler5[url_index2]);                        
                        document.getElementById("text12").innerHTML += linkler5[url_index2]+  "\n";
                        url_index2 ++;
                        for (i=0; i<z; i++)
                        { 
                            for (j=0; j< key3.length; j++)
                            {
                                if(find[i] === key3[j])
                                {                        
                                    tutulan_key2[n]= key3[j];
                                    tutulan_count2[n] = count3[j];
                                    console.log("tutulan keyyy :  " + tutulan_key2[n] + "    tutulan counttttt : " + tutulan_count2[n]);
                                    document.getElementById("text12").innerHTML += tutulan_key2[n]+ "   " + tutulan_count2[n]+ "\n";
                                    n++;
                                }
                            }
                        } 
                        tutulan_key2[n] = "1";
                        tutulan_count2[n] = "-1";
                        n++;

                        g=0;                        
                        $2('a').each((i, link) => {
                            if($2(link).attr('href'))
                            {                                
                                if($2(link).attr('href').match(/^[Hh]ttp/gm) != null)
                                {
                                    if(g < 5)
                                    {
                                        linkler3[g] = $2(link).attr('href');
                                        linkler2[x] = linkler3[g];
                                        linkler4[q] = linkler2[x];                                       
                                        g++;
                                        q++;
                                        x++;                                    
                                    }
                                } 
                            }
                        })          

                        for(i=0; i<linkler2.length; i++)
                        {
                            var url1 = linkler2[i];
                            console.log("--------fetch--------------- ",url1);
                            var p2 =  fetch(url1).then(response => response.text())
                            result1.push(p2);
                        }
                        x=0;
                    }

                    url_keys1.push(tutulan_key2);
                    url_counts1.push(tutulan_count2);                         

                    console.log("--------------- ",url_keys1);
                    console.log("--------------- ",url_counts1); 

                    return result1;    
                }).then(function(result1){
                    var url_index =0;               

                    Promise.all(result1).then(function(results1) {
                        for(index=0; index<result1.length; index++)
                        {           
                            const $3 = cheerio.load(results1[index]);
                            var metin2 = $3.text(); 
                            var bol = /([A-Z])\w+/gi;
                            var key2 = new Array();
                            var count2 = new Array();

                            var metin5 = metin2.match(bol); 
                            var itemCount2 ={};
                            metin5.forEach(function (y) { itemCount2[y] = (itemCount2[y] || 0) + 1; });
                            m=0;
                        
                            for (var i in itemCount2) 
                            {
		                        key2[m] = i;
                                count2[m] = itemCount2[i];
                                counts5 += count2[m];
                                m++;
	                        }

                            url_metin[f] = counts5;
                            counts5 = 0;
                            f++;

                            console.log(linkler4[url_index]);
                            document.getElementById("text13").innerHTML += linkler4[url_index]+ "  " + "\n"; 
                            url_index++; 
                        
                            for (i=0; i<find.length; i++)
                            {
                                for (j=0; j< key2.length; j++)
                                {
                                    if(find[i] === key2[j])
                                    {
                                        tutulan_key1[k] = key2[j];
                                        tutulan_count1[k] = count2[j];
                                        console.log("EN SON KEY: ",tutulan_key1[k],"COUNT :",tutulan_count1[k]);
                                        document.getElementById("text13").innerHTML += tutulan_key1[k]+ "   " +tutulan_count1[k]+ "\n";
                                        k++;                                               
                                    }
                                }
                            }
                            tutulan_key1[k] = "1";
                            tutulan_count1[k] = "-1";
                            k++;
                        }
                    
                        url_keys2.push(tutulan_key1);
                        url_counts2.push(tutulan_count1);                         

                        console.log("--------------- ",url_keys2);
                        console.log("--------------- ",url_counts2); 
                        
                    }).then(function(){

                        url_keys = url_keys.toString();
                        url_keys = url_keys.split("1");
                        url_counts = url_counts.toString();
                        url_counts = url_counts.split("-1");

                        url_keys1 = url_keys1.toString();
                        url_keys1 = url_keys1.split("1");
                        url_counts1 = url_counts1.toString();
                        url_counts1 = url_counts1.split("-1");

                        url_keys2 = url_keys2.toString();
                        url_keys2 = url_keys2.split("1");
                        url_counts2 = url_counts2.toString();
                        url_counts2 = url_counts2.split("-1");
                        var count = 0;
                        var toplam = 0;
                        son_key1 = new Array();
                        son_count1= new Array();
                        son_count2= new Array();
                        frequency = new Array();

                        for(i=0; i<url_keys.length-1; i++)
                        {
                       
                            son_key = new Array();
                            son_count= new Array();
                            
                            son_key1 = new Array();
                            son_count1= new Array();
                            count = 0;                     

                            son_key.push(url_keys[i]);
                            son_count.push(url_counts[i]);
                            
                            son_key1.push(url_keys[i]);
                            son_count1.push(url_counts[i]);

                            son_key1 = son_key1.toString();
                            son_key1 = son_key1.split(",");
                            son_count1 = son_count1.toString();
                            son_count1 = son_count1.split(",");
                            son_key1 = son_key1.filter(Boolean);
                            son_count1 = son_count1.filter(Boolean);
                
                            for(s=0; s<son_key1.length; s++)
                            {
                                var c1 = parseInt(son_count1[s]);
                                console.log("C: ", c1);
                                count += c1; 
                            }

                            for(j=(i*5); j<((i+1)*5); j++)
                            {
                                son_key.push(url_keys1[j]);
                                son_count.push(url_counts1[j]);
       
                            }
                            for(k=(i*25); k<((i+1)*25); k++)
                            {
                                son_key.push(url_keys2[k]);
                                son_count.push(url_counts2[k]);
                            }

                            son_key = son_key.toString();
                            son_key = son_key.split(",");
                            son_count = son_count.toString();
                            son_count = son_count.split(",");
                            son_key = son_key.filter(Boolean);
                            son_count = son_count.filter(Boolean); 

                            for(t=0; t<son_key.length; t++)
                            {
                                if(son_key[t]  != "\0")
                                {
                                    for(x = t+1; x<son_key.length; x++)
                                    {                                    
                                        if(son_key[t] === son_key[x] && son_key[x] != "\0")
                                        {                            
                                            var c2 = parseInt(son_count[x]);
                                            count += c2; 
                                            son_key[x] = "\0";                                     
                                        }
                                    }
                                }                          
                            } 
                            for(z=0; z<url1.length; z++)
                            {
                                toplam += url_metin[z];

                                for(n=(z*5); n<((z+1)*5); n++)
                                {
                                    toplam += url_metin[n];
                                }

                                for(m=(z*25); m<((z+1)*25); m++)
                                {
                                    toplam += url_metin[m];
                                }
                                son_count2.push(toplam);
                                console.log(son_count2);
                                toplam = 0 ;                                
                            }                          
                            console.log("SON KEY : ",son_key);
                            console.log("SON COUNT : ",count);
                            console.log("ANAKEY: ",ana_url_key_count);
                            console.log("ANAMET: ",ana_url_metin_count);
                            var freq =(100*((100*count)/son_count2[i]))/((100 * ana_url_key_count)/ana_url_metin_count);                            
                            console.log("FREQ : ",freq);
                            frequency.push(freq);
                        } 
                         
                        for (i=0; i<frequency.length; i++)
                        {
                            for(j=0; j<frequency.length-1; j++)
                            {
                                if(frequency[j] > frequency[j+1])
                                {
                                    var tempc = frequency[j];
                                    var tempk = url1[j];

                                    frequency[j] = frequency[j+1];
                                    url1[j] = url1[j+1];
                    
                                    frequency[j+1] = tempc;
                                    url1[j+1] = tempk;                    
                                }
                            }   
                        }
                        for(i=url1.length-1; i >= 0; i--)
                        {
                            document.getElementById("text14").innerHTML +=  url1[i] + "\n";
                            document.getElementById("text21").innerHTML +=  frequency[i] + "\n";
                        }
                        console.log(frequency);
                        console.log(url1);

                    });           

            });
        });         
                 
   });
}
var url_keys15 = new Array();
var url_counts15 = new Array();

var url_keys25 = new Array();
var url_counts25 = new Array();

var url_ad5 = new Array();
var url_keys5 = new Array();
var url_counts5 = new Array();

var url_metin5 = new Array();
var ana_url_metin_count1 =0 ;
var ana_url_key_count1 = 0 ;


var url11;
var ff=0;
var linkler15 = new Array();
var linkler25 = new Array();
var linkler45 = new Array();
var linkler55 = new Array();

window.Analysis  = () =>{
    
    var url = document.getElementById('text15').value;
    const cheerio = require('cheerio');    

     fetch(url)
        .then(function(response) {
        switch(response.status){
            case 200:
                return response.text();
            case 404:
                throw response; 
        }
        }).then(function(template) { 
            const $ = cheerio.load(template);
            var metin2 = $.text();
            var bol = /([A-Z])\w+/gi;

            var metin = metin2.match(bol); 
            var itemCount ={};
            metin.forEach(function (x) { itemCount[x] = (itemCount[x] || 0) + 1; });

            var key = new Array();
            var count = new Array();
            var find = new Array();
            var linkler = new Array();
            var linkler1 = new Array();
            var linkler2 = new Array();
            var linkler3 = new Array();
            var tutulan_key = new Array();
            var tutulan_count = new Array();
            var tutulan_key1 = new Array();
            var tutulan_count1 = new Array();
            var tutulan_key2 = new Array();
            var tutulan_count2 = new Array();
            var son_key = new Array();
            var son_count = new Array();
            var counts3 = 0;
            var counts4 = 0;
            var counts5 = 0;

            var z=0,counts=0,m=0,t=0,k=0,s=0,l=0,i=0,j=0,x=0,g=0,index=0,w=0,n=0,q=0;
    
	        for (var i in itemCount) 
            {
		        key[m] = i;
                count[m] = itemCount[i];
                ana_url_metin_count1 += count[m];
                m++;
	        }
            var metin1 = ["the","when","while","as","after","before","until","by the time","this","on","or","in","i","with","like","your","get","anymore",
                        "once","now that","since","during","if","unless","unless","providing","so long as","at","is","you","this","so","how","kind","few",
                        "on condition that","supposing","even if","only if","if only","if only","and","to","it","more","do","that","up","more","is","in","at",
                        "a","an","of","for","I","like","can","will","img","ago","website","site","we","can"];

            for (i=0; i<key.length; i++)
            {
                for(j=0; j<metin1.length; j++)
                {
                    if(key[i] === metin1[j])
                    {               
                        count[i] = 0;               
                    }
                }
            
                if(key[i].length <= 3)
                {
                    count[i] = 0;
                } 
            }   

            for (i=0; i<count.length; i++)
            {
                for(j=0; j<count.length-1; j++)
                {
                    if(count[j] > count[j+1])
                    {
                        var tempc = count[j];
                        var tempk = key[j];

                        count[j] = count[j+1];
                        key[j] = key[j+1];
                    
                        count[j+1] = tempc;
                        key[j+1] = tempk;                    
                    }
                }   
            } 

            for (i=key.length-1; i>key.length-11; i--)
            {
                console.log("ANA URL KEY : ",key[i]," COUNT: ",count[i])
                
                find[z]=key[i];
                document.getElementById("text24").innerHTML += find[z] + "\n";  
                ana_url_key_count1 += count[i];
                z++;
                counts += count[i];                
            }

            var uzunluk = find.length;
            kelime1 = new Array();
            kelime2 = new Array();
            kelime3 = new Array();   
                
            fetch('synonyms.txt')
            .then(function(response){
                return response.text();

            }).then(function(text){
             
                kelime2 = text.split("\n");
           
                for (z=0;z<kelime2.length;z++)
                {
                    kelime1[z] = new Array();
                    kelime1[z] = kelime2[z];              
                }

                for(l=0;l<kelime1.length;l++)
                {              
                    kelime3 = kelime1[l].split(',');
            
                    for(j=0; j<uzunluk;j++)
                    {                      
                        if(find[j] === kelime3[0])
                        {
                            for(g=1;g<kelime3.length;g++)
                            {
                                find.push(kelime3[g]);
                                document.getElementById("text22").innerHTML += find[j] +" "+ kelime3[g] + "\n";                          
                            }
                            
                        }
                    }
                    kelime3.pop();
                }
                for (i=0; i<find.length; i++)
                {
                    document.getElementById("text23").innerHTML += find[i] + "\n";  
                }
                
                for (i=0; i<key.length; i++)
                {
                    for(j=10; j<find.length;j++)
                    {
                        if(find[j] === key[i])
                        {
                            ana_url_key_count1 += count[i];
                            console.log("KEYYYYY: ",find[j],"COUNTTT ",count[i]);
                        }
                    }
                }
            });
            
            var url11 = document.getElementById('text16').value;     
            url11 = url11.split("\n");    
            var result1 = new Array();
            var result = new Array();
            var result2 = new Array();
        
            for(i=0; i<url11.length; i++)
            {
                var url = url11[i];                
                console.log("-fetch--------------- ",url);
                var p2 =  fetch(url).then(response => response.text())
                result2.push(p2);                              
            }

            Promise.all(result2).then(function (results2){
                               
                for(l=0; l<result2.length; l++)
                {           
                    const $1 = cheerio.load(results2[l]);
                    var metin2 = $1.text();
                    var bol = /([A-Z])\w+/gi;
                    var key1 = new Array();
                    var count1 = new Array();

                    var metin3 = metin2.match(bol); 
                    var itemCount1 ={};
                    metin3.forEach(function (y) { itemCount1[y] = (itemCount1[y] || 0) + 1; });
                    m=0;

                    for (var i in itemCount1) 
                    {
		                key1[m] = i;
                        count1[m] = itemCount1[i]; 
                        counts3  += count1[m];             
                        m++;
	                }
                    
                    url_metin5[ff] = counts3;
                    counts3 = 0;
                    ff++;

                    for (i=0; i<z; i++)
                    { 
                        for (j=0; j< key1.length; j++)
                        {
                            if(find[i] === key1[j])
                            {                        
                                tutulan_key[t]= key1[j];
                                tutulan_count[t] = count1[j];
                                console.log("tutulan-key :  " + tutulan_key[t] + "    tutulan count : " + tutulan_count[t]);
                                t++;
                            }
                        }
                    }
                    tutulan_key[t]  = "1";
                    tutulan_count[t] = "-1";
                    t++;
                    s=0; 
                    $1('a').each((i, link) => {
                        if($1(link).attr('href'))
                        {
                            if($1(link).attr('href').match(/^[Hh]ttp/gm) != null)
                            {
                                if(s < 5)
                                {
                                    linkler15[s] = $1(link).attr('href'); 
                                    console.log(linkler15[s]);
                                    linkler55[w] = linkler15[s];
                                    s++;
                                    w++;
                                }
                            }             
                        }
                    })        
                    for(i=0; i<linkler15.length; i++)
                    {
                        var url = linkler15[i];
                        console.log("-fetch--------------- ",url);
                        var p =  fetch(url).then(response => response.text())
                        result.push(p)               
                    }                                             
                }                    
                url_ad5.push(url11);
                url_keys5.push(tutulan_key);
                url_counts5.push(tutulan_count);                         

                console.log("--------------- ",url_ad5);
                console.log("--------------- ",url_keys5);
                console.log("--------------- ",url_counts5);
            
                return result;
            }).then(function(result) {
                var url_index2 =0; 
                  
                Promise.all(result).then(function(results){
                    for(k=0; k<result.length; k++)
                    {
                        const $2 = cheerio.load(results[k]);
                        var metin2 = $2.text(); 
                        var bol = /([A-Z])\w+/gi;
                        var key3 = new Array();
                        var count3 = new Array();

                        var metin5 = metin2.match(bol); 
                        var itemCount3 ={};
                        metin5.forEach(function (y) { itemCount3[y] = (itemCount3[y] || 0) + 1; });
                        m=0;
                        
                        for (var i in itemCount3) 
                        {
		                    key3[m] = i;
                            count3[m] = itemCount3[i];
                            counts4  += count3[m]; 
                            m++;
	                    }

                        url_metin5[ff] = counts4;
                        counts4 = 0;
                        ff++;                       
                        
                        console.log(linkler55[url_index2]);                        
                        document.getElementById("text19").innerHTML += linkler55[url_index2]+  "\n";
                        url_index2 ++;
                        for (i=0; i<z; i++)
                        { 
                            for (j=0; j< key3.length; j++)
                            {
                                if(find[i] === key3[j])
                                {                        
                                    tutulan_key2[n]= key3[j];
                                    tutulan_count2[n] = count3[j];
                                    console.log("tutulan keyyy :  " + tutulan_key2[n] + "    tutulan counttttt : " + tutulan_count2[n]);
                                    document.getElementById("text19").innerHTML += tutulan_key2[n]+ "   " + tutulan_count2[n]+ "\n";
                                    n++;
                                }
                            }
                        } 
                        tutulan_key2[n] = "1";
                        tutulan_count2[n] = "-1";
                        n++;

                        g=0;                        
                        $2('a').each((i, link) => {
                            if($2(link).attr('href'))
                            {                                
                                if($2(link).attr('href').match(/^[Hh]ttp/gm) != null)
                                {
                                    if(g < 5)
                                    {
                                        linkler3[g] = $2(link).attr('href');
                                        linkler25[x] = linkler3[g];
                                        linkler45[q] = linkler25[x];   
                                        g++;
                                        q++;
                                        x++;                                    
                                    }
                                } 
                            }
                        })          

                        for(i=0; i<linkler25.length; i++)
                        {
                            var url1 = linkler25[i];
                            console.log("--------fetch--------------- ",url1);
                            var p2 =  fetch(url1).then(response => response.text())
                            result1.push(p2);
                        }
                        x=0;
                    }

                    url_keys15.push(tutulan_key2);
                    url_counts15.push(tutulan_count2);                         

                    console.log("--------------- ",url_keys15);
                    console.log("--------------- ",url_counts15); 

                    return result1;    
                }).then(function(result1){
                    var url_index =0;               

                    Promise.all(result1).then(function(results1) {
                        for(index=0; index<result1.length; index++)
                        {           
                            
                            const $3 = cheerio.load(results1[index]);
                            var metin2 = $3.text(); 
                            var bol = /([A-Z])\w+/gi;
                            var key2 = new Array();
                            var count2 = new Array();

                            var metin5 = metin2.match(bol); 
                            var itemCount2 ={};
                            metin5.forEach(function (y) { itemCount2[y] = (itemCount2[y] || 0) + 1; });
                            m=0;
                        
                            for (var i in itemCount2) 
                            {
		                        key2[m] = i;
                                count2[m] = itemCount2[i];
                                counts5 += count2[m];
                                m++;
	                        }
   
                            url_metin5[ff] = counts5;
                            counts5 = 0;
                            ff++;

                            console.log(linkler45[url_index]);
                            document.getElementById("text18").innerHTML += linkler45[url_index]+ "  " + "\n"; 
                            url_index++; 
                        
                            for (i=0; i<find.length; i++)
                            {
                                for (j=0; j< key2.length; j++)
                                {
                                    if(find[i] === key2[j])
                                    {
                                        tutulan_key1[k] = key2[j];
                                        tutulan_count1[k] = count2[j];
                                        console.log("EN SON KEY: ",tutulan_key1[k],"COUNT :",tutulan_count1[k]);
                                        document.getElementById("text18").innerHTML += tutulan_key1[k]+ "   " +tutulan_count1[k]+ "\n";
                                        k++;                                               
                                    }
                                }
                            }
                            tutulan_key1[k] = "1";
                            tutulan_count1[k] = "-1";
                            k++;
                        }
                    
                        url_keys25.push(tutulan_key1);
                        url_counts25.push(tutulan_count1);                         

                        console.log("--------------- ",url_keys25);
                        console.log("--------------- ",url_counts25); 
                        
                    }).then(function(){

                        url_keys5 = url_keys5.toString();
                        url_keys5 = url_keys5.split("1");
                        url_counts5 = url_counts5.toString();
                        url_counts5 = url_counts5.split("-1");

                        url_keys15 = url_keys15.toString();
                        url_keys15 = url_keys15.split("1");
                        url_counts15 = url_counts15.toString();
                        url_counts15 = url_counts15.split("-1");

                        url_keys25 = url_keys25.toString();
                        url_keys25 = url_keys25.split("1");
                        url_counts25 = url_counts25.toString();
                        url_counts25 = url_counts25.split("-1");
                        var count = 0;
                        var toplam = 0;
                        son_key1 = new Array();
                        son_count1= new Array();
                        son_count2= new Array();
                        frequency = new Array();

                        for(i=0; i<url_keys5.length-1; i++)
                        {
                       
                            son_key = new Array();
                            son_count= new Array();
                            
                            son_key1 = new Array();
                            son_count1= new Array();
                            count = 0;                     

                            son_key.push(url_keys5[i]);
                            son_count.push(url_counts5[i]);
                            
                            son_key1.push(url_keys5[i]);
                            son_count1.push(url_counts5[i]);

                            son_key1 = son_key1.toString();
                            son_key1 = son_key1.split(",");
                            son_count1 = son_count1.toString();
                            son_count1 = son_count1.split(",");
                            son_key1 = son_key1.filter(Boolean);
                            son_count1 = son_count1.filter(Boolean);
                
                            for(s=0; s<son_key1.length; s++)
                            {
                                var c1 = parseInt(son_count1[s]);
                                console.log("C: ", c1);
                                count += c1; 
                            }

                            for(j=(i*5); j<((i+1)*5); j++)
                            {
                                son_key.push(url_keys15[j]);
                                son_count.push(url_counts15[j]);
       
                            }
                            for(k=(i*25); k<((i+1)*25); k++)
                            {
                                son_key.push(url_keys25[k]);
                                son_count.push(url_counts25[k]);
                            }

                            son_key = son_key.toString();
                            son_key = son_key.split(",");
                            son_count = son_count.toString();
                            son_count = son_count.split(",");
                            son_key = son_key.filter(Boolean);
                            son_count = son_count.filter(Boolean); 

                            for(t=0; t<son_key.length; t++)
                            {
                                if(son_key[t]  != "\0")
                                {
                                    for(x = t+1; x<son_key.length; x++)
                                    {                                    
                                        if(son_key[t] === son_key[x] && son_key[x] != "\0")
                                        {                            
                                            var c2 = parseInt(son_count[x]);
                                            count += c2; 
                                            son_key[x] = "\0";                                     
                                        }
                                    }
                                }                          
                            } 
                            for(z=0; z<url11.length; z++)
                            {
                                toplam += url_metin5[z];

                                for(n=(z*5); n<((z+1)*5); n++)
                                {
                                    toplam += url_metin5[n];
                                }

                                for(m=(z*25); m<((z+1)*25); m++)
                                {
                                    toplam += url_metin5[m];
                                }
                                son_count2.push(toplam);
                                console.log(son_count2);
                                toplam = 0;                                
                            }                          
                            console.log("SON KEY : ",son_key);
                            console.log("SON COUNT : ",count);
                            var freq =(100*((100*count)/son_count2[i]))/((100*ana_url_key_count1)/ana_url_metin_count1);
                            console.log("FREQ : ",freq);
                            frequency.push(freq);
                        } 
                         
                        for (i=0; i<frequency.length; i++)
                        {
                            for(j=0; j<frequency.length-1; j++)
                            {
                                if(frequency[j] > frequency[j+1])
                                {
                                    var tempc = frequency[j];
                                    var tempk = url11[j];

                                    frequency[j] = frequency[j+1];
                                    url11[j] = url11[j+1];
                    
                                    frequency[j+1] = tempc;
                                    url11[j+1] = tempk;                    
                                }
                            }   
                        }
                        for(i=url11.length-1; i >= 0; i--)
                        {
                            document.getElementById("text17").innerHTML +=  url11[i] +"\n";
                            document.getElementById("text20").innerHTML +=  frequency[i] +"\n";
                        }
                        console.log(frequency);
                        console.log(url11);
                    });           

            });
        });         
                 
   });
}
   
