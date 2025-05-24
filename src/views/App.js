import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, Bounce } from "react-toastify";
import MyComponent from "./example/MyComponent";
import Nav from "./Home/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./example/Home";
import HomeWrapper from "./example/HomeWrapper";
import ListUser from "./example/Users/ListUser";
import DetailUser from "./example/Users/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
