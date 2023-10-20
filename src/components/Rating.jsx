        import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { cartState } from "../context/Context";
const Rating = ({style,onClick,rating}) => {
    const {state:{products}}=cartState()
  return (
    <div>
      {[...Array(5)].map((_,index)=>(
      <span key={index} onClick={()=>onClick(index)} style={style}>
            {rating > index ?
                <AiFillStar fontSize={"20px"} color="rgb(211, 211, 14)" />   
                :
                <AiOutlineStar fontSize={"20px"} color="rgb(211, 211, 14)" />
            }
      </span>
        ))}
    </div>
  )
}

export default Rating
