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

    const validation = props.rules(inputValue.value)
    if (validation !== true) {
      validationFeedback.value = validation
      return false
    }

    return true
  }
</script>

<template>
  <div class="form-field">
    <label :for="props.id">{{ props.text }}</label>
    <input
      v-bind="$attrs"
      v-model.trim="inputValue"
      :id="props.id"
      :name="props.name"
    />
    <span v-if="validationFeedback">{{ validationFeedback }}</span>
  </div>
</template>

<style>
.form-field {
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
}

.form-field > label {
  font-weight: bold;
}

.form-field > span {
  color: rgb(179, 55, 55);
}

.form-field > input[type='text'],
.form-field > input[type='password'] {
  display: block;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid #383838;
  width: 100%;
}

.form-field > input[type='radio'] {
  position: relative;
  display: inline-block;
}

.form-field > input[type='radio'] + span {
  position: absolute;
  left: 0;
  top: 25px;
  width: 300px;
}
</style>