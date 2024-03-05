<script lang="ts" setup>
  import { useHead } from '@unhead/vue';
  import { useContextStore } from './store';

  const {
    query: { uuid },
  } = useContextStore();

  useHead({
    title: 'XSITE',
    bodyAttrs: {
      class: uuid
        ? 'animate__animated animate__fadeIn animate__faster bg-dark text-white'
        : 'bg-dark text-white',
    },
  });
</script>

<template>
  <RouterView />
</template>
