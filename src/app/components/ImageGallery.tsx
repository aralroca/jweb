/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react"

type Image = {
  src: string,
  title: string,
  description: string,
}

type Props = {
  images: Image[],
  milliseconds?: number,
}

const top = -30

const imageStyle: React.CSSProperties = {
  objectFit: 'cover',
  width: '100%',
  height: `calc(var(--main-max-height) + ${-top}px)`,
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
}

const figcaptionStyle: React.CSSProperties = {
  position: 'absolute',
  top,
  padding: '10px 13px',
  left: 10,
  color: 'white',
  opacity: 0.7,
  width: 410,
  maxWidth: 'calc(100% - 20px)',
  backgroundColor: 'black',
  textAlign: 'center',
  transform: 'translateY(-100%)',
  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
}

export default function ImageGallery({ images, milliseconds = 5000 }: Props) {
  const [activeImage, setActiveImage] = useState<boolean>(true)
  const [activeFigcaption, setActiveFigcaption] = useState<boolean>(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const image = images[currentIndex]

  useEffect(transitionInImage, [currentIndex])
  function transitionInImage() {
    let transitionInImage: ReturnType<typeof setTimeout>
    let figcaptionTimeout: ReturnType<typeof setTimeout>

    transitionInImage = setTimeout(() => setActiveImage(true), 300)
    figcaptionTimeout = setTimeout(() => setActiveFigcaption(true), 600)

    return () => {
      clearTimeout(transitionInImage)
      clearTimeout(figcaptionTimeout)
    }
  }

  useEffect(transitionOutImage, [milliseconds, images.length])
  function transitionOutImage() {
    let transitionOutImage: ReturnType<typeof setTimeout>
    const interval = setInterval(loadNextImage, milliseconds)

    function loadNextImage() {
      clearTimeout(transitionOutImage)
      setActiveFigcaption(false)
      setActiveImage(false)
      transitionOutImage = setTimeout(() => {
        setCurrentIndex(currentIndex => (currentIndex + 1) % images.length)
      }, 300)
    }

    return () => {
      clearInterval(interval)
      clearTimeout(transitionOutImage)
    }
  }

  return (
    <figure style={{ marginTop: top }}>
      <img
        src={image.src}
        alt={image.title}
        style={{ ...imageStyle, ...(activeImage ? { opacity: 1 } : {}) }}
      />
      <figcaption style={{ ...figcaptionStyle, ...(activeFigcaption ? { transform: 'translateY(0)' } : {}) }}>
        <h3 style={{ fontSize: 13 }}>
          {image.title}
        </h3>
        <div style={{ fontSize: 10 }} dangerouslySetInnerHTML={{ __html: image.description }} />
      </figcaption>
    </figure>
  )
}
