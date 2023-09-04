import { Dimensions } from "react-native";
const {height, width} = Dimensions.get('window')

const COLORS = {
    primary: "#2a4d5a",
    secondary: "#ddf0ff",
    tertiary: "ff7754",

    gray: "#03029a",
    gray2: "#c1c0c0",

    offwhite: "#f3f4f8",
    white: "#fffff",
    black: "#000000",
    red: "#c81e4d",
    green: "#00c135",
    lightWhite:"#fafafc",
};

const SIZES = {
    XSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge:24,
    xxLarge:44,
    height,
    width
}

const SHADOWS = {
    small: {
        shadowColor:"#000",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    }
}


export {COLORS, SIZES, SHADOWS}