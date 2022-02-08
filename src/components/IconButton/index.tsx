import { FC } from "react";

interface IconButtonProps {
  onClick: () => void;
  iconClassName: string;
} 

const IconButton: FC<IconButtonProps> = ({ onClick, iconClassName }) => {
  return (
    <button onClick={onClick} className="button is-primary is-small">
      <span className="icon">
        <i className={iconClassName} />
      </span>
    </button>
  );
}

export default IconButton;
