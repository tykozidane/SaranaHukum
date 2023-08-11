"use client"
import { Footer, Navbar } from '@/components'
import ModalLogin from "@/components/auth/modal-login"
import ModalRegister from "@/components/auth/modal-register"
import { useState } from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lembaga Bantuan Hukum',
  description: 'Created By Tyko Zidane Badhawi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="/logotyko.png" href="#" />
      </head>
      
      <body className={inter.className}>
        <Navbar onLogin={()=> {setShowRegisterModal(false);setShowLoginModal(true)}} onRegister={()=> {setShowLoginModal(false);setShowRegisterModal(true)}}/>
        {showLoginModal &&
            <ModalLogin onClose={() => setShowLoginModal(false)} onRegister={() => {setShowLoginModal(false);setShowRegisterModal(true)}}>
                Hello from the modal!
            </ModalLogin>
        }
        {showRegisterModal &&
            <ModalRegister onClose={() => setShowRegisterModal(false)} onLogin={()=> {setShowRegisterModal(false);setShowLoginModal(true)}}>
                Hello from the modal!
            </ModalRegister>
        }
        {children}
        <Footer/>
        </body>
    </html>
  )
}
