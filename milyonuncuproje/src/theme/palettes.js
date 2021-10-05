import { allColors } from "./colors";

export const light = {
    blue: allColors.blue,
    black: allColors.black
}

export const night = {
    blue: allColors.blue,
    black: allColors.black
}

export const getPallete = name => {
    switch (name) {
        case 'light':
            return light

        case 'light':
            return night
        default:
            light;
    }
}