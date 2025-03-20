<script setup>
  import { provide, ref, toRaw } from "vue";

  const emit = defineEmits(["submitData"]);

  const formData = ref({});
  const formValidators = ref([]);

  function registerValidator(validateFn) {
    formValidators.value.push(validateFn);
  }

  function unregisterValidator(validateFn) {
    formValidators.value = formValidators.value.filter(
      (fn) => fn !== validateFn
    );
  }

  function setFormData(name, value) {
    formData.value[name] = value;
  }

  function onSubmitData() {
    const isValid = formValidators.value.every((validateFn) => validateFn());
    if (!isValid) {
      return;
    }

    emit("submitData", toRaw(formData.value));
  }

  provide("formData", formData);
  provide("setFormData", setFormData);
  provide("registerValidator", registerValidator);
  provide("unregisterValidator", unregisterValidator);
</script>

<template>
  <div>
    <form @submit.prevent="onSubmitData">
      <slot></slot>
    </form>
  </div>
</template>
