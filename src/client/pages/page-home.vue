<script lang="ts" setup>
  import { onMounted, ref,watch } from 'vue';
  import { useContextStore } from '../store';
  import { useRouter } from 'vue-router';

  const context = useContextStore();
  const uuid = ref('');

  const trackMe = () => {
    window.location.href = `${context.xSiteIframe}/loopback?to=${window.location.href}`
  }

  const router = useRouter();

  onMounted(async () => {
    if (typeof context.query.uuid === 'string') {
      uuid.value = context.query.uuid;
      router.replace({ name: 'home' });
    }
  })

</script>
<template>
  <div class="d-flex flex-column h-100 align-items-center justify-content-center">
    <h1>{{ context.icon }}</h1>
    <p>Your ID: {{ uuid }}</p>
    <button type="button" class="btn btn-primary" @click="trackMe">Track me</button>
  </div>
</template>
