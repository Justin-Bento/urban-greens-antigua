import React from 'react'
import { Button } from '../Button'

export default function CallToaction() {
  return (
    <section className="relative px-6 py-24 overflow-hidden text-left isolate sm:rounded-3xl sm:px-16 rounded-xl bg-primary-200 dark:bg-primary-900">
      <div className="flex flex-col md:justify-center">
        <h3 className="pb-2 mt-10 text-3xl font-extrabold tracking-tight md:text-center text-start transtion-colors md:tex scroll-m-20 first:mt-0">Make Microgreens Part Of Your Diet Today!</h3>
        <p className="mx-auto mt-4 text-xl leading-7 tracking-wide opacity-80 max-w-prose text-start lg:text-center">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
        <div className="inline-flex flex-col justify-start gap-6 mt-6 md:flex-row md:justify-center">
          <Button>Join Our Whatsapp Group</Button>
          <Button variant="outline">Hello World</Button>
        </div>
      </div>
    </section>
  )
}
