import { useState } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import bundle from '../../bundler';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <section>
      <CodeEditor initialValue='' onChange={(value) => setInput(value)}/>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </section>
  );
};

export default CodeCell;
