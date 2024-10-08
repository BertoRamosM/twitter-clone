'use client'
import useLoginModal from '@/hooks/useLoginModal'
import React, { useCallback, useState } from 'react'
import Input from '../layout/Input'
import Modal from '../Modal'


const LoginModal = () => {
  const loginModal = useLoginModal()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async() => {
    try {
      setIsLoading(true)


      loginModal.onClose()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  },[loginModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      title="Login"
      body={bodyContent}
      actionLabel="Login"
    />
  )
}

export default LoginModal