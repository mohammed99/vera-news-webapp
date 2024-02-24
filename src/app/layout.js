import './globals.css';
import { Layout, ConfigProvider } from 'antd/lib';
import AppSider from './components/AppSider/AppSider'; 
import { Content } from 'antd/lib/layout/layout';


const theme = {
  "token": {
    "colorPrimary": "#600e0e",
    "colorInfo": "#600e0e",
    "wireframe": false
  }
}

export default async function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body>  
      <ConfigProvider theme={theme}> 
          <Layout>
            <AppSider/>
            <Content>
              {children} 
            </Content>
      </Layout>    
      </ConfigProvider>
      </body>
    </html>
  )
}
