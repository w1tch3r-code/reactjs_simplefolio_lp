import ArticleItem from "./ArticleItem";

const ArticleList = () => {
	return (
		<section className="section__projects">
            <h2>PROJECTS</h2>
			<div>
                <ArticleItem title={"Project1"} />
                <ArticleItem title={"Project2"} />
                <ArticleItem title={"Project3"} />
            </div>
		</section>
	);
};

export default ArticleList;
