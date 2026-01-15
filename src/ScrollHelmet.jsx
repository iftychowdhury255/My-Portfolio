import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ScrollHelmet = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

const getTitle = () => {
  switch (activeSection) {
    case "home":
      return "Home | Iftekher Chowdhury";
    case "about":
      return "About | Iftekher Chowdhury";
    case "service":
      return "Service | Iftekher Chowdhury";
    case "contact":
      return "Contact | Iftekher Chowdhury";
  }
};


  return (
    <Helmet>
      <title>{getTitle()}</title>
      <meta name="description" content={`Currently viewing: ${activeSection}`} />
      <link rel="icon" type="image/png" href='/vite.svg' />
    </Helmet>
  );
};

export default ScrollHelmet;
