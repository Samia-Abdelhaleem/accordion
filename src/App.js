import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import FAQS from "./data";

function App() {
  const [currentOPen, setCurrentOPen] = useState(null);
  return (
    <div className="accordion">
      {FAQS.map((faq) => (
        <Accordion
          faq={faq}
          key={faq.num}
          currentOPen={currentOPen}
          onOPen={setCurrentOPen}
        />
      ))}
    </div>
  );
}

export default App;
