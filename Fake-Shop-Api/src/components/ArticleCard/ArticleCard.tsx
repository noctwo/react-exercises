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
            <div className="article-card-numbers">
            <p>{props.article.rating.rate} / 5</p>
            <p className="price">{props.article.price} €</p>
            </div>
            </div>
        </div>
        </Link>
    );
}

export default ArticleCard;