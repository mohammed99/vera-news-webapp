'use client'; 
import { Button } from "antd/lib";
import NewsList from "./Components/NewsList/NewsList";
import  { ReloadOutlined, FilterOutlined, SortDescendingOutlined } from "@ant-design/icons/lib/icons"; 
import { useContext, useState, useEffect } from "react";
import { newsContext } from "../Context/NewsContext";
import RefreshButton from "../components/RefreshButton/RefreshButton";
import styles from './styles.module.css'; 
import AppHeader from "../components/AppHeader/AppHeader";


function HomePage(){
    const [data, setData] = useState([]);
    const [ refreshToggle, setRefreshToggle ] = useState(false); 

    useEffect(() => {
        fetch('http://localhost:3000/api/recentNews', {cache:'no-store'})
        .then(response => response.json())
        .then(result => {
            setData(result.data); 
            console.log("Fetched successfully from home!!", result.data);
        })

    }, [refreshToggle]);
    
    return(
        <div style={{padding:'20px'}}>
        <AppHeader>
            <h4 className={styles['controlsText']}>Today's Articles: {data.length}</h4>
           
            <span>
                <span>
                    <h4 className={styles['controlsText']}>Reload</h4>
                    <RefreshButton refreshToggle={refreshToggle} setRefreshToggle={setRefreshToggle} />
                </span>
            </span>
        </AppHeader>
        <NewsList source={data}/>
        </div>
        
    )
}

export default HomePage;

/*

*/