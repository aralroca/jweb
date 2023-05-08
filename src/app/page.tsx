import ImageGallery from "./components/ImageGallery"
import { homeImages } from "./constants/default-data"

export default function Home() {
  return (
    <div className="content flat">
      <ImageGallery images={homeImages} />
    </div>
  )
}
