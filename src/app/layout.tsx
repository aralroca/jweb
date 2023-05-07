import './globals.css'
import { Inter } from 'next/font/google'
import NavigationLink from './components/NavigationLink'
import PresentationLinks from './components/PresentationLinks'

const inter = Inter({ subsets: ['latin'] })

const subdescription = 'Arquitectura i espai públic'

export const metadata = {
  title: 'Jaume Artiques i Vidal, Arquitecte',
  description: `Pàgina web de l'arquitecte Barceloní Jaume Artigues i Vidal. ${subdescription}`,
  keywords: [
    'arquitecte',
    'arquitectura',
    'Barcelona',
    'Jaume Artigues Vidal',
    'Jaume Artigues',
    'Jaume Artigues i Vidal',
    'Parc Central Mataró',
    'Passeig Marítim Barceloneta',
    'Rambla Raval Ful',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca">
      <body className={inter.className}>
        <header>
          <div className="heading-wrapper">
            <h1>{metadata.title.toUpperCase()}</h1>
            <h2>{subdescription.toUpperCase()}</h2>
          </div>
          <nav>
            <ul>
              <li>
                <NavigationLink href="/">Portada</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/presentacio">Presentació</NavigationLink>
              </li>
              <li className="presentation">
                <PresentationLinks />
              </li>
            </ul>
            <ul className="second">
              <li>
                <NavigationLink href="/curriculum">Currículum</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/projectes">Projectes i obres</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/concursos">Concursos</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/contacte">Contacte</NavigationLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="content">
            <ul>
              <li>
                <NavigationLink href="/visites">Nombre de visitants</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/avislegal">Avís legal</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/privacitat">Privacitat</NavigationLink>
              </li>
            </ul>
            <div className="author">
              <a href="mailto:contact@aralroca.com">
                © ARAL ROCA {new Date().getFullYear()}
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html >
  )
}
