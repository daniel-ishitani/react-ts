import { FC, useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';

import './styles.css';

const TextEditor: FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('# Header');
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (editorRef.current && event.target && editorRef.current.contains(event.target as Node)) {
        return;
      }

      setIsEditing(false);
    };

    document.addEventListener('click', listener, { capture: true });

    return () => document.removeEventListener('click', listener, { capture: true });
  }, []);

  if (isEditing) {
    return (
      <div ref={editorRef} className="text-editor">
        <MDEditor value={value} onChange={(text = '') => setValue(text)} />
      </div>
    );
  }
 
  return (
    <div onClick={() => setIsEditing(true)} className="text-editor card">
      <div className="card-content">
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
};

export default TextEditor;
