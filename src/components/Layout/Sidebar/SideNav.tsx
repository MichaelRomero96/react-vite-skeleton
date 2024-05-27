import { Link } from 'react-router-dom';
import { type NavItem } from './NavItems';
import { cn } from '../../../lib/utils';
import buttonVariants from '../../common/Button/variants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../common/Accordion';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import useSidebar from './useSidebar';

interface SideNavProps {
  items: NavItem[];
  setOpen?: (open: boolean) => void;
  className?: string;
}

export function SideNav({ items, setOpen, className }: SideNavProps) {
  const [openItem, setOpenItem] = useState('');
  const { isOpen, setOpen: setSidebarOpen } = useSidebar();
  const [lastOpenItem, setLastOpenItem] = useState('');

  useEffect(() => {
    if (isOpen && lastOpenItem) {
      setOpenItem(lastOpenItem);
    } else {
      setLastOpenItem(openItem);
      setOpenItem('');
    }
  }, [isOpen]);

  const handleItemClick = (item: NavItem) => {
    if (item.isChidren) {
      if (!isOpen) {
        setSidebarOpen(true);
        setLastOpenItem(item.title); // Guarda el elemento que se quiere abrir
      } else {
        setOpenItem(openItem === item.title ? '' : item.title);
      }
    } else {
      if (setOpen) setOpen(false);
    }
  };

  return (
    <nav className="space-y-2">
      {items.map((item) =>
        item.isChidren ? (
          <Accordion
            type="single"
            collapsible
            className="space-y-2"
            key={item.title}
            value={openItem}
            onValueChange={setOpenItem}
          >
            <AccordionItem value={item.title} className="border-none">
              <AccordionTrigger
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'group relative flex h-12 justify-between px-4 py-2 text-base duration-200 hover:bg-muted hover:no-underline',
                  openItem === item.title && 'bg-gray-200'
                )}
                onClick={() => handleItemClick(item)}
              >
                <ul className="flex">
                  <div>
                    {item.icon && (
                      <item.icon className={cn('h-5 w-5', item.color)} />
                    )}
                  </div>
                  <li
                    className={cn(
                      'absolute left-12 text-base duration-200',
                      !isOpen && className
                    )}
                  >
                    {item.title}
                  </li>
                </ul>
                <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                {item.children?.map((child) => (
                  <Link
                    key={child.title}
                    to={child.href}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                    }}
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'group relative flex h-12 justify-start',
                      'leading-normal text-wrap'
                    )}
                  >
                    {child.icon && (
                      <child.icon className={cn('h-5 w-5', child.color)} />
                    )}
                    <div
                      className={cn('absolute left-12  duration-200 text-md')}
                    >
                      {child.title}
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Link
            key={item.title}
            to={item.href}
            onClick={() => {
              if (setOpen) setOpen(false);
            }}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'group relative flex h-12 justify-start'
            )}
          >
            {item.icon && <item.icon className={cn('h-5 w-5', item.color)} />}
            <span
              className={cn(
                'absolute left-12 text-base duration-200',
                !isOpen && className
              )}
            >
              {item.title}
            </span>
          </Link>
        )
      )}
    </nav>
  );
}
