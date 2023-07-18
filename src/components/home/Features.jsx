import React from 'react'
import { Button } from "../Button"
export default function Features() {
  return (
    <section className="space-y-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 content-evenly">
        <div className="flex flex-col place-content-center">
          <h2 className="pb-2 mt-10 text-3xl font-extrabold tracking-tight transition-colors scroll-m-20 first:mt-0">Make Microgreens Part Of Your Diet Today!</h2>
          <p className="text-lg max-w-prose text-gray-950/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere tempore assumenda sunt voluptatibus nostrum, et quis eos ipsa placeat repellendus accusantium dolorem excepturi error corporis?</p>
          <div className="mt-4">
            <Button variant="outline">Hello World</Button>
          </div>
        </div>
        <img src="/public/assets/home/diet-microgreens.png" alt="" className="object-cover object-center w-full border shadow-sm aspect-square rounded-2xl" />
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 content-evenly">
        <div className="flex flex-col place-content-center">
          <h2 className="pb-2 mt-10 text-3xl font-extrabold tracking-tight capitalize transition-colors scroll-m-20 first:mt-0">Give Colour To Your Dish!</h2>
          <p className="text-lg max-w-prose text-gray-950/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere tempore assumenda sunt voluptatibus nostrum, et quis eos ipsa placeat repellendus accusantium dolorem excepturi error corporis?</p>
          <div className="mt-4">
            <Button variant="outline">Hello World</Button>
          </div>
        </div>
        <img src="/public/assets/home/micro-greens-with-steak.jpg" alt="" className="order-1 object-cover object-center w-full border shadow-sm aspect-square rounded-2xl lg:order-first" />
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 content-evenly">
        <div className="flex flex-col place-content-center">
          <h2 className="pb-2 mt-10 text-3xl font-extrabold tracking-tight transition-colors scroll-m-20 first:mt-0">Make Microgreens Part Of Your Diet Today!</h2>
          <p className="text-lg max-w-prose text-gray-950/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere tempore assumenda sunt voluptatibus nostrum, et quis eos ipsa placeat repellendus accusantium dolorem excepturi error corporis?</p>
          <div className="mt-4">
            <Button variant="outline">Hello World</Button>
          </div>
        </div>
        <img src="/public/assets/home/urban-greens-auntigua.jpg" alt="" className="object-cover object-center w-full border shadow-sm aspect-square rounded-2xl" />
      </div>

    </section>
  )
}
