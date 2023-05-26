import { useParams } from "react-router-dom"

const SingleVideo = () => {
  const params = useParams();
  console.log(params.video)
  return (
    <div>SingleVideo</div>
  )
}

export default SingleVideo