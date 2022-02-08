import { FC, Fragment } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import AddCell from "../AddCell";
import Item from "./components/Item";

const CellList: FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => order.map(id => data[id]));

  const renderCells = () => cells.map(cell => (
    <Fragment key={cell.id}>
      <Item cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell previousCellId={null} isAlwaysVisible={!cells.length} />
      {renderCells()}
    </div>
  );
}

export default CellList;
