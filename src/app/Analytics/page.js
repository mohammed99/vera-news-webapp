import Dashboard from "./Components/Dashborad/Dashboard";
import { getAllStats, getAllTexts } from "./utils/dataFetchers";



export default async function Analytics(){
  const allStats = await getAllStats(); 
  const allTexts = await getAllTexts(); 
  console.log("from analytics ", allTexts);

    return(
     <Dashboard allStats={allStats} allTexts={allTexts}/>
    )
}

