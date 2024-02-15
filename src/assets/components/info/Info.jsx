/* eslint-disable react/prop-types */
import "./Info.css";
import ButtonItem from "../button/ButtonItem";
import Github from "../svg/Github";
import Linkedin from "../svg/Linkedin";

const Info = () => {
	return (
		<section className="section__info">
			<h1>
				Hi, I am <span>Rainer Busch</span>
			</h1>
			<h2>A Junior Front End Developer.</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
				quibusdam sequi ipsam eligendi, aliquid asperiores ab excepturi
				accusamus dignissimos, tempora recusandae delectus voluptatibus
				perspiciatis veniam facere magnam.
			</p>
			<div className="resume__wrapper">
				<ButtonItem title={"resume"} />
				<a
					href="https://github.com/w1tch3r-code"
					target="_blank"
					rel="noreferrer">
					<Github />
				</a>
				<a
					href="#"
					target="_blank"
					rel="noreferrer">
					<Linkedin />
				</a>
			</div>
		</section>
	);
};

export default Info;
