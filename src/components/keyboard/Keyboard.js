import React from "react";

const Keyboard = () => {
  const keyboardLayout = {
    row0: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace"],
    row1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    row2: ["caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter"],
    row3: ["done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?"] ,
    row4: ["space"],
  };

  return (
    <div className="contianer">
      {
        for( item of keyboardLayout){
            console.log(item)
        }
      }
    </div>
  );
};

export default Keyboard;
