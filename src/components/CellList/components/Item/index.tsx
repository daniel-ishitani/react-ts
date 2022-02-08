import { FC } from "react";

import { Cell } from "../../../../redux/interfaces/cell";
import CodeCell from '../../../CodeCell';
import TextEditor from '../../../TextEditor';
import ActionBar from '../../../ActionBar';
import './styles.css';

interface ItemProps {
  cell: Cell,
};

const Item: FC<ItemProps> = ({ cell }) => {
  const renderCell = () => {
    if (cell.type === 'code') {
      return (
        <>
          <div className="action-bar-wrapper">
            <ActionBar id={cell.id} />
          </div>
          <CodeCell cell={cell} />
        </>
      );
    }

    return (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }

  return (
    <div className="cell-list-item">
      {renderCell()}
    </div>
  );
}

export default Item;
