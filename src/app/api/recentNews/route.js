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
      const query = "SELECT * FROM Articles ORDER BY Publish_time DESC"; 
      const values = []; 
      const [results] = await connection.execute(query, values);
      connection.end(); 
      console.log("connection ended");
      return NextResponse.json({status: 200, data:results})

    } catch(error) {
      connection.end(); 
      console.log("connection ended because of error: ", error);
      return NextResponse.json({status:500, statusText:'An error occured'})
    }
    
    
    
}