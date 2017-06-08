# redux-first-router-scroll-container

[![Greenkeeper badge](https://badges.greenkeeper.io/faceyspacey/redux-first-router-scroll-container.svg)](https://greenkeeper.io/)

Use `<ScrollContainer>` to facilitate scroll restoration for elements other than `window`. Each `<ScrollContainer>` must be given a unique `scrollKey`, and can be given an optional `shouldUpdateScroll` callback that behaves the same as in [redux-first-router-restore-scroll](https://github.com/faceyspacey/redux-first-router-restore-scroll).

You must use this component in conjunction with [redux-first-router-restore-scroll](https://github.com/faceyspacey/redux-first-router-restore-scroll) and of course [redux-first-router](https://github.com/faceyspacey/redux-first-router) itself. Once both are installed, you can simply use the component as shown below to wrap your scrollable element. No context `<Provider>` element is needed to wrap your app.

```js
import ScrollContainer from 'redux-first-router-scroll-container';

const MyComponent => 
  <ScrollContainer
    scrollKey={'my-unique-name'}
    shouldUpdateScroll={shouldUpdateScroll}
  >
    <MyScrollableComponent />
  </ScrollContainer>
```
> a unique name is needed for each individual `ScrollContainer` so that multiple of them can be correctly restored.


## Caveats
- `<ScrollContainer>` does not support on-the-fly changes to `scrollKey` or to the DOM node for its child.


## Thanks
This package is a port of the corresponding component within https://github.com/taion/react-router-scroll . Thanks for pioneering this route, particularly @taion for the amazing `scroll-behavior` package which supports all such components. 

