import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  handleClose: () => void;
}

const Alert = ({ children, handleClose }: Props) => {
  return (
    <div className='alert alert-primary alert-dismissible fade show'>
      {children}
      <button
        type='button'
        className='btn-close'
        onClick={handleClose}
      ></button>
    </div>
  );
};

export default Alert;
