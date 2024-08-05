import React from "react";

export default function Footer(props) {
  return (
    <div className="footer_sec">
      <p>Copyright &#169; {props.currYear}</p>
    </div>
  );
}
