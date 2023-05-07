"use client"

import { usePathname } from "next/navigation"
import NavigationLink from "./NavigationLink"

const defaultLang = 'CAT'
const presentationLangs = [
  'ENG',
  'FRAN',
  'CAST',
  'CAT'
]

export default function PresentationLinks() {
  const pathname = usePathname()
  const isPresentation = pathname.startsWith('/presentacio')

  if (!isPresentation) return null

  return (
    <>
      {presentationLangs.map((lang) => {
        const subpath = lang === defaultLang ? '' : `/${lang}`
        const href = `/presentacio${subpath}`
        const isActive = pathname === href
        return (
          <NavigationLink isActive={isActive} style={{ margin: '0 5px' }} key={lang} href={href}>
            {lang}
          </NavigationLink>
        )
      })}
    </>
  )
}
