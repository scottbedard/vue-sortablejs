# `@bedard/vue-sortablejs`

[![Build status](https://img.shields.io/github/actions/workflow/status/scottbedard/vue-sortablejs/test.yml?branch=main)](https://github.com/scottbedard/vue-sortablejs/actions)
[![NPM](https://img.shields.io/npm/v/@bedard/vue-sortablejs)](https://www.npmjs.com/package/@bedard/vue-sortablejs)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@bedard/vue-sortablejs?label=gzipped)](https://bundlephobia.com/result?p=@bedard/vue-sortablejs)
[![License](https://img.shields.io/github/license/scottbedard/vue-sortablejs?color=blue)](https://github.com/scottbedard/vue-sortablejs/blob/main/LICENSE)

A minimalist interface for [Sortablejs](https://sortablejs.github.io/Sortable/), no components required.

[View live sandbox →](https://vue-sortablejs.scottbedard.net)

## Installation

Install via npm

```bash
npm install @bedard/vue-sortablejs
```

Install via cdn

```
<script src="https://unpkg.com/@bedard/vue-sortablejs" type="module"></script>
```

## Basic usage

Register `useSortable` with a container, and render the array with a `v-for` loop

```vue
<template>
  <div ref="container" :key="sortKey">
    <div v-for="item in items">
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { sort, useSortable } from '@bedard/vue-sortablejs'

const container = ref()

const { sortKey } = useSortable(container, {
  onSort: e => sort(items, e),
})
</script>
```

Here is a breakdown of what's happening

1. an outer `container` ref is created
2. a unique `sortKey` is attached to that container
3. `sort` syncs the array when `onSort` fires

[Click here for sortablejs options](https://github.com/SortableJS/Sortable#options)

## Advanced usage

### Disabling

Set `sort` to `false` to disable sorting

```js
const enabled = ref(false)

const { sort } = useSortable(container, {
  sort: enabled,
})
```

### Shared lists

Use `transfer` to move items from one array to another

```js
import { sort, transfer, useSortable } from '@bedard/vue-sortablejs'

const first = useSortable(firstContainer, {
  group: 'shared',
  onAdd: e => transfer(from, to, e),
  onSort: e => sort(firstItems, e),
})

const second = useSortable(secondContainer, {
  group: 'shared',
  onAdd: e => transfer(from, to, e),
  onSort: e => sort(secondItems, e),
})
```

### Manual controls

Sortable instance can be manually created and destroyed

```js
const { createSortableInstances, destroySortableInstances } = useSortable(container)

createSortableInstances() // refresh instances and dom keys

destroySortableInstances() // destroy instances
```

## License

[MIT](https://github.com/scottbedard/vue-sortablejs/blob/master/LICENSE)

Copyright (c) 2023-present, Scott Bedard
