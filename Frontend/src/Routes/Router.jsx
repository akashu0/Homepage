import React, { createContext, useState } from 'react'
import { useNavigate, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Featurepage1 from '../Pages/Featurepage1';
import Featurepage2 from '../Pages/Featurepage2';
import ErrorPage from '../Pages/ErrorPage';
import ErrorBoundary from '../Components/ErrorBoundary';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

export const AuthContext = createContext()

const Router = () => {
  const [User, setUser] = useState({ name: "", email: "", auth: "" });
  return (
    <Routes>

      <Route path='/' element={
                              <ErrorBoundary>
                                <AuthContext.Provider value={{ User, setUser }}>
                                  <Home />
                                </AuthContext.Provider>
                              </ErrorBoundary>
      } />
      <Route path='/features' element={ <Featurepage1 />  } />

      <Route path='/Multifeatures' element={<Featurepage2 />} />


      <Route path='/login' element={
                                    <AuthContext.Provider value={{ User, setUser }}>
                                      <Login />
                                    </AuthContext.Provider>} />
      <Route path='/signup' element={<Signup />} />

      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default Router