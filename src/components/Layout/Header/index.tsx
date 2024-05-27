import { ThemeToggle } from './ThemeToggle';
import { cn } from '../../../lib/utils';
import { MobileSidebar } from '../Sidebar/MobileSidebar';
import { Boxes } from 'lucide-react';
import { AppName } from '../../../constants/common/ui';

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4 ml-3">
        <a
          href={'/'}
          className="hidden items-center justify-between gap-2 md:flex"
        >
          <Boxes className="h-6 w-6 text-green-500" />
          <h1 className="text-2xl text-green-500 font-semibold">{AppName}</h1>
        </a>
        <div className={cn('block md:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
