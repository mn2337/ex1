import React from `react`;


function ArticleCard({articleContent}) {
	return (
		<div>
			<p>{articleContent.title}</p>
			<img src={articleContent.image.url}</>
			<p></p>
			<p><a href={`/article/${articleContent}`}>Read More</a></p>
		</div>
	)
}


export default ArticleCard;