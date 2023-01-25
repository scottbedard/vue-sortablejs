import { computed, nextTick, onMounted, onUnmounted, Ref, ref, unref, watch } from 'vue'
import Sortable, { SortableEvent, SortableOptions } from 'sortablejs'

type MaybeRef<T> = T | Ref<T>

let id = 0

const key = () => `sort-${id++}`

/**
 * Sortable options
 */
type UseSortableOptions = {
  [K in keyof SortableOptions]: MaybeRef<SortableOptions[K]>
}

/**
 * Sort array
 */
export function sort(source: Ref<any[]>, e: SortableEvent) {
  if (typeof e.newIndex === 'number' && typeof e.oldIndex === 'number' && e.from === e.to) {
    const arr = source.value?.slice(0) ?? []

    arr.splice(e.newIndex, 0, arr.splice(e.oldIndex, 1)[0])

    source.value = arr
  }
}

/**
 * Transfer values from one array to another
 */
export function transfer(from: Ref<any[]>, to: Ref<any[]>, e: SortableEvent) {
  if (e.to !== e.from && typeof e.newIndex === 'number' && typeof e.oldIndex === 'number') {
    const item = from.value[e.oldIndex]
    const toArr = to.value.slice(0)
    const fromArr = from.value.slice(0)

    toArr.splice(e.newIndex, 0, item)
    fromArr.splice(e.oldIndex, 1)

    to.value = toArr
    from.value = fromArr   
  }
}

/**
 * Sortable dom elements
 */
export function useSortable(
  containerEl: Ref<HTMLElement | HTMLElement[] | undefined>,
  options: UseSortableOptions = {},
) {
  const normalizedOptions = computed(() => {
    return Object.entries(options).reduce<SortableOptions>((acc, [k, v]) => {
      (acc as any)[k] = unref(v)

      return acc
    }, {})
  })

  /**
   * Sortable instances
   */
  const sortableInstances: any[] = []

  /**
   * Sort count
   */
  const sortKey = ref(key())

  /**
   * Container elements
   */
  const containerEls = computed(() => {
    if (!containerEl.value) {
      return []
    }
    
    return Array.isArray(containerEl.value) ? containerEl.value : [containerEl.value]
  })

  /**
   * Refresh
   */
  const refresh = () => {
    sortKey.value = key()
  }

  /**
   * Destroy sortable instances
   */
  const destroySortableInstances = () => {
    sortableInstances.forEach(instance => instance.destroy())

    sortableInstances.length = 0
  }

  /**
   * Create sortable instances
   */
  const createSortableInstances = async () => {
    destroySortableInstances()

    await nextTick()

    containerEls.value.forEach(el => {
      const instance = Sortable.create(el, {
        ...normalizedOptions.value,
        onSort(e: SortableEvent) {
          refresh()
          
          if (options.onSort) {
            unref(options.onSort)?.(e)
          }
        },
      })

      sortableInstances.push(instance)
    })
  }

  /**
   * Manage sortable instances
   */
  watch(normalizedOptions, refresh)

  watch(sortKey, createSortableInstances)

  onMounted(createSortableInstances)

  onUnmounted(destroySortableInstances)

  return {
    createSortableInstances,
    destroySortableInstances,
    sortKey,
  }
}
