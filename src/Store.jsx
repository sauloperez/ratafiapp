import React from 'react';
import Moment from 'moment';

import Body from './Body';
import StoreItem from './StoreItem';
import Button from './Button';
import AddStockModal from './AddStockModal';

import './Store.css';

class Store extends React.Component {
  constructor(props) {
    super(props);
    Moment.locale('ca');

    this.state = {
      addStock: false,
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

    this.handleCreateStock = this.handleCreateStock.bind(this);
  }

  handleCreateStock(newStock) {
    this.setState(prevState => ({
      inventoryItems: prevState.inventoryItems.concat(newStock)
    }))
  }

  render() {
    const { inventoryItems, addStock } = this.state;

    return (
      <div className="Store">
        {addStock
            && <AddStockModal
              onClose={() => this.setState({ addStock: false })}
              onSubmit={this.handleCreateStock}
            />
        }

        <Body>
          <header>
            <div className="ButtonBar">
              <h2>Magatzem</h2>
              <div className="ButtonBar__ButtonSection">
                <Button
                  label="Afegir estoc"
                  onClick={() => this.setState({ addStock: true })}
                />
              </div>
            </div>
          </header>
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
        </Body>
      </div>
    );
  }
}

export default Store;
