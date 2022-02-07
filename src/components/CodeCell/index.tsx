import { useState, useEffect, FC } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import bundle from '../../bundler';
import { Cell } from '../../redux/interfaces/cell';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';
import Resizable from '../Resizable';
import useActions from '../../hooks/useActions';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: FC<CodeCellProps> = ({ cell }) => {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setErr(output.err);
    }, 500);

    return () => clearTimeout(timer);
  }, [cell.content]);

  return (
    <Resizable direction="vertical">
      <section style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor initialValue={cell.content} onChange={value => updateCell(cell.id, value)}/>
        </Resizable>
        <Preview code={code} err={err} />
      </section>
    </Resizable>
  );
};

export default CodeCell;
