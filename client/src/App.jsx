import React from 'react'
import Home from './pages/Home/Home'
import Header from './components/Header'
import Properties from './pages/Properties'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Profile from './pages/Auth/Profile';

const App = () => {
  return (
    <BrowserRouter>
    
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/properties' element={<Properties />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
