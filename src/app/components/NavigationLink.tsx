"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
  children: React.ReactNode,
  href: string,
  style?: React.CSSProperties,
  isActive?: boolean,
}

export default function NavigationLink({ isActive, children, href, style }: Props) {
  const pathname = usePathname()
  const isDifferentThanHome = href !== '/'
  const defaultIsActive = isDifferentThanHome ? pathname.startsWith(href) : pathname === href
  const isPageActive = typeof isActive === 'boolean' ? isActive : defaultIsActive
  const className = isPageActive ? "active" : ""

  return <Link className={className} href={href} style={style}>{children}</Link>
}