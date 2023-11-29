/* eslint-disable react/prop-types */
import Forwarding from "../svg/Forwarding";
import Github from "../svg/Github";
import "./Article.css";

const ArticleItem = (props) => {
	return (
		<article>
			<h3>{props.title}</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Laudantium, dignissimos tempora ullam dolorem natus ad?
			</p>
			<div className="skills">
				<a href="#">JavaScript</a>
				<a href="#">React</a>
				<a href="#">SASS</a>
			</div>
			<div className="project__links_wrapper">
				<Github />
				<Forwarding />
			</div>
		</article>
	);
};

export default ArticleItem;
