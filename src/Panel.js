import React from 'react';

const Panel = (props) => {
  return (
      <div className="panel">
          <div className="panel__header">
             <div className="panel__title">
                 {props.title}
             </div>
             <div className="panel__hint">
                 {React.createElement(props.hint)}
             </div>
          </div>
          <div>{props.children}</div>
      </div>
  );
};

export default Panel;