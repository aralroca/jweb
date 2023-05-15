import Link from 'next/link'
import React from 'react'

type Props = {
  pdfLink: string,
  page?: number,
  section?: number
  name?: string
}

export default function DisplayPDF({ pdfLink, page = 1, section = 20, name }: Props) {
  const controls = `#toolbar=0&navpanes=0&scrollbar=${page}&page=1&view=fitH,${section}`
  const src = pdfLink + controls
  const style = {
    width: '100%',
    height: 'var(--main-max-height)',
    marginTop: '-30px'
  }

  return (
    <>
      <object data={src} type="application/pdf" style={style}>
        <embed src={src} type="application/pdf" style={style} />
      </object>
      <div style={{ textAlign: 'right' }}>
        <Link style={{ fontSize: 12 }} href={`/descarregar?pdf=${pdfLink}&name=${name}`} download>DESCARREGAR PDF</Link>
      </div>
    </>
  )
}
