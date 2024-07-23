import { useEffect, useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { IProduct } from "../Contracts/IProduct";
import "./ArticleList.css"

const ArticleList = () => {

    const [productData, setProductData] = useState<IProduct[] | null>(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setProductData(data))
        .catch(error => console.error("Failed to fetch data.", error));
    }, [])

    return ( 
        <section className="article-list">
            {productData?.map((item, index) => (
                <ArticleCard article={item} key={index}/>
            ))}
        
        </section>
    );
}

export default ArticleList;