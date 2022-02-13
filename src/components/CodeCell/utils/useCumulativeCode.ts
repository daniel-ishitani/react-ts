import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { showFn, showFnNoop } from '.';

const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map(id => data[id]);
    
    const cumulativeCode = [];
    for (let item of orderedCells) {
      if (item.type === 'code') {
        cumulativeCode.push(item.id === cellId ? showFn : showFnNoop);
        cumulativeCode.push(item.content);
      }

      if (item.id === cellId) break;
    }

    return cumulativeCode;
  }).join('\n');
}

export default useCumulativeCode;
