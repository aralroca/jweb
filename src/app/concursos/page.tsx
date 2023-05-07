import Image from "next/image";

export default function Concursos() {
  return (
    <div className="content" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: 1 }}>
        <h1>Concursos</h1>

      </div>
      <aside className="sticky">
        <Image
          src="/images/portada.jpg"
          alt="Concursos"
          style={{ maxWidth: '100%' }}
          width="450"
          height="403"
          className="sticky"
          loading="lazy"
        />
      </aside>
    </div>
  )
}
