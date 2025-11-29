"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-foreground">
            La Cucina
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">
              Menu
            </Link>
            <Link href="/contact" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">
              Contact
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book a Table</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book a Table</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
