<script setup>
  import { provide, ref, toRaw } from "vue";

  const emit = defineEmits(["submitData", "validationError"]);
  const props = defineProps(['title']);

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
      emit('validationError');
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
    <h2>{{ props.title }}</h2>
    <form @submit.prevent="onSubmitData">
      <slot></slot>
    </form>
  </div>
</template>
