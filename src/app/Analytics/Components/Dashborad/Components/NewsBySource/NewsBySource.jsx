import { Bar, getElementAtEvent   } from "react-chartjs-2";
import { useRef } from 'react';
import { useFiltersArray } from "../../../../store/store";
import Chart from 'chart.js/auto';

export default function NewsBySource({ stats }){
   const chartRef = useRef();
   const sourceFilters = useFiltersArray(state => state.sourceFilters); 
   const filterSourceByOne = useFiltersArray(state => state.filterSourceByOne); 
   const emptySourceFilter = useFiltersArray(state => state.emptySourceFilter); 
   
    const onClick = (event) => {
      const element = getElementAtEvent(chartRef.current, event)[0];
      if(element){
        const source = stats[element.index].Source;
        if (sourceFilters[0] === source && sourceFilters.length === 1){
          emptySourceFilter(); 
        }else{
          filterSourceByOne(source); 
        }
    }}

    const colorizeBars = () => {
      if (sourceFilters.length === 0 ) return stats.map(row=> '#7d1919')
      return stats.map(row=> sourceFilters.includes(row.Source)? 
      '#7d1919': '#cfa9a9')
    }
  
    return (
        <>
        <Bar 
          data={{
            labels: stats.map(row => row.Source),
            datasets: [
              {
                label: 'News By Source',
                data: stats.map(row => row.NumberOfNews), 
                backgroundColor: colorizeBars()
                                                        
              }]
          }}
          ref={chartRef}
          onClick={onClick}
        />
       
        </>
    )
}

