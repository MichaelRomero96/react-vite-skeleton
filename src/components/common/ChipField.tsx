import { FC, useState } from 'react';
import IconButton from './IconButton';
import { CheckIcon, Pencil, X } from 'lucide-react';

interface Props {
  value: string;
  updateValue: (newValue: string) => void;
}
const ChipField: FC<Props> = ({ value, updateValue }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOnEdit, setIsOnEdit] = useState(false);
  const [newValue, setNewValue] = useState('');

  return (
    <div
      onMouseEnter={() => {
        if (isHovered) return;
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-full flex bg-gray-100 p-1 px-3"
    >
      {!isOnEdit && <p className="text-sm">{value}</p>}
      {isHovered && !isOnEdit && (
        <div className="pl-2">
          <IconButton
            onClick={() => setIsOnEdit(true)}
            variant="secondary"
            size={5}
            icon={<Pencil size={14} />}
          />
          <IconButton
            onClick={() => console.log('delete')}
            variant="secondary"
            size={5}
            icon={<X size={14} />}
          />
        </div>
      )}
      {isOnEdit && (
        <div className="flex items-end gap-2">
          <div className="border-b-[1px] border-gray-400">
            <input
              type="text"
              value={newValue}
              className="border-none focus:outline-none bg-transparent w-20 text-sm"
              onChange={(e) => setNewValue(e.target.value)}
            />
          </div>
          <IconButton
            onClick={() => {
              updateValue(newValue);
              setIsOnEdit(false);
            }}
            variant="secondary"
            size={5}
            icon={<CheckIcon size={14} />}
          />
          <IconButton
            onClick={() => setIsOnEdit(false)}
            variant="secondary"
            size={5}
            icon={<X size={14} />}
          />
        </div>
      )}
    </div>
  );
};

export default ChipField;
