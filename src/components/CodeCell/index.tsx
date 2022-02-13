import { useEffect, FC } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import { Cell } from '../../redux/interfaces/cell';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';
import Resizable from '../Resizable';
import useCumulativeCode from './utils/useCumulativeCode';
import './styles.css';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, bundleCode } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      bundleCode(cell.id, cumulativeCode);
      return;
    }

    const timer = setTimeout(async () => {
      bundleCode(cell.id, cumulativeCode);
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [cell.id, cumulativeCode, bundleCode]);

  const loadingProgress = (
    <div className="progress-cover">
      <progress className="progress is-small is-primary" max="100">
        Loading
      </progress>
    </div>
  );

  const renderPreview = () => {
    if (!bundle || bundle.loading) {
      return loadingProgress;
    }

    return <Preview code={bundle.code} err={bundle.err} />;
  }

  return (
    <Resizable direction="vertical">
      <section style={{ height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor initialValue={cell.content} onChange={value => updateCell(cell.id, value)}/>
        </Resizable>
        <div className="preview-wrapper">
          {renderPreview()}
        </div>
      </section>
    </Resizable>
  );
};

export default CodeCell;
