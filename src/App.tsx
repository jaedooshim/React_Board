/* eslint-disable */
import React from 'react';
import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Board from "./components/pages/Board";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

function App() {
    const navigate = useNavigate()
    const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
    <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-lg-0" >
                    <Nav.Link onClick={() => {navigate('/')}}>메인</Nav.Link>
                    <Nav.Link onClick={() => {navigate('/signup')}}>회원가입</Nav.Link>
                    <Nav.Link onClick={() => {navigate('/signing')}}>로그인</Nav.Link>
                    <Nav.Link onClick={() => {navigate('/board')}}>게시판</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

      <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signing' element={<Login/>}/>
          <Route path='/board' element={<Board/>}/>
      </Routes>
    </div>
          <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}

export default App;
