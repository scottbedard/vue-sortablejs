import { computed, nextTick, onMounted, onUnmounted, Ref, ref, watch } from 'vue'
import Sortable, { SortableEvent } from 'sortablejs'

let id = 0

const key = () => `sort-${id++}`

const noop = () => {}

/**
 * Sortable dom elements
 */
export function useSortable(
  containerEl: Ref<HTMLElement | HTMLElement[] | undefined>,
  options: Sortable.Options = {},
) {
  const opts: Sortable.Options = { onSort: noop, ...options }

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
   * Sort array
   */
  const sort = (source: Ref<any[]>, e: { newIndex?: number, oldIndex?: number }) => {
    if (typeof e.newIndex === 'number' && typeof e.oldIndex === 'number') {
      const arr = source.value?.slice(0) ?? []

      arr.splice(e.newIndex, 0, arr.splice(e.oldIndex, 1)[0])

      source.value = arr
    }
  }

  /**
   * Create sortable instances
   */
  const createSortableInstances = async () => {
    destroySortableInstances()

    await nextTick()

    containerEls.value.forEach(el => {
      const instance = Sortable.create(el, {
        ...opts,
        animate: 500,
        onSort(e: SortableEvent) {
          sortKey.value = key()

          if (opts.onSort) {
            opts.onSort(e)
          }
        },
      })

      sortableInstances.push(instance)
    })
  }

  /**
   * Destroy sortable instances
   */
  const destroySortableInstances = () => {
    sortableInstances.forEach(instance => instance.destroy())

    sortableInstances.length = 0
  }

  /**
   * Manage sortable instances
   */
  watch(sortKey, createSortableInstances)

  onMounted(createSortableInstances)

  onUnmounted(destroySortableInstances)

  return {
    createSortableInstances,
    destroySortableInstances,
    sort,
    sortKey,
  }
}
