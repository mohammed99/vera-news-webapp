import { NextRequest, NextResponse } from "next/server";
import mysql from 'mysql2/promise';



export async function GET(){
    // create a new MySQL connection
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'webappuser',
      password: 'webappuser123',
      database: 'VeraTest',
    });

    try {
      const query = 'SELECT DATE(Publish_time) AS dayDate, COUNT(ArticleID) AS NumberOfNews, Source FROM Articles GROUP BY dayDate, Source ORDER BY dayDate;';
      const values = []; 
      const [data] = await connection.execute(query, values);
      connection.end(); 
      console.log("connection ended");
      return NextResponse.json({status: 200, data:{data}})
    } catch(error) {
      connection.end(); 
      console.log("connection ended because of error: ", error);
      return NextResponse.json({status:500, statusText:'An error occured'})
    }
    
    
    
}