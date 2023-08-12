import { useState } from "react"




const SingleItem = ({desc, img, price, title}) => {

  let [readMore, setReadMore] = useState(true)

  return (

    <article className="menu-item">

        <img className="img" src={img} alt={name} />

        <div className="item-info">

            <header>
                <h5>{title}</h5>
                <span className="item-price">{price}</span>
            </header>

            <p className="item-text">
              
              {/* display a substring based on the state value (conditional rendering) */}
              {readMore ? desc.substring(0,50) : desc }

              {/* display the text of the button based on state value */}
              <button onClick={() =>{setReadMore(!readMore)}} className="read-more" type="button">{readMore ? '... read more' : '... less'}</button>


            </p>

        </div>

    </article>

  )
}
export default SingleItem