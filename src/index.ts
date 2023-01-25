import { computed, nextTick, onMounted, onUnmounted, Ref, ref, unref, watch } from 'vue'
import Sortable, { SortableEvent } from 'sortablejs'

type MaybeRef<T> = T | Ref<T>

let id = 0

const key = () => `sort-${id++}`

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
 * Sortablejs options
 */
export type UseSortableOptions = Omit<Sortable.Options, 'sort'> & {
  sort?: MaybeRef<boolean>
}

/**
 * Sortable dom elements
 */
export function useSortable(
  containerEl: Ref<HTMLElement | HTMLElement[] | undefined>,
  options: UseSortableOptions = {},
) {
  /**
   * Enabled
   */
  const enabled = computed(() => unref(options.sort) === false ? false : true)

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

    console.log(enabled.value)

    containerEls.value.forEach(el => {
      const instance = Sortable.create(el, {
        ...options,
        sort: enabled.value,
        onSort(e: SortableEvent) {
          sortKey.value = key()
          
          if (options.onSort) {
            options.onSort(e)
          }
        },
      })

      sortableInstances.push(instance)
    })
  }

  /**
   * Manage sortable instances
   */
  watch([enabled, sortKey], createSortableInstances)

  onMounted(createSortableInstances)

  onUnmounted(destroySortableInstances)

  return {
    createSortableInstances,
    destroySortableInstances,
    sortKey,
  }
}
