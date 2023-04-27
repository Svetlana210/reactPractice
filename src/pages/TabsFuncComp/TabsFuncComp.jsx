import { useState } from 'react';

const Tabs = ({ items }) => {
  const [state, setState] = useState({ activeIdx: 0 });

  const activeTab = items[state.activeIdx];

  const mutate = obj => {
    setState(prevState => {
      console.log(prevState.activeIdx === obj.activeIdx);
      if (prevState.activeIdx === obj.activeIdx) return prevState;
      return obj;
    });
  };
  console.log('render');
  return (
    <>
      <div>
        {items.map((item, idx) => (
          <button
            type="button"
            key={item.label}
            onClick={() => mutate({ activeIdx: idx })}
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
};

export default Tabs;
