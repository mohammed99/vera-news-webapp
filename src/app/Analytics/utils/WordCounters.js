


export function CountMostReccurntWord(textsCol){
    const frequencyMap = {}; 

    const statesFrequencyMap = {
        'الخرطوم': 0,
        'الجزيرة': 0,
        'سنار': 0,
        'الشمالية': 0, 
        'نهر النيل': 0,
        'شمال دارفور': 0,
        'جنوب دارفور': 0,
        'وسط دارفور': 0,
        'شرق دارفور': 0,
        'غرب دارفور': 0,
        'النيل الأزرق': 0,
        'النيل الأبيض': 0,
        'جنوب كردفان': 0,
        'غرب كردفان': 0,
        'شمال كردفان': 0,
        'البحر الأحمر': 0,
        'كسلا': 0,
        'القضارف': 0,
    }

    const actorsFrequencyMap = {
        'الجيش': 0,
        'البرهان': 0, 
        'حميدتي': 0, 
        'الدعم السريع': 0, 
        'الحرية والتغيير': 0, 
        'مصر': 0, 
    }
    const frequencyData = []

    let texts = textsCol[0]; 
    for (let i=1; i<textsCol.length; i++){
        texts = texts.concat(textsCol[i]);
    }
    
    const words = 
        texts.split(" "); 
   
    for (const word of words) {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1; 
     
        if (word in statesFrequencyMap){
            statesFrequencyMap[word] += 1;
        }  
        if (word in actorsFrequencyMap){
            actorsFrequencyMap[word] += 1;
        }  
    } 

    for (const key of Object.keys(frequencyMap)){
        frequencyData.push({word:key, Mentions:frequencyMap[key]})
    }
    return {frequencyData, statesFrequencyMap, actorsFrequencyMap}
}



/*

let texts = textsCol[0]; 
    for (let i=1; i<textsCol.length; i++){
        texts = texts.concat(textsCol[i]);
    }
    const words = 
        texts.split(" "); 
    
    console.log(words);    
    const frequencyMap = {}; 
  
    for (const word of words) { 
        frequencyMap[word] = 
            (frequencyMap[word] || 0) + 1; 
        if (word in statesFrequencyMap){
            statesFrequencyMap[word] += 1;
        }  
    } 
  
    let mostFrequent = ""; 
    let maxFrequency = 0; 
  
    for (const word in frequencyMap)  
    { 
        if (frequencyMap[word] > 
            maxFrequency)  
        { 
            maxFrequency = frequencyMap[word]; 
            mostFrequent = word; 
        } 
    } 
    return statesFrequencyMap; 
*/
