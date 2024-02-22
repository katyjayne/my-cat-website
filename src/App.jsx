import { useEffect, useState } from 'react'
import './App.css'
import RandomPic from './components/RandomPic'
import SelectBreed from './components/SelectBreed'


function App() {
  const[catImgUrl, setCatImgUrl] = useState('')
  const [selectedBreed, setSelectedBreed] = useState('')

  useEffect(() => {
    async function getRandomImage() {
      const response = await fetch('https://api.thecatapi.com/v1/images/search')
      const result = await response.json()
      setCatImgUrl(result[0].url)
    }
    getRandomImage()
  }, [])

  const updateImage = async() => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search')
    const result = await response.json()
    setCatImgUrl(result[0].url)
  }

  return (
    <>
      {/* make an input that selects a specific cat breed with hard-coded options*/}
      <SelectBreed selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
      {/* record the cat breed in the App component state */}
      {/* if we are searching for a specific breed, apply that criteria to the fetch request */}
      {/* then, fetch the breeds list and update the input to use the list of available breeds */}
      <RandomPic imgUrl={catImgUrl} refetchFunction={updateImage}/>
    </>
  )
}

export default App
