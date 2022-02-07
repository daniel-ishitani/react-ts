import { FC, useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';

import { Cell } from '../../redux/interfaces/cell';
import './styles.css';
import useActions from '../../hooks/useActions';

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: FC<TextEditorProps> = ({ cell }) => {
  const [isEditing, setIsEditing] = useState(false);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const { updateCell } = useActions();

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
        <MDEditor value={cell.content} onChange={(text = '') => updateCell(cell.id, text)} />
      </div>
    );
  }
 
  return (
    <div onClick={() => setIsEditing(true)} className="text-editor card">
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || 'Click to edit'} />
      </div>
    </div>
  );
};

export default TextEditor;
