'use client'
import { useRouter } from 'next/navigation'

import React from 'react'
import { FaFeather } from 'react-icons/fa'

const SidebarTweetButton = () => {
  const router = useRouter()
  return (
    <div  onClick={() => router.push('/')}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 flex p-4 items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
    <FaFeather size={24} color='white'/>
      </div>

    </div>
  )
}

export default SidebarTweetButton