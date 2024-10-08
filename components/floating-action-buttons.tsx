import Link from 'next/link'
import { Edit, Users, User, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FloatingActionButtons({ username }: { username: string }) {
  const [buttonSize, setButtonSize] = useState(24)

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth
      const newSize = Math.max(12, Math.min(24, viewportWidth / 20)) // Responsive size between 24 and 36
      setButtonSize(newSize)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex justify-center gap-4">
      <Link href={`/${username}/edit`} className="p-3 bg-pizzapurple text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 ">
        <Edit size={buttonSize} />
      </Link>
      <Link href={`/${username}/cardholder`} className="p-3 bg-pizzapurple text-white shadow-lg hover:bg-green-600 transition-colors duration-300  [clip-path:polygon(42%_0%,_0%_100%,_100%_100%)]">
        <Users size={buttonSize} />
      </Link>
      <Link href={`/${username}/system`} className="p-3 bg-pizzapurple text-white rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300">
        <User size={buttonSize} />
      </Link>
      <Link href={`/${username}/web3`} className="p-3 bg-pizzapurple text-white shadow-lg hover:bg-purple-600 transition-colors duration-300 [clip-path:polygon(100%_100%,_100%_0%,_0%_64%)]">
        <Globe size={buttonSize} />
      </Link>
    </div>
  )
}