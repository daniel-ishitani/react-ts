import { FC } from 'react';

import useActions from '../../hooks/useActions';
import IconButton from '../IconButton';
import './styles.css';

interface ActionBarProps {
  id: string;
}

const ActionBar: FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <IconButton onClick={() => moveCell(id, 'up')} iconClassName="fas fa-arrow-up" />
      <IconButton onClick={() => moveCell(id, 'down')} iconClassName="fas fa-arrow-down" />
      <IconButton onClick={() => deleteCell(id)} iconClassName="fas fa-times" />
    </div>
  )
};

export default ActionBar;
