import React from 'react';
import Moment from 'moment';

import Body from './Body';
import StoreItem from './StoreItem';
import Button from './Button';

import './Store.css';

class Store extends React.Component {
  constructor(props) {
    super(props);
    Moment.locale('ca');

    this.state = {
      inventoryItems: [
        {
          id: 1,
          name: 'Anisada',
          createdAt: 2018,
          graduation: '25°',
          quantity: 10,
          lastConsumedAt: new Date(2018, 11, 3),
        },
        {
          id: 2,
          name: 'Aiguardent',
          createdAt: 2018,
          graduation: '30°',
          quantity: 5,
          lastConsumedAt: new Date(2018, 11, 1),
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
            <div className="ButtonBar">
              <h2>Magatzem</h2>
              <div className="ButtonBar__ButtonSection">
                <Button label="Afegir estoc" />
              </div>
            </div>
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
