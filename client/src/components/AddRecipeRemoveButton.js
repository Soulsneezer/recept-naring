import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';

const RemoveRowButton = (props) => {
  return (
    <React.Fragment>
      <MdRemoveCircleOutline
        className="MdRemoveCircleOutline"
        onClick={props.onClick} />
    </React.Fragment>
  );
}

export default RemoveRowButton;