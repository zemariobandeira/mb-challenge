import { computed, ref } from "vue";

export default function useSteps(total) {
  const _current = ref(1)
  const _total = ref(total)

  const currentStep = computed(() => _current.value)
  const totalSteps = computed(() => _total.value)

  function forward() {
    if (_current.value === _total.value)
      return

    _current.value++
  }

  function backward() {
    if (_current.value === 1)
      return

    _current.value--
  }

  return {
    currentStep,
    totalSteps,
    forward,
    backward,
  }
}