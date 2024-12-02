"use client"

import Link from 'next/link'
import { BarChart2, Menu } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <BarChart2 className="mr-2 h-8 w-8" />
            <span className="font-poppins">Mapa de Desigualdade</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-purple-200 transition duration-300">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre-os-indices" className="hover:text-purple-200 transition duration-300">
                  Sobre os Índices
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-purple-200 transition duration-300">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-purple-200 transition duration-300">
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/" className="block py-2 hover:text-purple-200 transition duration-300">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre-os-indices" className="block py-2 hover:text-purple-200 transition duration-300">
                  Sobre os Índices
                </Link>
              </li>
              <li>
                <Link href="/insights" className="block py-2 hover:text-purple-200 transition duration-300">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="block py-2 hover:text-purple-200 transition duration-300">
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

