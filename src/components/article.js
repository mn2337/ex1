import React, {useEffect, useState} from "react";

import articleData from "../containers/SiteData/articleData";
import TextBlock from "../containers/TextBlock";

function Article(props) {
	const [article, setArticle] = useState({})
	const routeId = props.match.params.id;
	useEffect(() => {
		for(let i = 0; i < articleData.length; i++) {
			if(articleData[i].id === routeId) {
				setArticle(articleData[i]);
				break;
			} else {
				console.log('nope');
			}
		}
	},[]);

	return (
		<div className="article">
			<div className="art_title">
				<div style={{backgroundImage: `url('${article.image && article.image.url}')`}}>
					<h1>{article.title}</h1>
					<p>{article.publishedDate}</p>
					<h2>{article.blurb}</h2>
				</div>
			</div>
			<div className="article__text">
				{article.articleText && article.articleText.map((text,i) => (
					<TextBlock key={i} type={text.type} data={text.data}/> 
				))}
			</div>
		</div>
	)
}

export default Article;
