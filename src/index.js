import { ScrollbarPlugin } from 'smooth-scrollbar';

class InfiniteLoadPlugin extends ScrollbarPlugin {
  static defaultOptions = {
    disabled: false,
    loading: false,
    distance: 100,
    page: 1,
    pageCount: 1,
    loadFunc: () => { },
  };

  static pluginName = 'infiniteLoad';

  transformDelta(delta, event) {
    const { wheelDeltaY } = event;
    const { scrollTop, size: { container, content } } = this.scrollbar;
    const {
      disabled, loading, page, pageCount, distance, loadFunc,
    } = this.options;
    if (
      !disabled
      && !loading
      && wheelDeltaY < 0
      && page < pageCount
      && (content.height - scrollTop - container.height) <= distance
    ) {
      loadFunc();
    }
  }
}

export default InfiniteLoadPlugin;
