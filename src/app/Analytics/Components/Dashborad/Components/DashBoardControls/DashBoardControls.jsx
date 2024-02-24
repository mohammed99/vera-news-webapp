'use client'; 

import { Button, Checkbox, Select } from "antd/lib";
import styles from './styles.module.css';
import AppHeader from "@/app/components/AppHeader/AppHeader";
import { useFiltersArray } from "@/app/Analytics/store/store";

export default function DashBoardControls ({allSources, allTimes}){

    const sourceFilters = useFiltersArray(state => state.sourceFilters); 
    const dateFilters = useFiltersArray(state => state.dateFilters); 
    const addSourceFilter = useFiltersArray(state => state.addSourceFilter);
    const remSourceFilter = useFiltersArray(state => state.remSourceFilter);  
    const addDateFilter = useFiltersArray(state => state.addDateFilter); 
    const remDateFilter = useFiltersArray(state => state.remDateFilter); 
    const emptySourceFilter = useFiltersArray(state => state.emptySourceFilter);  
    const emptyDateFilter = useFiltersArray(state => state.emptyDateFilter); 

    const sourceFiltersList = [
        {
            label: 'Sudan Tribune', 
            value: 'sudan-tribune',
        }, 
        {
            label: 'Jazeera', 
            value: 'Jazeera',
        }, 
        {
            label: 'Radio Dabanga', 
            value: 'Radio Dabanga',
        }, 
        {
            label: 'Sudan Sawa', 
            value: 'SudanSawa',
        }, 
        
    ]

   

    const dataTimeOptions = [
        {
            label: 'Today', 
            value: 'today', 
        }, 
        {
            label: 'Last Week', 
            value: 'lastWeek',
        }, 
        {
            label: 'Last Month', 
            value: 'lastMonth',
        }, 
       
    ]

    const onSourceFiltersClick = (checkedValues) => {
        const filters = sourceFiltersList.map(item => item.value);
        for (const value of filters){
            if(checkedValues.includes(value)){
                sourceFilters.includes(value)? null : addSourceFilter(value);
            }else{
                sourceFilters.includes(value)? remSourceFilter(value) : null;
            }
            }
            

    }

    const onDateFilterClick = () => {

    }
    
    const onRemoveFiltersClick = () => {
        emptySourceFilter(); 
        emptyDateFilter();
         
    }

    return(
        <AppHeader>
        <Select options={dataTimeOptions} defaultValue="today"/>              
        <Checkbox.Group onChange={onSourceFiltersClick} options={sourceFiltersList} value={sourceFilters}/>
        <Button onClick={onRemoveFiltersClick}>Remove Filters</Button>
        </AppHeader>
    )


}