import React from 'react';
import ScrollHelmet from "./ScrollHelmet";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/home/Hero';
import About from './pages/About';       
import WhatsAppButton from './Components/whatsapp/WhatsAppButton';
import ProfessionalCourse from './pages/ProfessionalCourse';
import Projects from './pages/Projects';


const App = () => {
  return (
    <>
      <ScrollHelmet />
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="service"><ProfessionalCourse /></section>
        <section id="contact"><Projects /></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;
