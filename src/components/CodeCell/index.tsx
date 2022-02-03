import { useState } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import bundle from '../../bundler';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';
import Resizable from '../Resizable';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction="vertical">
      <section style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor initialValue='' onChange={(value) => setInput(value)}/>
        </Resizable>
        <Preview code={code} />
      </section>
    </Resizable>
  );
};

export default CodeCell;
