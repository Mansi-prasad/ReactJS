import React from "react";
import "../App.css";
import { useState, useCallback, useEffect, useRef } from "react";
export default function PasswordGenerator() {
  const [length, setlength] = useState(8);
  const [AllowNumber, setAllowNumber] = useState(false);
  const [AllowedChar, setAllowedChar] = useState(false);
  const [Password, setPassword] = useState(false);
  // returns a memoized callback function( preventing unnecessary re-creations of function)
  const Passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (AllowNumber) {
      str += "0123456789";
    }
    if (AllowedChar) {
      str += "!@#$%^&*(){}[]_+~`";
    }
    // loop runs for the desired password length(default is 8)
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [AllowedChar, AllowNumber, setPassword, length]);
  //useeffect accept callback and dependencies(runs the Passwordgenerator() function if their dependencies change)
  useEffect(() => {
    Passwordgenerator();
  }, [length, AllowedChar, AllowNumber, Passwordgenerator]);
  // useRef Hook(to highlight the password we use passRef)
  const passRef = useRef(null); //passRef is a reference, refer to the password input field. This allows to select the password text for copying.

  const copyPassToClipboard = useCallback(() => {
    //select the password text and copies it to the clipboard(a temporary storage area).
    passRef.current?.select();
    // to select particular length
    // passRef.current?.setSelectionRange(0, 4);
    // window obj is present where we run this code.
    // copy the text from clipboard..
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  return (
    <div className="container">
      <h2 className="title">Password Generator</h2>
      <div>
        <div className="password-section">
          <input
            id="password"
            type="text"
            value={Password}
            placeholder="password"
            ref={passRef}
            readOnly
          ></input>
          <button type="button" id="copy-btn" onClick={copyPassToClipboard}>
            Copy
          </button>
        </div>
        <div className="criteria">
          <div className="lengthRange">
            <input
              type="range"
              id="length"
              min={8}
              max={40}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="numbers">
            <input
              type="checkbox"
              id="number"
              defaultChecked={AllowNumber}
              onChange={() => {
                setAllowNumber((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="characters">
            <input
              type="checkbox"
              id="checkbox"
              defaultChecked={AllowedChar}
              onChange={() => {
                setAllowedChar((prev) => !prev);
              }}
            />
            <label htmlFor="checkbox">Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}
