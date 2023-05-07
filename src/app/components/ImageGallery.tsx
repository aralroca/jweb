/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react"

type Image = {
  src: string,
  alt: string,
  title: string,
  description: string,
}

type Props = {
  images: Image[],
  milliseconds?: number,
}

const imageStyle: React.CSSProperties = {
  objectFit: 'cover',
  width: '100%',
  height: 'var(--main-max-height)',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
}

const figcaptionStyle: React.CSSProperties = {
  position: 'absolute',
  top: -30,
  padding: '10px 13px',
  left: 10,
  color: 'white',
  backgroundColor: 'black',
  textAlign: 'center',
  opacity: 0.7,
  transform: 'translateY(-100%)',
  transition: 'transform 0.3s ease-in-out',
}

const activeStyle = {
  opacity: 1,
  transform: 'translateY(0)',
}

export default function ImageGallery({ images, milliseconds = 5000 }: Props) {
  const [activeImage, setActiveImage] = useState<boolean>(true)
  const [activeFigcaption, setActiveFigcaption] = useState<boolean>(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const image = images[currentIndex]

  useEffect(() => {
    let transitionTimeout: ReturnType<typeof setTimeout>
    let figcaptionTimeout: ReturnType<typeof setTimeout>
    const interval = setInterval(loadNextImage, milliseconds)

    function loadNextImage() {
      clearTimeout(transitionTimeout)
      clearTimeout(figcaptionTimeout)
      setActiveFigcaption(false)
      setActiveImage(false)
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length)
      transitionTimeout = setTimeout(() => setActiveImage(true), 300)
      figcaptionTimeout = setTimeout(() => setActiveFigcaption(true), 600)
    }

    return () => {
      clearInterval(interval)
      clearTimeout(transitionTimeout)
      clearTimeout(figcaptionTimeout)
    }
  }, [milliseconds, images.length])

  return (
    <figure style={{ marginTop: -50 }}>
      <img
        src={image.src}
        alt={image.alt}
        style={{ ...imageStyle, ...(activeImage ? activeStyle : {}) }}
      />
      <figcaption style={{ ...figcaptionStyle, ...(activeFigcaption ? activeStyle : {}) }}>
        <h3 style={{ fontSize: 13 }}>
          {image.title}
        </h3>
        <div style={{ fontSize: 10 }}>
          {image.description}
        </div>
      </figcaption>
    </figure>
  )
}
