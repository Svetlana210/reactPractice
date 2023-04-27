import { Component } from 'react';

export default class TabsClass extends Component {
  state = { activeTabIdx: 0 };

  //сравниваем настоящее и будущее сост, если не равны, будет true - ререндерится, если равны, будет false - не разрешаем рендер
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }

  setActiveTabId = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log('render');

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabId(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
