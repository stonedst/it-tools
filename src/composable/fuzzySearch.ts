import { type MaybeRef, get } from '@vueuse/core';
import Fuse from 'fuse.js';
import { type ComputedRef, computed } from 'vue';

export { useFuzzySearch };

function useFuzzySearch<Data>({
  search,
  data,
  options = {},
}: {
  search: MaybeRef<string>
  data: Data[] | ComputedRef<Data[]>
  options?: Fuse.IFuseOptions<Data> & { filterEmpty?: boolean }
}) {
  const filterEmpty = options.filterEmpty ?? true;

  const searchResult = computed<Data[]>(() => {
    const query = get(search);
    const dataArray = Array.isArray(data) ? data : data.value;

    const fuse = new Fuse(dataArray, options);

    if (!filterEmpty && query === '') {
      return dataArray;
    }

    return fuse.search(query).map(({ item }) => item);
  });

  return { searchResult };
}
