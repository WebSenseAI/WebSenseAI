<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <label class="form-control w-full max-w-xs mt-5">
    <div class="label">
      <span class="label-text">Assistant Name</span>
    </div>
    <input
      type="text"
      placeholder="Websense"
      class="input input-bordered w-full max-w-xs"
    />
  </label>
  <label class="form-control w-full max-w-xs mt-3">
    <div class="label">
      <span class="label-text">Website Url</span>
    </div>
    <input
      type="text"
      placeholder="www.website.com"
      class="input input-bordered w-full max-w-xs"
    />
  </label>
  <label class="form-control w-full max-w-xs mt-3">
    <div class="label">
      <span class="label-text">Explain your website</span>
    </div>
    <textarea
      type="text"
      placeholder="information about your website or your business"
      class="textarea textarea-bordered w-full max-w-xs"
    />
  </label>
  <label class="form-control w-full max-w-xs mt-3">
    <div class="label">
      <span class="label-text">Additional Info</span>
    </div>
    <textarea
      type="text"
      placeholder="Additional Info not present in the website or any other information you want to provide"
      class="textarea textarea-bordered w-full max-w-xs"
    />
  </label>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
