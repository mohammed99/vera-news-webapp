'use client'; 

import { Button } from "antd/lib";
import { ReloadOutlined } from "@ant-design/icons";

export default function RefreshButton({refreshToggle, setRefreshToggle}){
    
    const onClick = () => setRefreshToggle((refreshToggle) => !refreshToggle);
    return (
        <Button onClick={onClick} icon={<ReloadOutlined/>}/>
    )

}