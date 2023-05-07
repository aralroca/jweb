const contactInfo = `
Jaume Artigues i Vidal, arquitecte 
N.I.F. 46 107 722-J
Domicili professional a 08002 Barcelona, Plaça Ramon Berenguer no 1, 3er, 2a
Telèfon (93) 3199297
Correu electronic: arr@arquired.es
`

const style = {
  fontSize: '16px',
  lineHeight: '24px',
}

export default function Contact() {
  const replaceNewLinesToParagraphs = (text: string) => {
    return text.split('\n').map((line, index) => { return <p key={index}>{line}</p> })
  }

  return (
    <div className="content" style={style}>{replaceNewLinesToParagraphs(contactInfo)}</div>
  )
}
