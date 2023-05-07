import ImageGallery from "./components/ImageGallery"

const images = [
  {
    src: 'images/portada/11.File0015.jpg',
    title: 'Passeig Marítim de la Barceloneta (1er Sector)',
    description: '<p>Ajuntament Barcelona, Ministerio de Obras Públicas y Medio Ambiente</p><p>Jaume Artigues, Jordi Henrich, Miquel Roig, Olga Tarrasó, Anna Mª Castañeda</p><p>Diploma d\'Enginyeria Civil dels Premis Construmat 1997</p><p>Obra Finalista de la “IV Bienal de Arquitectura de España 1996”, Madrid 1997</p><p>Premi FAD 1996, apartat d\'Espais Exteriors</p><p>Obra Finalista del Premi Rosa Barba, de la I Biennal Europea del Paisatge, 2000</p><p>Obra Finalista dels Premis Dècada, 2005</p><p>1992-95</p>',
  },
  {
    src: 'images/portada/12. 05 midi.jpg',
    title: 'Passeig Marítim de la Barceloneta (1er Sector)',
    description: '<p>Ajuntament Barcelona, Ministerio de Obras Públicas y Medio Ambiente</p><p>Jaume Artigues, Jordi Henrich, Miquel Roig, Olga Tarrasó, Anna Mª Castañeda</p><p>Menció Honorífica al Premi “Architecti 1993”, Lisboa, 1993.</p><p>Diploma d\'Enginyeria Civil dels Premis Construmat 1997</p><p>Obra Finalista de la “IV Bienal de Arquitectura de España 1996”, Madrid 1997</p><p>Premi FAD 1996, apartat d\'Espais Exteriors.</p><p>Obra Finalista dels Premis Dècada, 2005</p><p>1992-95</p>',
  },
  {
    src: 'images/portada/13 Foto general mini.jpg',
    title: 'Rambla del Raval',
    description: '<p>Ajuntament de Barcelona, Promoció Ciutat Vella SA.</p><p>Jaume Artigues, Pere Cabrera, arqtes, Albert Ribó, arqte tècnic</p><p>Obra Seleccionada per la II Biennal Europea del Paisatge, 2001.</p>',
  },
  {
    src: 'images/portada/13 Park 3.jpg',
    title: 'Parc Central de Mataró',
    description: '<p>Ajuntament de Mataró (Barcelona), PUMSA.</p><p>ARR, arquitectes, s.c.p.”, Jaume Artigues, Miquel Roig, Jordi Romero</p><p>Primer Premi del Concurs d\'Idees i encàrrec del Projecte, 1995</p><p>Obra Seleccionada de les II i III Biennals Europees del Paisatge, 2001</p><p>Obra Finalista dels Premis d\'Espais i Equipaments de Qualitat, 2002</p><p>Premi de la Primera Triennal d\'arquitectura del Maresme, 2004</p><p>1995-02</p>',
  },
  {
    src: 'images/portada/13. File0012.jpg',
    title: 'Passeig Marítim de la Barceloneta (1er Sector)',
    description: '<p>Ajuntament Barcelona, Ministerio de Obras Públicas y Medio Ambiente</p><p>Jaume Artigues, Jordi Henrich, Miquel Roig, Olga Tarrasó, Anna Mª Castañeda</p><p>Diploma d\'Enginyeria Civil dels Premis Construmat 1997.</p><p>Finalista de la “IV Bienal de Arquitectura de España 1996”, Madrid 1997</p><p>Premi FAD 1996, apartat d\'Espais Exteriors.</p><p>Finalista del Premi Rosa Barba, de la I Biennal Europea del Paisatge, 2000</p><p>Finalista dels Premis Dècada, 2005</p><p>1992-95</p>',
  },
  {
    src: 'images/portada/1718_2 copia.jpg',
    title: '12 habitatges als carrers de Riera Alta 15 i del Carme 104',
    description: '<p>Barcelona (Districte de Ciutat Vella)</p><p>Jaume Artigues i Vidal, col.laborador Stefano Cortellaro</p><p>Seleccionat pel Concurs restringit i encàrrec del projecte</p><p>2001-03</p>',
  },
  {
    src: 'images/portada/1926 10 copia 4.jpg',
    title: 'Centre d\'E. Infantil i Primària Ignasi Iglesias',
    description: '<p>GISA, D. G. de Centres Docents de la Generalitat, Cornellà de Llobregat (Barcelona)</p><p>Jaume Artigues i Vidal i Pere Riera i Jané , arquitectes</p><p>2003-07</p>',
  },
  {
    src: 'images/portada/1926 4 copia 4.jpg',
    title: 'Centre d\'E. Infantil i Primària Ignasi Iglesias',
    description: '<p>GISA, Direcció general de Centres Docents de la Generalitat, Cornellà de Llobregat (Barcelona)</p><p>Jaume Artigues i Vidal i Pere Riera i Jané , arquitectes</p><p>2003-07</p>',
  },
  {
    src: 'images/portada/1932 6 copia 4.jpg',
    title: 'Edifici de la Guàrdia Urbana del Districte de Gràcia',
    description: '<p>Ajuntament de Barcelona, BIMSA (Districte de Gràcia)</p><p>Jaume Artigues i Vidal i Pere Riera i Jané , arquitectes</p><p>2002-08</p>',
  },
  {
    src: 'images/portada/1998 Ful.jpg',
    title: 'Columna d\'enllumenat “Ful”',
    description: '<p>Escofet ®</p><p>Jaume Artigues, Pere Cabrera, arquitectes</p><p>1998-99</p>',
  },
  {
    src: 'images/portada/6 aeria Parc Central.jpg',
    title: 'Nou Parc Central de Mataró',
    description: '<p>Ajuntament de Mataró (Barcelona), PUMSA.</p><p>ARR, arquitectes, s.c.p.”, Jaume Artigues, Miquel Roig, Jordi Romero</p><p>Primer Premi del Concurs d\'Idees i encàrrec del Projecte, 1995</p><p>Obra Seleccionada de les II i III Biennals Europees del Paisatge, 2001</p><p>Obra Finalista dels Premis d\'Espais i Equipaments de Qualitat, 2002</p><p>Premi de la Primera Triennal d\'arquitectura del Maresme, 2004</p><p>1995-02</p>',
  },
  {
    src: 'images/portada/7 2010 Tavisa detall.jpg',
    title: 'Rambla del Raval',
    description: '<p>Ajuntament de Barcelona, Promoció Ciutat Vella SA.</p><p>Jaume Artigues, Pere Cabrera, arqtes, Albert Ribó, arqte tècnic</p><p>Obra Seleccionada per la II Biennal Europea del Paisatge, 2001.</p><p>1995-00</p>',
  },
  {
    src: 'images/portada/8 .080.jpg',
    title: 'Nou Parc Central de Mataró',
    description: '<p>Ajuntament de Mataró (Barcelona), PUMSA.</p><p>ARR, arquitectes, s.c.p.”, Jaume Artigues, Miquel Roig, Jordi Romero</p><p>Primer Premi del Concurs d\'Idees i encàrrec del Projecte, 1995</p><p>Obra Seleccionada de les II i III Biennals Europees del Paisatge, 2001</p><p>Obra Finalista dels Premis d\'Espais i Equipaments de Qualitat, 2002</p><p>Premi de la Primera Triennal d\'arquitectura del Maresme, 2004 </p><p>1995-02</p>',
  },
  {
    src: 'images/portada/APAER3.jpg',
    title: 'Escultura “Arbre Paer”, El Canyeret (Lleida)',
    description: '<p>Escultura commemorativa del 800 aniversari de la Paeria de Lleida</p><p>Benet Rossell, Cristina Giorgi, artistes, Jaume Artigues, arquitecte</p><p>Primer Premi del Concurs d\'Idees 1997</p><p>1997-98</p>',
  },
  {
    src: 'images/portada/Conjunt 4.JPG',
    title: 'Reforma i Ampliació del CEIP Riu Segre',
    description: '<p>GISA, Direcció general de Centres Docents de la Generalitat, (Lleida)</p><p>Jaume Artigues i Vidal i Pere Riera i Jané , arquitectes</p><p>2005-10</p>',
  },
  {
    src: 'images/portada/Conjunt 5.JPG',
    title: 'Reforma i Ampliació del CEIP Riu Segre',
    description: '<p>GISA, Direcció general de Centres Docents de la Generalitat, (Lleida)</p><p>Jaume Artigues i Vidal i Pere Riera i Jané , arquitectes</p><p>2005-10</p>',
  },
  {
    src: 'images/portada/File0001.jpg',
    title: 'Banc “Levit” ',
    description: '<p>Escofet ®</p><p>Jaume Artigues, arquitecte</p><p>1990-91</p>',
  },
  {
    src: 'images/portada/Sala3.JPG',
    title: 'Teatre Clavé de Tordera',
    description: '<p>Ajuntament de Tordera (Barcelona)</p><p>“ARR, arquitectes, s.c.p.”: Jaume Artigues, Miquel Roig, Jordi Romero</p><p>1988-99</p>',
  },
  {
    src: 'images/portada/tram.jpg',
    title: 'Jardinera “Tram”',
    description: '<p>Santa & Cole ®</p><p>Jaume Artigues, Miquel Roig, arquitectes</p><p>1993-94</p>',
  },
  {
    src: 'images/portada/5 N7X489192v1.jpg',
    title: 'Jardins del Casc Antic, Pou de la Figuera',
    description: '<p>Ajuntament de Barcelona, Foment de Ciutat Vella SA</p><p>Jaume Artigues, Pere Riera, arquitectes (GRECCAT SL)</p><p>Matteo Caravatti (Arquitectes sense Fronteres)</p><p>2006-07</p>',
  },
  {
    src: 'images/portada/1718_3 copia.jpg',
    title: '12 habitatges als carrers de Riera Alta 15 i del Carme 104',
    description: '<p>Barcelona (Districte de Ciutat Vella)</p><p>Jaume Artigues i Vidal, col.laborador Stefano Cortellaro</p><p>Seleccionat pel Concurs restringit i encàrrec del projecte</p><p>2001-03</p>',
  },
  {
    src: 'images/portada/Facana dia.JPG',
    title: 'Teatre Clavé de Tordera',
    description: '<p>Ajuntament de Tordera (Barcelona)</p><p>“ARR, arquitectes, s.c.p.”: Jaume Artigues, Miquel Roig, Jordi Romero</p><p>1988-99</p>',
  },
];

export default function Home() {
  return (
    <div className="content flat">
      <ImageGallery images={images} />
    </div>
  )
}
