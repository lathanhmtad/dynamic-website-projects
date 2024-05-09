import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import ViewEmployee from './components/ViewEmployee';
import CreateOrUpdate from './components/CreateOrUpdate';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<ListEmployee />}></Route>
          <Route path='/employees' element={<ListEmployee />}></Route>
          <Route path='/create-or-update-employee/:id' element={<CreateOrUpdate />}></Route>
          <Route path='/view-employee/:id' element={<ViewEmployee />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>

  )
}

export default App;
