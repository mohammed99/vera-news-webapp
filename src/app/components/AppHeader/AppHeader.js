import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import styles from "./AppHeader.module.css";

function AppHeader({ children }){
    return ( 
        <div className={styles["headerContainer"]}>
           {children}
        </div>
    )
}

export default AppHeader;

