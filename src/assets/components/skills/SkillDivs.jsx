import SkillsItem from "./SkillsItem";

const SkillDivs = () => {
	return (
		<section className="section__skills">
			<h2>SKILLS</h2>
			<SkillsItem title={"HTML"} />
			<SkillsItem title={"CSS"} />
			<SkillsItem title={"SCSS"} />
			<SkillsItem title={"JavaScript"} />
			<SkillsItem title={"React"} />
			<SkillsItem title={"Git"} />
			<SkillsItem title={"UI/UX"} />
			<SkillsItem title={"WordPress"} />
		</section>
	);
};

export default SkillDivs;
