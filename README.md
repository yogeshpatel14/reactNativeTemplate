# NewWeatherReactNative

Create project in react native

# Build Apk without open android studio:

1.mkdir android/app/src/main/assets

2.react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

