import { useState } from 'react';
import { cn } from '../lib/utils';

interface MenuItemProps {
  id: string;
  image?: string;
  itemName: string;
  description?: string;
  price: number;
  addYMargins?: boolean;
}

function MenuItem({ id, image, itemName, description, price, addYMargins }: MenuItemProps) {
  const [enlarged, setEnlarged] = useState(false);

  return (
    <div
      key={id}
      className={cn('flex gap-2', {
        'flex-col gap-0 rounded-md bg-gradient-to-r from-cyan-800 to-cyan-950 text-white shadow-lg': enlarged,
        'my-4': !image && addYMargins,
      })}
    >
      {image && (
        <div
          className={cn('self-start overflow-hidden rounded-md', {
            'w-32 max-[320px]:w-24': !enlarged,
            'w-full rounded-b-none': enlarged,
          })}
          onClick={() => setEnlarged(!enlarged)}
          role="button"
        >
          <img src={`.${image}`} alt="burger" className={cn({ 'aspect-square': !enlarged }, 'w-full object-cover')} />
        </div>
      )}
      <div className={cn('flex w-full flex-col', { 'p-4': enlarged })}>
        <div className="flex items-baseline gap-2">
          <h2 className={cn('text-lg font-bold text-cyan-800 max-[320px]:text-base', { 'text-white': enlarged })}>
            {itemName}
          </h2>
          <div className={cn('flex-grow border-b-2 border-dotted', { invisible: enlarged || !price })}></div>
          {price !== 0 && (
            <p className={cn('text-lg font-bold text-cyan-800 max-[320px]:text-base', { 'text-white': enlarged })}>
              {price % 1 !== 0 ? price.toFixed(2) : price}$
            </p>
          )}
        </div>
        {description && (
          <div>
            <p className={cn('text-sm text-neutral-700 max-[290px]:text-xs', { 'text-cyan-50': enlarged })}>
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
