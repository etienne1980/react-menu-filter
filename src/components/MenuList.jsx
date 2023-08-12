import SingleItem from "./SingleItem"



const MenuList = ({menuItem}) => {

  return (

    <div className='section-center'>

        {menuItem.map((item)=>{
            // console.log(item);

            return <SingleItem {...item} key={item.id}/>

        })}
    </div>
  )
}
export default MenuList