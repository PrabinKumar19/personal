import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const Dashboard = lazy(() => import("./components/Dashboard"));
  const Calendar = lazy(() => import("./components/Calendar"));
  const Expenses = lazy(() => import("./components/Expenses"));
  const ToDoList = lazy(() => import("./components/ToDoList"));

  return (
    <Router>
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
        {/* App Body */}
      </div>
    </Router>
  );
}

export default App;
