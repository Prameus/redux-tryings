import { getStatusBarHeight } from './getStatusBarHeight'
import { Dimensions } from 'react-native';

export const window = Dimensions.get('window')
export const screen = Dimensions.get('screen')

export const w = window.width
export const h = window.height

export const W = d => w * d / 100
export const H = d => h * h / 100

//export const sbhi = getStatusBarHeight(true)