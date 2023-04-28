import { memo } from 'react';

const Content = ({ activeTab }) => {
  console.log('render2');
  return (
    <>
      <h2>{activeTab.label}</h2>
      <p>{activeTab.content}</p>
    </>
  );
};

export default memo(Content);
