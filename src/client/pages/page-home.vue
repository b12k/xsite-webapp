<script lang="ts" setup>
  import { onMounted, ref,watch } from 'vue';
  import { useContextStore } from '../store';
  import { injectTrackingIframe } from '../services';

  const context = useContextStore();
  const uuid = ref('');
  const checked = ref('');

  onMounted(async () => {
    const { uuid: storedUuid, checked: storedChecked, iframe } = await injectTrackingIframe(context.xSiteIframe);
    uuid.value = storedUuid;
    checked.value = storedChecked || '';

    watch(checked, (value: string) => {
      iframe.contentWindow?.postMessage({ checked: value }, '*');
    });
  })

</script>
<template>
  <div class="d-flex flex-column h-100 align-items-center justify-content-center">
    <h1>{{ context.icon }}</h1>
    <p>Your ID: {{ uuid }}</p>
    <div class="d-grid gap-2">
      <input type="radio" class="btn-check" value="green" name="btnradio" id="btnradio1" autocomplete="off" v-model="checked">
      <label class="btn btn-outline-success" for="btnradio1">Green</label>

      <input type="radio" class="btn-check" value="yellow" name="btnradio" id="btnradio2" autocomplete="off" v-model="checked">
      <label class="btn btn-outline-warning" for="btnradio2">Yellow</label>

      <input type="radio" class="btn-check" value="red" name="btnradio" id="btnradio3" autocomplete="off" v-model="checked">
      <label class="btn btn-outline-danger" for="btnradio3">Red</label>
    </div>
  </div>
</template>
