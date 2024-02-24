

export async function getAllStats(){
    const response = await fetch('http://localhost:3000/api/newsStats', {cache:'no-store'});
    const result = await response.json(); 
    return result.data.data; 
  }

export async function getAllTexts(){
    const response = await fetch('http://localhost:3000/api/testCounter', {cache:'no-store'}); 
    const result = await response.json(); 
    const textsObj = result.data;
    return textsObj;
  }
  