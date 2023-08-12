



const SingleItem = ({desc, img, price, title}) => {

  return (

    <article className="menu-item">

        <img className="img" src={img} alt={name} />

        <div className="item-info">

            <header>
                <h5>{title}</h5>
                <span className="item-price">{price}</span>
            </header>

            <p className="item-text">{desc}</p>

        </div>

    </article>

  )
}
export default SingleItem