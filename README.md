# `@bedard/vue-sortablejs`

[![License](https://img.shields.io/github/license/scottbedard/vue-sortablejs?color=blue)](https://github.com/scottbedard/vue-sortablejs/blob/main/LICENSE)

A minimalist interface for [Sortablejs](https://sortablejs.github.io/Sortable/), no components required.

> **Warning:** This repo is a work in progress, give it time.

## Installation

Install via npm

```bash
npm install @bedard/vue-sortablejs
```

Install via cdn

```
<script src="https://unpkg.com/@bedard/vue-sortablejs"></script>
```

## Basic usage

This behavior manages an array connected to a `v-for` loop of elements

```vue
<template>
  <div ref="container" :key="sortKey">
    <div v-for="item in source">
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSortable } from '@bedard/vue-sortablejs'

const container = ref()

const { sort, sortKey } = useSortable(container, {
  onSort: (e: any) => sort(source, e),
})
</script>
```

Here is a quick breakdown of what's happening

- an outer `container` ref is created to attach sortable instances to
- a `sortKey` is attached to the container to keep the dom in sync with state
- the `sort` helper is used to update state when `onSort` fires

[Click here for sortablejs options](https://github.com/SortableJS/Sortable#options)

## License

[MIT](https://github.com/scottbedard/vue-sortablejs/blob/master/LICENSE)

Copyright (c) 2023-present, Scott Bedard
