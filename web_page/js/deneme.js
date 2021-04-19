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


            var z=0,counts=0,m=0,t=0,k=0,s=0,l=0,i=0,j=0,x=0,g=0,index=0,w=0,n=0,q=0;
    
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
            console.log("ANA KEYYYYY ", ana_url_key_count);

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
                    for (i=0; i<key1.length; i++)
                    {
                        for(j=0; j<metin1.length; j++)
                        {   
                            if(key1[i] === metin1[j])
                            {
                                count1[i] = 0;
                            }
                        }
            
                        if(key1[i].length <= 3)
                        {
                            count1[i] = 0;
                        }                    
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

                        for (i=0; i<key3.length; i++)
                        {
                            for(j=0; j<metin1.length; j++)
                            {
                                if(key3[i] === metin1[j])
                                {
                                    count3[i] = 0;
                                }
                            }
            
                            if(key3[i].length <= 3 )
                            {
                                count3[i] = 0;
                            }                     
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
                            for (i=0; i<key2.length; i++)
                            {
                                for(j=0; j<metin1.length; j++)
                                {
                                    if(key2[i] === metin1[j])
                                    {
                                        count2[i] = 0;
                                    }
                                }
            
                                if(key2[i].length <= 3)
                                {
                                    count2[i] = 0;
                                }                     
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
                                        document.getElementById("text13").innerHTML += "\n";
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
                            var freq =(100*((100*count)/son_count2[i]))/((100*ana_url_key_count)/ana_url_metin_count);                            
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
                        console.log(frequency);
                        console.log(url1);
                        document.getElementById("text14").innerHTML =  url1;
                        document.getElementById("text21").innerHTML =  frequency;
                    });           

            });
        });         
                 
   });
}