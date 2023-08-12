
import { useState } from 'react';
import MenuList from './components/MenuList';
import Title from './components/Title';
import menu from './data';
import Categories from './components/Categories';


// set up unique menu categories (using set object)

let allCategories = ['all', ...new Set(menu.map(item => item.category))];

// console.log(allCategories);


const App = () => {

  let [menuItem, setMenuItem] = useState(menu); //<<-- state value representing the complete menu items
  // console.log(menuItem);

  let [category, setCategory] = useState(allCategories); //<<-- state value representing the (unique) product categories
  // console.log(category);


  let showCategory = (category) =>{

    // early return
    if(category === 'all'){
      setMenuItem(menu);
      return
    };

    const uniqueCat = menu.filter((item)=>{
      return item.category === category;
    });

    setMenuItem(uniqueCat);

  }

  return(
    <main>
     <section className="menu">

        <a href="https://my-work-expression.netlify.app/react#project">Back to React Project</a>

        <Title text='our menu'/>

        <Categories category={category} showCategory={showCategory}/>

        <MenuList menuItem={menuItem}/>

     </section>


    </main>
  )


};
export default App;
