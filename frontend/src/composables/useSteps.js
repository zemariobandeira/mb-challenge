import { computed, ref } from "vue";

function parseTotalParam(total) {
  if (isNaN(total)) throw 'Total of steps must be a number';
  if (total <= 0) throw "Total of steps must be bigger than zero";

  return total;
}

function parseInitialParam(initialStep, totalSteps) {
  if (initialStep === undefined) return false
  if (isNaN(initialStep)) throw 'Initial step must be a number';
  if (initialStep > totalSteps) throw "Initial step must be smaller or equals than total steps";
  if (initialStep <= 0) throw "Initial step must be bigger than zero";

  return steps;
}

export default function useSteps(total, initial) {
  const _total = ref(parseTotalParam(total))
  const _current = ref(parseInitialParam(initial, _total.value) || 1);

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