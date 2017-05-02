# redux-first-router-scroll-container

Use `<ScrollContainer>` to facilitate scroll restoration for elements other than `window`. Each `<ScrollContainer>` must be given a unique `scrollKey`, and can be given an optional `shouldUpdateScroll` callback that behaves the same as in [redux-first-router-restore-scroll](https://github.com/faceyspacey/redux-first-router-restore-scroll).

```js
import ScrollContainer from 'redux-first-router-scroll-container';

const MyComponent => 
  <ScrollContainer
    scrollKey={'my-name'}
    shouldUpdateScroll={shouldUpdateScroll}
  >
    <MyScrollableComponent />
  </ScrollContainer>
```


## Caveats
- `<ScrollContainer>` does not support on-the-fly changes to `scrollKey` or to the DOM node for its child.


## Thanks
This package is a port of the corresponding component within https://github.com/taion/react-router-scroll . Thanks for pioneering this route, particularly @taion for the amazing `scroll-behavior` package which supports all such components. 
