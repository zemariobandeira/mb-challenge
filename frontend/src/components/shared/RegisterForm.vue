<script setup>
import Formulary from '@/components/shared/Formulary.vue';
import FormField from '@/components/shared/FormField.vue';
</script>

<template>
  <div>
    <Formulary @submit-data="console.log($event)">
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
      <button type="submit">Send</button>
    </Formulary>
  </div>
</template>