import { useState } from 'react';

import products from '../../data/products.json';
import viewListIcon from '../../assets/view_list.svg';
import viewModuleIcon from '../../assets/view_module.svg';

import IconSwitch from '../IconSwitch/IconSwitch';
import ListView from '../ListView/ListView';
import CardsView from '../CardsView/CardsView';

import './store.css';

const Store = () => {
  const [icon, setIcon] = useState(viewListIcon);

  const handler = () => {
    setIcon(icon === viewListIcon ? viewModuleIcon : viewListIcon);
  };

  return (
    <div className="store">
      <header className="store__header">
        <IconSwitch icon={icon} onSwitch={handler} />
      </header>
      <main className="store__main">
        {icon === viewListIcon ? (
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </main>
    </div>
  );
};

export default Store;