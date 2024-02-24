'use client';
import { Menu } from "antd/lib";
import { SettingOutlined, SearchOutlined, LineChartOutlined, InfoCircleOutlined, ReadOutlined } from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css"; 

const items = [ {
                 key:'/', 
                 icon: <ReadOutlined style={{fontSize:'25px', color:'white'}}/>,  
                 label: <span className={styles["SiderItem"]}>News</span>,                
                }, 
                {
                 key:'/Analytics', 
                 icon: <LineChartOutlined style={{fontSize:'25px', color:'white'}}/>, 
                 label: <span className={styles["SiderItem"]}>Analytics</span>
                },
                {
                 key:'/SearchDataBase', 
                 icon:<SearchOutlined style={{fontSize:'25px', color:'white'}}/>, 
                 label: <span className={styles["SiderItem"]}>Search the Database</span>
                },
                {
                 key:'/Settings', 
                 icon: <SettingOutlined style={{fontSize:'25px', color:'white'}}/>, 
                 label:<span className={styles["SiderItem"]}>Settings</span>
                }, 
                {
                 key:'/AboutVera', 
                 icon: <InfoCircleOutlined style={{fontSize:'25px', color:'white'}}/>, 
                 label:<span className={styles["SiderItem"]}>About Vera</span>
                } ];

function AppSider(){
    const router = useRouter(); 
    const onClick = (item) => {
        router.push(item.key);
    }
            
    return (
      <div className={styles["AppSider"]}>
       <Sider>
            <div className={styles['websiteTitle']}>
                <h1 >Vera</h1>
            </div>      
            
            <Menu
            className={styles["SiderMenu"]}
            items={items}
            onClick={onClick}
            />       
         
        </Sider>
       </div>
       
    )
}

export default AppSider;