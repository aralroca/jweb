import React from 'react'

type Props = {
  pdfLink: string,
  page?: number,
  section?: number
}

export default function DisplayPDF({ pdfLink, page = 1, section = 20 }: Props) {
  const controls = `#toolbar=0&navpanes=0&scrollbar=${page}&page=1&view=fitH,${section}`
  const src = pdfLink + controls

  return (
    <>
      <object data={src} type="application/pdf" style={{
        width: '100%',
        height: 'var(--main-max-height)',
        marginTop: '-30px'
      }}>
        <p>No és possible visualitzar el PDF.</p>
      </object>
      <div style={{ textAlign: 'right' }}>
        <a href={pdfLink} download>DESCARREGAR PDF</a>
      </div>
    </>
  )
}
