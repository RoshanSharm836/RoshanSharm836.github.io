import React from "react";

export default function Mail() {
  return (
    <form className="contact-form" action="">
      <input type="text" placeholder="name"></input>
      <input type="mail" placeholder="gmail"></input>
      <input type="number" placeholder="number"></input>
      <textarea placeholder="Message..." rows="5"></textarea>
      <button className="btm">submit</button>
    </form>
  );
}
