<script setup>
import Formulary from '@/components/shared/Formulary.vue';
import FormField from '@/components/shared/FormField.vue';
import useSteps from '@/composables/useSteps';

const { currentStep, totalSteps, forward, backward } = useSteps(5);

function onFormSubmit (data) {
  console.log(data)
}
</script>

<template>
  <div>
    <div>Etapa {{ currentStep }} de {{ totalSteps }}</div>
    <br />
    <Formulary @submit-data="onFormSubmit">
      <FormField
        id="test1"
        type="text"
        name="input1"
        text="Input 1"
      />
      <FormField
        id="test2"
        type="text"
        name="input2"
        text="Input 2"
      />
      <FormField
        id="test3"
        type="text"
        name="input3"
        text="Input 3"
      />
      <br />
      <button type="button" @click="backward">prev</button>
      <button type="submit">Send</button>
      <button type="button" @click="forward">next</button>
    </Formulary>
  </div>
</template>