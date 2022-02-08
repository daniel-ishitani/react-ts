import { FC } from "react";

import useActions from "../../hooks/useActions";
import './styles.css';

interface AddCellProps {
  previousCellId: string | null;
  isAlwaysVisible?: boolean;
}

const AddCell: FC<AddCellProps> = ({ previousCellId, isAlwaysVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${isAlwaysVisible && 'is-visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, 'code')}>
          <span className="icon is-small">
            <i className="fas fa-plus"/>
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, 'text')}>
          <span className="icon is-small">
            <i className="fas fa-plus"/>
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider" />
    </div>
  )
};

export default AddCell;
