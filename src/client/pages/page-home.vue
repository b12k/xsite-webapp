<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { useContextStore } from '../store';
  import { injectTrackingIframe } from '../services';

  const context = useContextStore();
  const uuid = ref('');

  onMounted(async () => {
    const { uuid: storedUuid } = await injectTrackingIframe(
      context.xSiteIframe,
    );
    uuid.value = storedUuid;
  });
</script>
<template>
  <div
    class="d-flex flex-column h-100 align-items-center justify-content-center"
  >
    <h1>{{ context.icon }}</h1>
    <p>Your ID: {{ uuid }}</p>
  </div>
</template>
