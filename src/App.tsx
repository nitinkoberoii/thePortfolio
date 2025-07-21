import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./components/screens/home/HomeScreen";
import ProjectsScreen from "./components/screens/projects/ProjectsScreen";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => (
  <Router>
    <div className="relative min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="pt-16 md:pl-16">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  </Router>
  );

export default App;
