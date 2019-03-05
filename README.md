# smooth-scrollbar-plugin-infinite-load
Infinite load plugin for [smooth-scrollbar](https://github.com/idiotWu/smooth-scrollbar)

## useage
```
npm install smooth-scrollbar-plugin-infinite-load
```

file.js
```
import SmoothScrollbar from 'smooth-scrollbar';

SmoothScrollbar.use(InfiniteLoadPlugin);

const scrollbar = SmoothScrollbar.init('container', {
  plugins: {
    infiniteLoad: {...},
  },
});
```
**NOTICE: when options change, update plugin**
```
scrollbar.updatePluginOptions(
  'infiniteLoad',
  {...},
);
```

## options
```
{
  disabled: false,
  loading: false,
  distance: 100,
  page: 1,
  pageCount: 1,
}
```
