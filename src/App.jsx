import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Magnitude from './pages/Magnitude'
import Felt from './pages/Felt'
import Layout from './components/Layout/Layout'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/magnitude' element={<Magnitude />} />
          <Route path='/felt' element={<Felt />} />
        </Route>
      </Routes>
  )
}

export default App;
