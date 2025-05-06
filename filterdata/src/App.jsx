import './App.css'
import Card from './Components/card'
import Filter from './Components/filter'
import products from './data/products'
import { useState} from 'react'

function App() {
  
  // let [selectCategory, setSelectCategory] = useState();
  // let [filterCard, setFilterCard] = useState(products);

  // useEffect(() => {
  //   if(selectCategory)
  //   {
  //     setFilterCard(products.filter((i) => i.category === selectCategory))
  //   }

  // }, [selectCategory])

  let [search, setSearch] = useState("all");

  let filterCard = search === "all" 
    ? products
    : products.filter((i) => i.category.toLowerCase().includes(search.toLowerCase()));


  return (
    <>
      <Filter searchProduct={setSearch}/>
      <div className='container'>
        {
          filterCard.map((e) => {
            return <Card imgSrc={e.image} price={e.price} category={e.category}/>
          })  
        }
        
      </div>
    </>
  )
}

export default App
