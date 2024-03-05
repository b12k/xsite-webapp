<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { useContextStore } from '../store';

  const context = useContextStore();
  const uuid = ref('');
  const href = ref('');

  const handleLoopbackClick = () => {
    window.location.href = href.value;
  };

  onMounted(async () => {
    uuid.value = context.query.xsite as string;
    href.value = `${context.xsiteUrl}/?to=${window.location}`;
    window.addEventListener('beforeunload', () => {
      document.body.classList.add(
        'animate__animated',
        'animate__fadeOut',
        'animate__faster',
      );
    });
  });
</script>
<template>
  <div
    class="d-flex flex-column h-100 align-items-center justify-content-center"
  >
    <h1>{{ context.icon }}</h1>
    <p>Your ID: {{ uuid }}</p>
    <button class="btn btn-primary" @click="handleLoopbackClick">
      Track me
    </button>
  </div>
</template>
