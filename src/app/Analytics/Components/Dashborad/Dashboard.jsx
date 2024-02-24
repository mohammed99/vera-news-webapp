'use client';
import NewsByDate from "./Components/NewsByDate/NewsByDate"; 
import NewsBySource from "./Components/NewsBySource/NewsBySource";
import StatesFrequency from "./Components/StatesFrequency/StatesFrequency";
import ActorsFrequency from "./Components/ActorsFrequency/ActorsFrequency";
import { useState, useEffect } from "react";
import DashBoardControls from "./Components/DashBoardControls/DashBoardControls";
import styles from './styles.module.css';
import { useFiltersArray } from "../../store/store";
import { prepareFilterbyDate, prepareFilterbySource, filterTexts } from "../../utils/Filters";


export default function Dashboard({allStats, allTexts}){
    const [ stats, setStats ] = useState(allStats);  
    const sourceFilters = useFiltersArray(state => state.sourceFilters);
    const dateFilters = useFiltersArray(state => state.dateFilters);
    const statsBySource = prepareFilterbySource(stats, dateFilters); 
    const statsByDate = prepareFilterbyDate(stats, sourceFilters); 
    const [ texts, setTexts ] = useState(filterTexts(allTexts, sourceFilters, dateFilters));
    

    useEffect(() => {
        setTexts(filterTexts(allTexts, sourceFilters, dateFilters)); 
        console.log("text length: ", texts.length)
    }, [sourceFilters, dateFilters])
     
 return (
    <>
    <DashBoardControls/>
    <div className={styles['container']}>
    <div className={styles['chart']}> 
    <NewsBySource stats={statsBySource}/>
    </div>
    <div className={styles['chart']}>
    <NewsByDate stats={statsByDate} />
    </div>
    <div className={styles['chart']}>
    <StatesFrequency texts={texts}/>
    </div>
    <div className={styles['chart']}>
    <ActorsFrequency texts={texts} />
    </div>
   
    <p> Source Filters: {sourceFilters}</p>
    <p> Date Filters: {dateFilters} </p>
    </div>
    </>
       
 )
}