import ImageGallery from "./components/ImageGallery"

const images = [
  {
    src: '/images/portada.jpg',
    alt: 'Projectes i obres',
    title: 'Projectes i obres',
    description: 'fotografia de la portada del llibre',
  }
]

export default function Home() {
  return (
    <div className="content">
      <ImageGallery images={images} />
    </div>
  )
}
