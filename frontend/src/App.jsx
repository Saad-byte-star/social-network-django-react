import './App.css'
import { Routes , Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Posts from './components/Posts'
import Profile from './components/Profile'
import Following from './components/Following'
import { useState } from 'react'
import CreatePost from './components/CreatePost'
import Search from './components/Search'
import Register from './components/Register'
import Login from './components/Login'



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
            <Route path='/posts/all' element={<Posts/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/posts/following' element={<Following/>} />
            <Route path='/create' element={<CreatePost/>} />  
            <Route path='/search' element={<Search/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
