<script setup>
  import { inject, ref, watch } from "vue";

  const props = defineProps({
    modelValue: String,
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: "FormField",
    },
  });

  const emit = defineEmits(["update:modelValue"]);
  const setFormData = inject("setFormData");
  const inputValue = ref(props.modelValue || "");

  watch(inputValue, (newValue) => {
    setFormData(props.name, newValue);
    emit("update:modelValue", newValue);
  });
</script>

<template>
  <div>
    <label :for="props.id">{{ props.text }}</label>
    <input
      v-bind="$attrs"
      v-model="inputValue"
      :id="props.id"
      :name="props.name"
    />
  </div>
</template>
