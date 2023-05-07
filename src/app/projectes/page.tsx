import Image from "next/image";

export default function Projects() {
  return (
    <div className="content" style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>Projectes i obres</h1>

      </div>
      <aside className="sticky">
        <Image
          src="/images/portada.jpg"
          alt="Projectes i obres"
          width="450"
          height="403"
          style={{ maxWidth: '100%' }}
          className="sticky"
          loading="lazy"
        />
      </aside>
    </div>
  )
}
