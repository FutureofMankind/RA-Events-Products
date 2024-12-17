import PropTypes from 'prop-types';

import ShopItem from '../ShopItem/ShopItem';
import './listView.css';

const ListView = ({ items }) => {
  return (
    <ul className="list-view">
      {items.map((item, index) => (
        <ShopItem key={index} data={item} />
      ))}
    </ul>
  );
};

ListView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListView;