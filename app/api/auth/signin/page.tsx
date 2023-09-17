'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

function handleSignin() {

    signIn('github', {callbackUrl:'http://localhost:3000/users'})
}

function page() {
    return (
        <div className='cursor-pointer border border-red p-2 rounded-md justify-center flex items-center my-auto' onClick={handleSignin}>
           Custom Sigin In With Github
        </div>
    )
}

export default page