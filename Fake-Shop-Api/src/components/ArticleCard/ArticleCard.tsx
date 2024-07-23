import { Link } from "react-router-dom";
import { IProduct } from "../Contracts/IProduct";
import "./ArticleCard.css"

interface IArticlesProps {
    article: IProduct
}

const ArticleCard: React.FC<IArticlesProps> = (props) => {

    return (
        <Link to={`article-details/${props.article.id}`}> 
        <div className="article-card">
            <div className="article-img-container">
            <img src={props.article.image} alt={props.article.title} />
            </div>
            <div className="article-card-infos">
            <h3>{props.article.title}</h3>
            <p>{props.article.price}</p>
            <p>{props.article.rating.count}</p>
            <p>{props.article.rating.rate}</p>
            </div>
        </div>
        </Link>
    );
}

export default ArticleCard;