




const Categories = ({category, showCategory}) => {

  return (

    <div className="btn-container">

        {category.map((cat)=>{
            return <button className="btn" type="button" key={cat} onClick={()=>{showCategory(cat)}}>{cat}</button>
        })}


    </div>
  )
}
export default Categories