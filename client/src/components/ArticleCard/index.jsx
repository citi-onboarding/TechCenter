import { ArticleWrapper } from "./styles"
import articleArrow from "../../assets/articleArrow.svg"

export default function ArticleCard({ guid, thumbnail, title, content }) {



    return (
        <ArticleWrapper key={guid}>
            <img src={thumbnail} className="thumbnail" />
            <h1 className="article-title">{title}</h1>
            <p>{content}</p>
            <a href={guid}  target="_blank" rel="noopener noreferrer">
                <img src={articleArrow} alt="arrow" className="arrow" />
            </a>
        </ArticleWrapper>
    );
}

