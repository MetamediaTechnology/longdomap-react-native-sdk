Here’s an improved guide for using the Longdo Map React Native SDK in TypeScript based on the changelog and setup:

## Longdo Map React Native Component
####  Ref: Longdo Map React Native GitHub

This guide shows how to integrate Longdo Map into a React Native project with TypeScript support. <hr>

###  Changelog
Version 0.1.1
- Added support for Expo version 52 and above
- TypeScript support added
- Upgraded dependencies to React >= 18.0.0 and React Native >= 0.71.0

### Quick Start
1. Create a New Project
If you’re starting a new project, you can quickly create it using the following command:
```bash
npx create-expo-app@latest
```
For more details, refer to the official React Native setup [documentation.](https://reactnative.dev/docs/environment-setup "documentation.")

2. Install the longdomap-react-native-sdk Package
You can install the package using your preferred package manager:
```bash
npm install longdomap-react-native-sdk --save
```
[optional]
```bash
npm add longdomap-react-native-sdk --save
```
[optional]
```bash
yarn add longdomap-react-native-sdk --save
```
3. Import the Package
To use the Longdo Map in your project, you’ll need to import the package:
```typescript
import Longdo from "longdomap-react-native-sdk";
```
4. Set your API KEY
```typescript
import Longdo from "longdomap-react-native-sdk";
export default function App() {
  Longdo.apiKey = "YOUR_MAP_API_KEY";
  // Rest of your code
}
```
5. Use the Map Component
You can now use the `Longdo.MapView` component to display the map:
```typescript
return (
  <Longdo.MapView
    ref={(r: any) => {
      // Handle map reference here if needed
    }}
    zoom={15} // Initial zoom level
    onReady={() => {
      // Callback when the map is ready
    }}
    onClick={(location: any) => {
      // Handle click events and access location data
      console.log({ location });
    }}
    onLocation={async () => {
      // Fetch and handle map location updates
    }}
    onDrag={async () => {
      // Handle map drag events
    }}
  />
);
```

This setup will help you integrate Longdo Map into your React Native project using TypeScript, ensuring you have up-to-date support for Expo and React Native versions.