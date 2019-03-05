import { ScrollbarPlugin } from 'smooth-scrollbar';

export interface InfiniteLoadPluginOptions {
  disabled: boolean,
  loading: boolean,
  distance: number,
  page: number,
  pageCount: number,
  loadFunc: () => void,
}

export default class InfiniteLoadPlugin extends ScrollbarPlugin {
  static defaultOptions: InfiniteLoadPluginOptions;
  static pluginName = 'infiniteLoad';
}
