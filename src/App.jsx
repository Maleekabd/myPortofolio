import './App.css'
import Landingpage from './components/landingpage'
import Card from './components/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import About from './components/About'
import { AboutMeSpec } from './components/About'
import Frontend from './components/Frontend'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <>
                        <header>
                            <Navbar />
                        </header>
                        <main>
                            <Landingpage />
                            <About />
                            <Timeline />
                            <Card />
                        </main>
                        <footer>
                            <Contact />
                            <Footer />
                        </footer>
                    </>
                } />
                <Route path='/about' element={
                    <>
                        <main>
                            <AboutMeSpec />
                        </main>
                        <footer>
                            <Footer />
                        </footer>
                    </>
                } />
                <Route path='computer-network-projects' element={
                    <>
                        <Footer />
                    </>
                } />
                <Route path='/frontend-react-projects' element={
                    <>
                        <main>
                            <Frontend />
                        </main>
                        <footer>
                            <Footer />
                        </footer>
                    </>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App
