import React from "react";

const style = {
  text: {
    textAlign: "center"
  }
}

const NavBar = props => (
  <header style={style.text} className="header">
    <nav className="gameBar">
      <h3 className="center" title="Home">Final Fantasy Clicky-Game!<br />
        Status: {props.status}<br />
        Score: {props.currentScore} {" "}
        Top Score: {props.topScore}</h3>
    </nav>
  </header>
)

export default NavBar;