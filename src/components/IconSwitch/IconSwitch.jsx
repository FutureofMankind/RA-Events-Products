import PropTypes from 'prop-types';

import './iconSwitch.css';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <img
      className="icon-switch"
      src={icon}
      alt="icon switch"
      onClick={onSwitch}
    />
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;