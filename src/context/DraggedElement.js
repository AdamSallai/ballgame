import React, {createContext, useState} from "react";

export const DraggedContext = createContext();

export const DraggedProvider = (props) => {
  const [element, setElement] = useState("")

  return (
    <DraggedContext.Provider value={[element, setElement]}>
      {props.children}
    </DraggedContext.Provider>
  )

}
