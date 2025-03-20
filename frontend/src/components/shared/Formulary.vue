<script setup>
  import { provide, ref, toRaw } from "vue";

  const emit = defineEmits(["submitData"]);

  const formData = ref({});

  function setFormData(name, value) {
    formData.value[name] = value;
  }

  function onSubmitData() {
    emit("submitData", toRaw(formData.value));
  }

  provide("formData", formData);
  provide("setFormData", setFormData);
</script>

<template>
  <div>
    <form @submit.prevent="onSubmitData">
      <slot></slot>
    </form>
  </div>
</template>
