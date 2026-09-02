import { useState, useEffect } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 999,
        width: "50px",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        backgroundColor: "#161b26",
        color: "#ffffff",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      title="Scroll to Top"
    >
      <i className="far fa-angle-up" />
    </div>
  );
}
