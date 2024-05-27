import { FC, ReactNode, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from '../components/common/Dialog';
import { DialogTitle } from '@radix-ui/react-dialog';

interface ComponentProps {
  children: React.ReactNode;
  title?: ReactNode;
}

const useDialog = () => {
  const [open, setOpen] = useState(false);

  const Component: FC<ComponentProps> = ({ children, title }) => {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          {title && (
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
          )}
          {children}
        </DialogContent>
      </Dialog>
    );
  };

  return {
    openDialog: () => setOpen(true),
    Component,
  };
};

export default useDialog;
