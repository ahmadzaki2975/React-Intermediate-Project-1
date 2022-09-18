import { Link } from "react-router-dom"
import { showFormattedDate } from "../utils/dateFormat"
import { textCut } from "../utils/textCut"

export const Note = (props) => {
  return(
    <div className="bg-white text-black p-2 rounded ">
      <h1 className="text-2xl font-semibold">{props.title}</h1>
      <p className="">
        {textCut(props.body, 90)} 
        <br />
        <Link to={"/notes/" + props.id}>
        <span className="underline text-blue-primary">See more</span>
        </Link>
      </p>
      <div className="w-[80%] h-[2px] bg-black my-1"></div>
      <p>
        {showFormattedDate(props.createdAt)}
      </p>
    </div>
  )
}