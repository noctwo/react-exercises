import { useEffect, useState } from "react";
import { IProduct } from "../../components/Contracts/IProduct";
import { useParams } from "react-router-dom";
import "./ArticleDetails.css"

const ArticleDetails = () => {

    const [articleDetailData, setArticleDetailData] = useState<IProduct | null>(null);

    const {id} = useParams<{id?: string}>()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setArticleDetailData(data))
        .catch(error => console.error("Failed to fetch data", error))
    }, [id])

    return ( 
        <div className="article-detail-wrapper">
        <div className="article-detail-img-container">
        <img src={articleDetailData?.image} alt={articleDetailData?.title} />
        </div>
        <div className="article-detail-text">
        <h2>{articleDetailData?.title}</h2>
        <p>{articleDetailData?.description}</p>
        <p>{articleDetailData?.price}</p>
        <p>{articleDetailData?.category}</p>
        <p>{articleDetailData?.rating.rate}</p>
        <p>{articleDetailData?.rating.count}</p>
        </div>
        </div>
    );
}

export default ArticleDetails;