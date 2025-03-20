<script setup>
  import Formulary from "@/components/shared/Formulary.vue";
  import FormField from "@/components/shared/FormField.vue";
  import FormRadio from "@/components/shared/FormRadio.vue";
  import Validate from "@/utils/validations";

  const emit = defineEmits(["success", "error"]);

  function onFormSubmit(data) {
    emit("success", data);
  }

  function onFormSubmitError() {}
</script>

<template>
  <div>
    <Formulary
      @submit-data="onFormSubmit"
      @validation-error="onFormSubmitError"
    >
      <FormField
        text="Endereço de email"
        id="email"
        type="text"
        name="email"
        :rules="Validate.COMMON.Email"
      />
      <div class="flex space-between">
        <FormRadio
          name="account_type"
          :options="[
            { label: 'Pessoa física', value: 'PF' },
            { label: 'Pessoa jurídica', value: 'PJ' },
          ]"
          :rules="(val) => (val ? true : 'Por favor, selecione uma opção')"
        />
      </div>
      <br />
      <div class="flex space-between">
        <button class="d-block w-full" type="submit">Continuar</button>
      </div>
    </Formulary>
  </div>
</template>
