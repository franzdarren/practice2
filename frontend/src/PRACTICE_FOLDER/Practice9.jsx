import { useState } from "react"

export default function Practice() {

    const likesNow = 67
    // const [likes, setLikes] = useState(67)
    const [liked, setLiked] = useState(false)

  return (
    <div>
        <h1>{liked ? likesNow + 1: likesNow}</h1>
        <h2>{liked.toString()}</h2>
      <button onClick={()=>setLiked(liked ? false : true)} >{liked ? "unlike" : "like"}</button>
    </div>
  )
}