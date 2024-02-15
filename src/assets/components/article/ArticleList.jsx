import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArticleItem from "./ArticleItem";

const ArticleList = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 576 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 576, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<section className="section__projects">
			<h2>PROJECTS</h2>
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				// autoPlay={this.props.deviceType !== "mobile" ? true : false}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				// deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px">
				<ArticleItem
					title={"Project California Calling"}
					description={
						"Bei dieser responsiven Single-Page-Website handelt es sich um das Abschlussprojekt eines Coding Bootcamps vom HTML- und (S)CSS-Modul."
					}
					skills={"HTML • SCSS"}
					githubUrl={
						"https://github.com/w1tch3r-code/project_california_calling"
					}
					liveUrl={"https://w1tch3r-code.github.io/project_california_calling/"}
				/>
				<ArticleItem
					title={"Project Score Keeper"}
					description={
						"Bei diesem JavaScript-Projekt handelt es sich um einen 'Score-Keeper', der es ermöglicht, den aktuellen Spielstand eines Basketballspiels anzuzeigen und vorab in einem Overlay die Teamnamen einzugeben."
					}
					skills={"HTML • CSS • JavaScript"}
					githubUrl={
						"https://github.com/w1tch3r-code/arrow_functions/tree/main/js_project_score_keeper"
					}
					liveUrl={"https://w1tch3r-code.github.io/arrow_functions/js_project_score_keeper/"}
				/>
				<ArticleItem
					title={"Project Movie DB"}
					description={
						"Bei diesem JavaScript-Projekt handelt es sich um eine Movie-Datenbank, bei der die Filme aus einem Array beim Laden der Seite angezeigt werden. Die Suche nach Filmen und Filtermöglichkeiten wurden programmiert."
					}
					skills={"HTML • CSS • JavaScript"}
					githubUrl={"https://github.com/w1tch3r-code/js_movie_db"}
					liveUrl={"https://w1tch3r-code.github.io/js_movie_db/"}
				/>
				<ArticleItem
					title={"Project Beer API"}
					description={
						"Bei diesem REACT-Projekt handelt es sich um eine Bier-Website in einer Mobile-Ansicht, bei der die Bier-Produkte per API gefetcht werden."
					}
					skills={"JavaScript • React • SCSS"}
					githubUrl={"https://github.com/w1tch3r-code/reactjs_beer_api"}
					liveUrl={"https://reactjs-beer-api-rainer-busch.netlify.app"}
				/>
				<ArticleItem
					title={"Project Movie DB"}
					description={
						"Bei diesem Projekt handelt es sich um die gleiche Movie-Datenbank wie zuvor, nur dieses Mal mit React umgesetzt. Die Filme werden jetzt aus einer JSON-Datei geladen und es gibt weitere Filtermöglichkeiten."
					}
					skills={"JavaScript • React • SCSS"}
					githubUrl={"https://github.com/w1tch3r-code/reactjs_movie_db"}
					liveUrl={"https://reactjs-movie-db-rainer-busch.netlify.app/"}
				/>
			</Carousel>
		</section>
	);
};

export default ArticleList;
