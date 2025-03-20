<script setup>
  import { inject, onMounted, onUnmounted, ref, watch } from "vue";

  const props = defineProps({
    modelValue: String,
    id: { type: String, required: true },
    name: { type: String, required: true },
    text: { type: String, default: "FormField" },
    rules: { type: Function, default: () => true },
  });

  const emit = defineEmits(["update:modelValue"]);

  const setFormData = inject("setFormData");
  const registerValidator = inject('registerValidator');
  const unregisterValidator = inject('unregisterValidator');

  const inputValue = ref(props.modelValue || "");
  const validationFeedback = ref("");

  watch(inputValue, (newValue) => {
    setFormData(props.name, newValue);
    emit("update:modelValue", newValue);
  });

  onMounted(() => registerValidator(validate));
  onUnmounted(() => unregisterValidator(validate));

  function validate() {
    validationFeedback.value = ''
    console.log(inputValue.value)

    const validation = props.rules(inputValue.value)
    if (validation !== true) {
      validationFeedback.value = validation
      return false
    }

    return true
  }
</script>

<template>
  <div>
    <label :for="props.id">{{ props.text }}</label>
    <input
      v-bind="$attrs"
      v-model.lazy="inputValue"
      :id="props.id"
      :name="props.name"
    />
    <span v-if="validationFeedback">{{ validationFeedback }}</span>
  </div>
</template>
