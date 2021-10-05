import { AppRegistry, Platform, UIManager } from 'react-native';

import { App } from './src/App';

//!android ozel kod ios`ta patlar
if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true)

AppRegistry.registerComponent('milyonuncuproje', () => App);
