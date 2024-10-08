'use client'

// import { useWallet } from '@solana/wallet-adapter-react'
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import { notFound } from 'next/navigation'
import { getUserByCustomDomain, getUserUrls } from '@/lib/data'
import FloatingActionButtons from '@/components/floating-action-buttons'
import ProfileShow from '@/components/profile-show'
import CustomWalletButton from '@/components/custom-wallet-button'

export default function ProfilePage({ params }: { params: { username: string } }) {
  const user = getUserByCustomDomain(params.username)
  // const { publicKey } = useWallet()

  if (!user) {
    notFound()
  }

  const socialLinks = getUserUrls(user.customDomain)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center relative p-4">
      <div className="fixed top-4 right-4 z-50">
        <CustomWalletButton />
      </div>
      <div className="h-24" />
        <ProfileShow urls={socialLinks} username={user.customDomain} />      
      <div className="h-24" /> 
      {/* Spacer for floating buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pb-6">
        <FloatingActionButtons username={user.customDomain} />
      </div>
    </div>
  )
}