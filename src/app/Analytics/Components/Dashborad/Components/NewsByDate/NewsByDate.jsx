import { Line, getElementAtEvent } from "react-chartjs-2";
import { useRef } from "react";
import { useFiltersArray } from "../../../../store/store";
import Chart from 'chart.js/auto';

export default function NewsByDate({ stats }){
    const dateFilters = useFiltersArray(state => state.dateFilters);
    const emptyDateFilter = useFiltersArray(state => state.emptyDateFilter); 
    const filterDateByOne = useFiltersArray(state => state.filterDateByOne); 
    const ChartRef = useRef(); 

    const onClick = (event) => {
       const element = getElementAtEvent(ChartRef.current, event)[0]; 
       if (element) { 
        const dayDate = stats[element.index].dayDate;
        if (dateFilters[0] === dayDate && dateFilters.length === 1){
           emptyDateFilter(); 
        }else{ 
            filterDateByOne(dayDate); 
       }}
    }
    const colorizeBars = () => {
        if (dateFilters.length === 0 ) return stats.map(row=> '#7d1919')
        return stats.map(row=> dateFilters.includes(row.dayDate)? 
        '#7d1919': '#cfa9a9')
      }
    const sizePoints = () => {
        if (dateFilters.length === 0 ) return stats.map(row=> 1)
        return stats.map(row=> dateFilters.includes(row.dayDate)? 
        7: 1)
    }
    const formatTime = (time) => {
        const dateVar = new Date(time); 
        return String(dateVar.getMonth()+1) + '\\' + String(dateVar.getDate()) 
    }
    
    return (
        <Line
            data = {{
                labels: stats.map(row => formatTime(row.dayDate)),
                datasets: [{
                    label: 'News by Date', 
                    data: stats.map(row => row.NumberOfNews),
                    backgroundColor: colorizeBars(), 
                    borderColor: '#7d1919', 
                    pointBorderWidth: sizePoints(), 
                }]
            }}   
            onClick={onClick}
            ref={ChartRef}
        />
        
    )

}