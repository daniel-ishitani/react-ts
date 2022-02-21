import { FC, Fragment, useEffect } from "react";

import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import AddCell from "../AddCell";
import Item from "./components/Item";
import './styles.css';

const CellList: FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => order.map(id => data[id]));
  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  const renderCells = () => cells.map(cell => (
    <Fragment key={cell.id}>
      <Item cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell previousCellId={null} isAlwaysVisible={!cells.length} />
      {renderCells()}
    </div>
  );
}

export default CellList;
