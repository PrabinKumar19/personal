import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./pages/Login";
import "./App.css";

function App() {
  const [user, loading] = useAuthState(auth);

  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const Calendar = lazy(() => import("./pages/Calendar"));
  const Expenses = lazy(() => import("./pages/Expenses"));
  const ToDoList = lazy(() => import("./pages/ToDoList"));

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Sidebar />
          <div className="app-body">
            <Header />
            <Suspense fallback={<>Loading...</>}>
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/calendar" exact element={<Calendar />} />
                <Route path="/expenses" exact element={<Expenses />} />
                <Route path="/todolist" exact element={<ToDoList />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
