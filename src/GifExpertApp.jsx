import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['Mashle','Dragon ball'])
  
  const onAddCategory = () => {
    setCategories(['solo leveling',...categories])
    
  }

  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>

    
    {/* Input */}
    <AddCategory />


    {/* Listado de Gifs */}
    <button onClick={ onAddCategory }> Agregar </button>
    <ol>
      { categories.map(category => {
        return <li key = { category } >{ category }</li>
      }) }
      {/* <li>abc</li> */}

    </ol>
      {/* Gif Item  */}
    </>
  )
}
