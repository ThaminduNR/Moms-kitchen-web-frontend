
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/HomePage'

const AppRoutes = () => {
  return (
   <Routes>
        <Route path='/' element={<Layout><HomePage/></Layout>}></Route>
        <Route path='/user-profile' element={<span>USER-PROFILE Page</span>}></Route>
        <Route path='/user-profile' element={<span>USER-PROFILE Page</span>}></Route>
        <Route path='*' element={<Navigate to={"/"}/>}/>
   </Routes>
  )
}

export default AppRoutes