import React from 'react';


function ArticleCard({articleContent}) {
	return (
		<div className="article_body">
			<p>{articleContent.title}</p>
			<p className="date">{articleContent.publishedDate}</p>
			<img src={articleContent.image.url} alt="img"/>
			<p></p>
			<p><a href={`/article/${articleContent.id}`}>Click to read!</a></p>
		</div>
	)
}


export default ArticleCard;