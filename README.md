# 컴포넌트 디자인

**다양한 웹 엘리먼트를 디자인하고, 재사용할 수 있도록 컴포넌트화 해 놓은 프로젝트**

### 주요 스펙
 - React, Typescript, storybook

### 디렉터리 구조


### 디플로이 경로

### 이 프로젝트의 디자인 규칙
- Component는 재사용 할 수 있는 디자인 산출물이다.
- Component StyledElement는 Styled-Component로 만들어진 최소 디자인 컴포넌트 단위이다.
- Component 하위의 Block은 StyledElement를 조합하여 만들어진다.
- Feature는 Block에 비즈니스 로직을 입힌 특징(Feature)이 발현되는 모듈이다. 따라서 재사용 할 수 없다. "Block Component + Logic" = "Feature" 의 규칙을 적용한다.
- 여기서 Logic은 재사용할 수 있도록 hook, 일반 함수 등으로 뺼 수 있다.
- Block은 "Box > Container > Item" 계층으로 구성된다.
- 순서는 중요하지만, 중간에 Box, Container 등의 생략은 가능하다. 
<!--여기서 Item은 StyledElement가 되거나 html 기본 Element가 된다
- 그 하위에 또다른 Block이 온다.-->



<!--
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
-->