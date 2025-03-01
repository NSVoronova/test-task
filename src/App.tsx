import { Route, Routes } from 'react-router-dom'
import './App.scss'
import MainPage from './pages/MainPage'

function App() {

  return (
    <Routes>
       <Route
          path='/test-task'
          element={
           <MainPage/>
          }
        />
    </Routes>
  )
}

export default App
