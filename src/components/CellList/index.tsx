import { FC } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import Item from "./components/Item";

const CellList: FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => order.map(id => data[id]));

  const renderCells = () => cells.map(cell => <Item key={cell.id} cell={cell} />);

  return <div>{renderCells()}</div>;
}

export default CellList;
