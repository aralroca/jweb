import ImageGallery from "../components/ImageGallery";

const images = [
  {
    src: 'images/concursos/PANELL 2 A3-300dpi.jpg',
    title: 'Concurs d\'Ordenació de l\'Illa Cental de Badalona',
    description: '<p>Ajuntament de Badalona (Barcelona)</p><p>Jordi Henrich, Jaume Artiques, arquitectes</p><p>Seleccionats per la segona fase</p><p>2008-09</p>'
  },
  {
    src: 'images/concursos/2 panell 2.jpg',
    title: 'Concurs del Centre Direccional del Prat Nord',
    description: '<p>Ajuntament del Prat de Llobregat, Consorci del Prat Nord, INCASOL</p><p>H+N+S Landschapsarchitectes - AAUP, Jordi Romero i ass. SLP - Jansana, De la Villa, de Paaw, arq. SL, - Jordi Hemrich, Jaume Artigues, arq.</p><p>2008-09</p>'
  },
  {
    src: 'images/concursos/Imatge_2.jpg',
    title: 'Concurs d\'idees NumaPort, Neuchâtel (Suïssa)',
    description: '<p>Ville de Neuchâtel, République de Neuchâtel</p><p>Jordi Henrich, Isabel Bennàssar i Jamue Artigues, arq.</p><p>2011-12</p>'
  },
  {
    src: 'images/concursos/G-1.jpg',
    title: 'Concurs d\'Avantprojecte d\'adquació de la Riera d\'Alella',
    description: '<p>Ajuntament d\'Alella (Barcelona)</p><p>Jordi Henrich i Jaume Artigues, arquitectes</p><p>Selecció prèvia del concurs d\'avantprojectes</p><p>2007</p>'
  },
  {
    src: 'images/concursos/lamina 3.jpg',
    title: 'Concurs d\'idees de l\'Ordenació de l\'àrea d\'equipaments de Can Xarau',
    description: '<p>Ajuntament de Cerdanyola del Vallés (Barcelona)</p><p>Jordi Henrich i Jaume Artigues, arquitectes.</p><p>2010</p>'
  },
  {
    src: 'images/concursos/proposta grafica 3.jpg',
    title: 'Concurs del Institut Escola de Puigcerdà (Cerdanya)',
    description: '<p>GISA, Direcció General de Centres Docents</p><p>Jordi Hemrich, Jaume Artigues i Pere Riera (GRECCAT SL), arquitectes</p><p>Finalistes. Tercers classificats</p><p>2009</p>'
  },
  {
    src: 'images/concursos/Render 2 CEIP PALAFRUGELL _Page_3.jpg',
    title: 'Concurs del Centre d\'E. Infantil i Primària Palafrugell',
    description: '<p>GISA, Direcció General de Centres Docents</p><p>Jordi Henrich, Jaume Artigues, Pere Riera (GRECCAT SL)</p><p>Segons classificats del Concurs de dues voltes</p><p>2008</p>'
  },
  {
    src: 'images/concursos/Vista_01 mini.jpg',
    title: 'Concurs dper a la construcció del CEE Horitzó a Pineda (Barcelona)',
    description: '<p>GISA, Direcció General de Centres Docents</p><p>Jordi Henrich, Jaume Artigues, Pere Riera (GRECCAT SL)</p><p>Finalistes del concurs Obert, Tercers classificats</p><p>2008</p>'
  },
  {
    src: 'images/concursos/FINAL INT final.jpg',
    title: 'Concurs d\'idees per a la construcció de l\'Edifici Polivalent 2 al Campus de Cappont de la Universitat de Lleida',
    description: '<p>Jordi Hewnrich, Jaume Artigues, Inés Aubert, arquitectes.</p><p>2008</p>'
  }
];

export default function Concursos() {
  return (
    <div className="content flat">
      <ImageGallery images={images} />
    </div>
  )
}
