# React Native
## Installing dependencies
- Node, Watchman installation
    
        brew install node watchman

- React Native CLI

        npm install -g react-native-cli


## Creating a New Application
- Creating new application with latest version

        react-native init demo

- With specific version

        react-native init demo --version X.XX.X
        react-native init demo --version react-native@next
- Running native application

        react-native run-ios
- Installing developer tools

        npm install -g react-devtools

## Running Native app
- Run IOS

        react-native run-ios

- Run Android

        react-native run-android

- Cache issue Run

        npm start -- --reset-cache

## Hot Keys

- IOS

        Reaload - cmd+R
        Debug - cmd+D
- Android

        Reload - Double press R
        Debug - cmd+m

## Eslint setup

        npm i -D eslint babel-eslint eslint-plugin-react

## React-Devtools

        npm i -g react-devtools

## Reset commands

        rm -rf /tmp/metro-bundler-cache-*
        rm -rf node_modules && npm install
        npm start -- --reset-cache