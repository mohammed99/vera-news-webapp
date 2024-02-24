import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CountMostReccurntWord } from "../../../../utils/WordCounters";

export default function ActorsFrequency({ texts }){
    const { actorsFrequencyMap } = CountMostReccurntWord(texts);
    const keys = Object.keys(actorsFrequencyMap); 
    const data = keys.map(key => actorsFrequencyMap[key]); 
   
    return (
        <Bar 
        data = {{
            labels: keys, 
            datasets: [{
                label: 'Political Actors Mentions',
                data: data,
                backgroundColor: '#7d1919', 
            }]
        }}
        />
    )
}
