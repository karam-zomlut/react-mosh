import { ReactNode } from 'react';
import style from './Button.module.css';

interface Props {
  type?: 'primary' | 'danger' | 'link';
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ type = 'primary', children, onClick }: Props) => {
  return (
    <button
      type='button'
      className={[style.btn, style[`btn-${type}`]].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
