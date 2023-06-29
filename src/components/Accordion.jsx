import React, { useState } from "react";

const Accordion = ({ faq, currentOPen, onOPen }) => {
  const { num, title, text } = faq;
  const isOpen = currentOPen === num;
  const isOpenClass = isOpen ? "open " : "";

  return (
    <div className={` ${isOpenClass} item`}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={() => onOPen(() => (isOpen ? null : num))}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && (
        <div className="content-box">
          <p className="text">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
