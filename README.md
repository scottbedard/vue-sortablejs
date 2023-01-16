# `@bedard/vue-sortablejs`

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

The `useSortable` behavior manages an array of item rendered via a `v-for` loop.

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
  onSort: e => sort(source, e),
})
</script>
```

Here is a quick breakdown of what's happening

- an outer `container` ref is created to attach sortable instances to
- a `sortKey` is attached to the container to keep the dom in sync with state
- the `sort` helper is used to update state when `onSort` is fired

[Click here for sortablejs options](https://github.com/SortableJS/Sortable#options)

## License

[MIT](https://github.com/scottbedard/vue-sortablejs/blob/master/LICENSE)

Copyright (c) 2023-present, Scott Bedard
