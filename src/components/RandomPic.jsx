import { Button } from "@mui/material"
import './RandomPic.css'

function RandomPic({imgUrl , refetchFunction}) {
  return(
    <>
      <img className="random-pic" src={imgUrl} />
      <br></br>
      <Button onClick={refetchFunction} variant="outlined">New Cat</Button>
    </>
  )
}

export default RandomPic