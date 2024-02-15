import PropTypes from 'prop-types';
import './Skills.css';

const SkillItem = ({title}) => {
	return <div className='div__skill'>{title}</div>;
};

SkillItem.propTypes = {
	title: PropTypes.string.isRequired,
}

export default SkillItem;
