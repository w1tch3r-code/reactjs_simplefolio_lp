import './Article.css';

const ArticleItem = (props) => {
	return <article>
        <h3>{props.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dignissimos tempora ullam dolorem natus ad?</p>
        <div>
            <a href="#">JavaScript</a>
            <a href="#">React</a>
            <a href="#">SASS</a>
            </div>
    </article>;
};

export default ArticleItem;
