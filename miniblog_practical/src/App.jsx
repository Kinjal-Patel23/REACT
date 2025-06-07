import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBlogForm from './components/AddBlogForm';
import BlogList from './components/BlogList';

function App() {

  return (
    <>

  
      <Router>
        <Routes>
          <Route path='/' element={<AddBlogForm/>}/>
          <Route path='/BlogList' element={<BlogList/>}/>
        </Routes>
      </Router>
      
    
      
    </>
  )
}

export default App
