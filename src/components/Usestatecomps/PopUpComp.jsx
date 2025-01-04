import React from "react";
import { createPortal } from "react-dom";

const PopUpComp = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copied!
        </div>
      )}
    </section>, 
    document.querySelector("#pop-up")
  );
};

export default PopUpComp;
