import './Info.css';
import ButtonItem from "../button/ButtonItem";

const Info = () => {
	return (
		<section className='section__info'>
			<h1>Hi, I am <span>Rainer Busch</span></h1>
			<h2>A Font End Developer.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam sequi ipsam eligendi, aliquid asperiores ab excepturi accusamus dignissimos, tempora recusandae delectus voluptatibus perspiciatis veniam facere magnam.</p>
            <ButtonItem title={"resume"} />
		</section>
	);
};

export default Info;
