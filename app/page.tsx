import { redirect } from 'next/navigation'

import prisma from "@/lib/prisma"

const formSubmit = async (e: FormData) => {
  'use server'

  const name = e.get('name')?.valueOf() as string
  const email = e.get('email')?.valueOf() as string
  const data = await prisma.user.create({
    data: {
      name,
      email
    }
  })

  redirect("/users")

}



export default function Home() {

  return (
    <form
      action={formSubmit}
    >
      <input type="text" placeholder="name" name="name" />
      <input type="text" placeholder="email" name="email" />
      <button type='submit'>Submit</button>
    </form>

  )
}
