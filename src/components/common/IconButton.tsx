import { FC } from 'react';
import Button from './Button';
import { cn } from '../../lib/utils';

interface Props {
  icon: React.ReactNode;
  variant?: 'success' | 'danger' | 'secondary';
  size?: string | number;
  onClick?: () => void;
}

const IconButton: FC<Props> = ({ icon, variant, size, onClick }) => {
  const setVariant = variant === 'success' ? 'green' : 'red';
  const setBgVariant = () => {
    if (variant === 'secondary') return;
    return `bg-${setVariant}-200 hover:bg-${setVariant}-300`;
  };

  return (
    <Button
      className={cn(setBgVariant(), 'rounded-full', `h-${size} w-${size}`)}
      variant={variant === 'secondary' ? variant : 'outline'}
      size="icon"
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
