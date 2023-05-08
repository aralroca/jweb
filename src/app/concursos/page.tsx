import ImageGallery from "../components/ImageGallery";
import { concursos } from "../constants/default-data";

export default function Concursos() {
  return (
    <div className="content flat">
      <ImageGallery images={concursos} />
    </div>
  )
}
