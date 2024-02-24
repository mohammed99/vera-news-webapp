'use client'; 
import { newsContext } from "@/app/Context/NewsContext";
import { Table } from "antd";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { formatDateTime } from "../../utils";

function NewsList({ source }){
  
  const router = useRouter(); 
  const dataSource = source;
  
  const columns = [
      {
        title: 'Publish Time',
        dataIndex: 'Publish_time',
        key: 'published_time',
        sorter: (a, b) => new Date(a.Publish_time) - new Date(b.Publish_time), 
        render: (datetime) => formatDateTime(datetime) 
      },
      {
        title: 'Title',
        dataIndex: 'Title',
        key: 'title',      
    },
      {
        title: 'Source',
        dataIndex: 'Source',
        key: 'source',
        filters: [
          {
            text: 'Radio Dabanga',
            value: 'Radio Dabanga',
          },
          {
            text: 'Jazeera',
            value: 'Jazeera',
          },
          {
            text: 'sudan-tribune',
            value: 'sudan-tribune',
          },
          {
            text: 'SudanSawa',
            value: 'SudanSawa',
          },
        ], 
        onFilter: (value, record) => record.Source === value,
        },
    ];
    
    return(
        <Table dataSource={dataSource}
               columns={columns}
               onRow={ (record) => { 
                return {
                    onClick: (ev) => {
                      router.push(`/Home/${record.ArticleID}`)
                    },      
                 } }      
              }
               />
    )
}


export default NewsList; 


/*render: (record, index) => {
              return(
              <Link href={`/Home/${index.ArticleID}`}><p>{record}</p></Link>
              )
        }, */