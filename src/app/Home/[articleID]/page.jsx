import styles from './styles.module.css';
import AppHeader from '@/app/components/AppHeader/AppHeader';

async function getArticle(articleID){
    const response = await fetch(`http://localhost:3000/api/Articles/${articleID}`, {cache:'no-store'});
    const result = await response.json(); 
    return result.data;  

}

export default async function ArticleView({ params }){
    const { articleID } = params;
    const article = await getArticle(articleID); 
    return (
        <>
        <AppHeader/>
        <div className={styles['articleContainer']}>
            <div className={styles['title']}>
            <h1>{article.Title}</h1>
            </div>
            <div className={styles['content']}>
            <p>{article.Content}</p>
            </div>
        </div>
        </>
    )
}