

export function prepareFilterbySource(dataSet, filters){
    /*
    the articles count will be summed and stored in an object
    first to store the data with unique keys, then it will be 
    converted to an array of objects to match the required 
    data form in antd charts 
    */
    const resultObj = {'Jazeera':0, 'SudanSawa':0, 'Radio Dabanga':0, 'sudan-tribune':0}; 
    const resultArray = []; 
    const filteredSet = (filters.length === 0? 
        dataSet: dataSet.filter(point => filters.includes(point.dayDate)))
    //console.log('filtered ', filteredSet);
    for (const point of filteredSet){
        resultObj[point.Source] += point.NumberOfNews; 
    }
    for (const key in resultObj){
        resultArray.push({Source:key, NumberOfNews:resultObj[key]})
    }
    return resultArray
}

export function prepareFilterbyDate(dataSet, filters){

    /*
    the articles count will be summed and stored in an object
    first to store the data with unique keys, then it will be 
    converted to an array of objects to match the required 
    data form in antd charts 
    */
    
    const resultObj = {}; 
    const resultArray = []; 
    const filteredSet = (filters.length === 0? 
        dataSet: dataSet.filter(point => filters.includes(point.Source)))
    for (const point of filteredSet){
        if (Object.keys(resultObj).includes(point.dayDate)){
            resultObj[point.dayDate] += point.NumberOfNews; 
        }
        else{
            resultObj[point.dayDate] = point.NumberOfNews;
        }
    }
    for (const key in resultObj){
        resultArray.push({dayDate:key, NumberOfNews:resultObj[key]})
    }
    return resultArray; 
}

export function filterTexts(dataSet, sourceFilters, dateFilters){
    let filteredSet = []; 
    if (sourceFilters.length === 0 && dateFilters.length === 0){
         filteredSet = dataSet;     
    }else if ((sourceFilters.length > 0 && dateFilters.length > 0)){
        filteredSet = dataSet.filter(point => 
            ((sourceFilters.includes(point.Source)) && (dateFilters.includes(point.dayDate)))); 
    }
    else{ 
        filteredSet = dataSet.filter(point => 
            ((sourceFilters.includes(point.Source)) || (dateFilters.includes(point.dayDate))));
    }
    const result = filteredSet.map(point => point.Content); 
    console.log("After filtering: ", result.length)
    return result
}