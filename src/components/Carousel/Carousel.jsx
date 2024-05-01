import { useState } from "react"
import "./Carousel.css"

export const Carousel = () => {
  const images = ["perro1.jpg", "gato1.jpg", "hamster1.jpg"]
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])

  const selectNewImage = (index, images, pepo = true) => {
    const condition = pepo ? selectedIndex < images.length - 1 : selectedIndex > 0
    const nextIndex = pepo ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex)
  }

    const previous = () => {
      selectNewImage(selectedIndex, images, false)
    }

    const next = () => {
      selectNewImage(selectedIndex, images)
    }

  return(
    <>
      <div className="container">
        <img src={(`assets/img/${selectedImage}`)} alt="Fotitos"/>
        <button className="left" onClick={previous}>{"<"}</button>
        <button className="right" onClick={next}>{">"}</button>
      </div>
    </>
  )
}
