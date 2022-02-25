keyboardLayout.map((row, rowIndex) => {
    row[`row${rowIndex}`].map((key, keyIndex) => {
      let buttonKey = document.createElement("button");
      buttonKey.setAttribute("key", keyIndex);
      buttonKey.id = key;
      buttonKey.innerHTML = key;

      console.log(buttonKey)
      return buttonKey;
    });
  })