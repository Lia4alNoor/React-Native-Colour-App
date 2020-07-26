import { useState, useEffect } from "react";
import { generate } from "shortid";
import { AsyncStorage } from "react-native";
export const useColors = () => {
  const [colors, setColors] = useState([]);
  const loadColors = async () => {
    const colorData1 = await AsyncStorage.getItem(
      "@ColorListStore:Colors1"
    );
    if (colorData1) {
      const colors = JSON.parse(colorData1);
      setColors(colors);
    }
  };

  useEffect(() => {
    if (colors.length) return;
    loadColors();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(
      "@ColorListStore:Colors1",
      JSON.stringify(colors)
    );
  }, [colors]);

  const addColor = color => {
    const newColor = { id: generate(), color };
    setColors([newColor, ...colors]);
  };
  return { colors, addColor };
};
