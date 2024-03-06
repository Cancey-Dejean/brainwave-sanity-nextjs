'use client'
import { Button } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();
  return (
    <section className='flex flex-col items-center justify-center px-5 gap-5'>
      <Image src="/images/something-lost-404.webp" width={500} height={335} className='mx-auto' alt='' />
      <h1 className='h1'>Oops, looks like the page is lost.</h1>

      <p className='body-1'>This is not a fault, just an accident that was not intentional.</p>

      <Button as="button" onClick={(e) => {
        e.preventDefault()
        router.push("/");
      }}>
        Return Home
      </Button>

    </section>
  )
}
