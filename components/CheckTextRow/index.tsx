import Image from 'next/image'
import React from 'react'

export type CheckTextRowProps = {
    text?: string;
}

export default function CheckTextRow({text}: CheckTextRowProps) {
  return (
    <li className="flex items-start border-t border-n-6 py-5">
        <Image
            src="/images/check.svg"
            width={24}
            height={24}
            alt="Check"
        />
        <p className="body-2 ml-4">{text || "Title"}</p>
    </li>
  )
}
