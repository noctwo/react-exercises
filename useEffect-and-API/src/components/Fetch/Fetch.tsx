import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Articles } from "../Contracts/Articles";

interface SearchProps {
    searchInput: string,
    selectOption: string,
}

    const Fetch: React.FC<SearchProps> = ({searchInput, selectOption}) => {
    
        const [data, setData] = useState<Articles[] | null>(null);
    
        console.log(data);
    
        useEffect(() => {
            fetch(`https://newsapi.org/v2/top-headlines?country=${selectOption}&q=${searchInput}&apiKey=53802ce8aae74fdfb47ee05bb2673acf`)
            .then((response) => response.json())
            .then((response) => setData(response.articles))
            .catch((error) => console.error(error));
        }, []);
    
        return ( 
            
            <section className="news-output-wrapper">
                {data ? (
                    data.map((item, index) => (
                        <div className="article-card" key={index}>
                            <img src={item.urlToImage} ></img>
                            <h3>{item.title}</h3>
                            <p className="description">
                                {item.description}
                            </p>
                        </div>
                    )
                    )
                ):(<Loading />)}
            </section>
        );
    }

export default Fetch
