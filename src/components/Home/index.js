import React from 'react';

import articleData from '../../containers/SiteData/articleData';
import ArticleCard from '../../containers/ArticleCard';

export default function Home() {
	return (
		<div>
			{articleData.map((article,i) => (
				<ArticleCard articleContent={article} key={i}/>
			))}
		</div>
	)
}