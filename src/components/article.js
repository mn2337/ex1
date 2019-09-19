import React, {useEffect, useState} from "react";

import articleData from "../containers/SiteData/articleData";
import TextBlock from "../containers/TextBlock"

function Article(props) {
	const [article, setArticle] = useState({})
	console.log(props);
	
	useEffect(() => {
		const routeId = props.match.params.id;
		for(let i = 0; i < articleData.length; i++) {
			if(articleData[i].id === routeId) {
				setArticle(articleData[i]);
			} else {
				console.log('nope');
			}
		}
	},[]);

	return (
		<div className="article">
			<h1>{article.title}</h1>
			<h2>{article.blurb}</h2>
			<div className="article__text">
				{article.articleText && article.articleText.map((text,i) => (
					<TextBlock key={i} type={"a"} data={text}/> 
				))}
			</div>
		</div>
	)
}

export default Article;
