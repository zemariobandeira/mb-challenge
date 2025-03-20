<script setup>
import { inject, ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps({
  modelValue: String,
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(opt => typeof opt.label === "string" && typeof opt.value === "string"),
  },
  rules: {
    type: Function,
    default: () => true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const setFormData = inject("setFormData");
const registerValidator = inject("registerValidator");
const unregisterValidator = inject("unregisterValidator");

const selectedValue = ref(props.modelValue || "");
const validationFeedback = ref("");

watch(selectedValue, (newValue) => {
  setFormData(props.name, newValue);
  emit("update:modelValue", newValue);
  validate();
});

function validate() {
  validationFeedback.value = "";
  const validation = props.rules(selectedValue.value);
  if (validation !== true) {
    validationFeedback.value = validation;
    return false;
  }
  return true;
}

onMounted(() => registerValidator(validate));
onUnmounted(() => unregisterValidator(validate));
</script>

<template>
  <div class="form-radio" style="width: 100%;">
    <div class="flex space-between">
      <label class="radio-item" v-for="option in options" :key="option.value">
        <input
          type="radio"
          :name="name"
          :value="option.value"
          v-model="selectedValue"
        />
        {{ option.label }}
      </label>
    </div>
    <span v-if="validationFeedback">{{ validationFeedback }}</span>
  </div>
</template>

<style>
.form-radio span {
  color: rgb(179, 55, 55);
}

.form-radio .radio-item {
  font-weight: bold;
  cursor: pointer;
}
</style>