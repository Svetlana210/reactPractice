import { useState } from 'react';
import Content from './Content';

const Tabs = ({ items }) => {
  const [state, setState] = useState({ activeIdx: 0 });

  const activeTab = items[state.activeIdx];

  // const mutate = obj => {
  //   setState(prevState => {
  //     console.log(prevState.activeIdx === obj.activeIdx);
  //     if (prevState.activeIdx === obj.activeIdx) return prevState;
  //     return obj;
  //   });
  // };

  return (
    <>
      <div>
        {items.map((item, idx) => (
          <button
            type="button"
            key={item.label}
            onClick={() => setState({ activeIdx: idx })}
          >
            {item.label}
          </button>
        ))}
      </div>
      <Content activeTab={activeTab} />
    </>
  );
};

export default Tabs;
