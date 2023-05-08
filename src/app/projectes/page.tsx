import Image from "next/image";
import { projectCategories, projects } from "../constants/default-data";
import Link from 'next/link'
import fs from 'fs/promises'
import ImageGallery from "../components/ImageGallery";

async function getProjectImages(projectId: number) {
  const prefix = '/images/projectesiobres/'
  const images = await fs.readdir(`public${prefix}${projectId}`).catch(() => []);
  return images.map(image => `${prefix}${projectId}/${image}`);
}

export default async function Projects({ searchParams: { id } }: { searchParams: { id: string } }) {
  const idParam = parseInt(id, 10);
  const selectedProject = projects.find(project => project.id === idParam);
  const images = selectedProject ? await getProjectImages(selectedProject.id) : [];

  return (
    <div className="content projects">
      <div>
        {projectCategories.map((category, index) => (
          <dl key={index}>
            <dt>{index + 1}. {category.name}</dt>
            {projects
              .filter(project => project.category === category.id)
              .map((project) => (
                <dd key={`project-${project.id}`}>
                  <Link
                    href={project.id == idParam ? '/projectes' : `/projectes?id=${project.id}`}
                    className={project.id == idParam ? 'active' : ''}
                  >
                    {project.name}
                  </Link>
                </dd>
              ))}
          </dl>
        ))}
      </div>
      <aside className="sticky">
        {selectedProject && (
          <>
            <h2 className="sticky" style={{ fontSize: 14, paddingTop: 10 }}>{selectedProject.name}</h2>
            <ImageGallery images={images.map(src => ({ src }))} fullScreen={false} style={{
              position: 'sticky',
              top: 37,
            }} />
            <Link style={{ position: 'sticky', top: 290, width: '100%', textAlign: 'right', fontSize: 12 }} href="/download?">
              Descarregar PDF
            </Link>
          </>
        )}
        {!selectedProject && (
          <Image
            src="/images/portada.jpg"
            alt="Projectes i obres"
            width="450"
            height="403"
            style={{ maxWidth: '100%', paddingTop: 10 }}
            className="sticky"
            loading="lazy"
          />
        )}
      </aside>
    </div>
  )
}
