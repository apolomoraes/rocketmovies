import { Routes, Route } from 'react-router-dom'


import { Create } from '../pages/Create'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Preview } from '../pages/Preview'
import { NotFound } from '../pages/NotFound'


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}