import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import ShowBooks from "../features/books/showBooks"
import Navbar from "../layouts/navbar"
import Error from "../pages/error"
import EditBook from "../features/books/editBook"
import Footer from "../layouts/footer"

const Index = () => {
    return <BrowserRouter>
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/show-books" element={<ShowBooks />} />
                <Route path="/eidt-book/" element={<EditBook />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
        <Footer />

    </BrowserRouter>
}

export default Index;