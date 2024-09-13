"use client";

import { createContext, useContext, useState } from "react";
import { Color } from "react-color";

// 0 = complementary
// 1 = analagous
type CalcMethod = "complementary" | "analagous";

type GenContextT = {
  primaryColor: Color | undefined;
  secondaryColor: Color | undefined;
  outputStyle: Array<string> | undefined;
  setPrimaryColor: Function;
  setSecondaryColor: Function;
  setOutputStyle: Function;
};

const GenContext = createContext<GenContextT | undefined>(undefined);

export const useGen = () => {
  const context = useContext(GenContext);
  if (!context) {
    throw new Error("No GenContext.Provider found when calling useGen");
  }
  return context;
};

export const GenProvider = ({ children }: { children: React.ReactNode }) => {
  const [primaryColor, setPrimaryColor] = useState<Color>();
  const [secondaryColor, setSecondaryColor] = useState<Color>();
  const [outputStyle, setOutputStyle] = useState<Array<string>>();

  return (
    <GenContext.Provider
      value={{
        primaryColor,
        secondaryColor,
        outputStyle,
        setPrimaryColor,
        setSecondaryColor,
        setOutputStyle,
      }}
    >
      {children}
    </GenContext.Provider>
  );
};
