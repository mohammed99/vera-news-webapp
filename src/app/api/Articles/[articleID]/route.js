import { NextRequest, NextResponse } from "next/server";
import mysql from 'mysql2/promise';


export async function GET(request, { params }){
   
    const  articleID  = params.articleID;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'webappuser',
        password: 'webappuser123',
        database: 'VeraTest',
      });
  
      try {
        const query = `SELECT Title, Content, Source FROM Articles WHERE ArticleID=${articleID}`;
        const values = []; 
        const [data] = await connection.execute(query, values);
        connection.end(); 
        console.log("connection ended");
        return NextResponse.json({status: 200, data:data[0]})
      } catch(error) {
        connection.end(); 
        console.log("connection ended because of error: ", error);
        return NextResponse.json({status:500, statusText:'An error occured'})
      }

}