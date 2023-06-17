import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ModalDemo from "./pages/ModalDemo";
import NestRouting from "./pages/NestRouting";
import Book from "./pages/Book";
import BookList from "./pages/BookList";
import Game from "./pages/Game";

export default function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="modal" element={<ModalDemo />} />
                <Route path="net-routing" element={<NestRouting />}>
                    <Route index element={<BookList />} />
                    <Route path="book" element={<Book />} />
                    <Route path=":id" element={<Game />} />
                </Route>
            </Routes>
        </>
    );
}
