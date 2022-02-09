import { useEffect, FC } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import { Cell } from '../../redux/interfaces/cell';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';
import Resizable from '../Resizable';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, bundleCode } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      bundleCode(cell.id, cell.content);
    }, 500);

    return () => clearTimeout(timer);
  }, [cell.id, cell.content, bundleCode]);

  return (
    <Resizable direction="vertical">
      <section style={{ height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor initialValue={cell.content} onChange={value => updateCell(cell.id, value)}/>
        </Resizable>
        {bundle && <Preview code={bundle.code} err={bundle.err} />}
      </section>
    </Resizable>
  );
};

export default CodeCell;
