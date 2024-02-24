import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CountMostReccurntWord } from "../../../../utils/WordCounters";

export default function StatesFrequency({ texts }){
    const { statesFrequencyMap } = CountMostReccurntWord(texts);
    const keys = Object.keys(statesFrequencyMap); 
    const data = keys.map(key => statesFrequencyMap[key]); 
    
    return (
        <Bar 
        data = {{
            labels: keys,       
            datasets:[{
                label: 'State mentions',
                data: data,
                backgroundColor: '#7d1919', 
            }]
        }}
        
        />
    )

}