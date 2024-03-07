import { cn } from '@/libs/utils';
import Image from 'next/image'
import React from 'react'

export type CheckTextRowProps = {
    _key?: string;
    text: string;
    description?: string | null;
    showBorder?: boolean;
}

export default function CheckTextRow({text, description, showBorder}: CheckTextRowProps) {
  return (
    <li className={cn(`${showBorder ? "border-t border-n-6 py-3" : ""} flex items-start px-4 py-5`)}>
      <div className={cn("flex items-start")}>
        <Image
            src="/images/check.svg"
            width={24}
            height={24}
            alt="Check"
        />
        <p className="body-2 ml-4">{text || "Title"}</p>
        </div>

        {description && (
          <p className='body-2 mt-3 text-n-4'>
            {description}
          </p>
        )}

    </li>
  )
}
