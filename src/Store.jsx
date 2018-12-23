import React from 'react';

import Body from './Body';
import StoreItem from './StoreItem';

import './Store.css';

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inventoryItems: [
        {
          id: 1,
          name: 'Anisada',
          createdAt: 2018,
          graduation: '25°',
          quantity: 10,
          lastConsumedAt: new Date(2018, 11, 3).toLocaleDateString('es'),
        },
        {
          id: 2,
          name: 'Aiguardent',
          createdAt: 2018,
          graduation: '30°',
          quantity: 5,
          lastConsumedAt: new Date(2018, 11, 1).toLocaleDateString('es'),
        },
      ],
    };
  }

  render() {
    const { inventoryItems } = this.state;

    return (
      <div className="Store">
        <Body>
          <header>
            <h1>Magatzem</h1>
            <table>
              <tbody>
                <tr>
                  <th>Nom</th>
                  <th>Graduació</th>
                  <th>Quantitat</th>
                  <th></th>
                </tr>

                {inventoryItems.map(
                  inventoryItem => (
                    <StoreItem
                      key={inventoryItem.id}
                      {...inventoryItem}
                    />
                  ),
                )}
              </tbody>
            </table>
          </header>
        </Body>
      </div>
    );
  }
}

export default Store;
