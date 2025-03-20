<script setup>
  import Formulary from "@/components/shared/Formulary.vue";
  import FormField from "@/components/shared/FormField.vue";
  import Validate from "@/utils/validations";

  const emit = defineEmits(["success", "error"]);

  function onFormSubmit(data) {
    console.log(data);
    emit("success", data);
  }

  function onFormSubmitError() {
    console.log("onFormSubmitError");
  }
</script>

<template>
  <div>
    <Formulary
      @submit-data="onFormSubmit"
      @validation-error="onFormSubmitError"
    >
      <FormField text="Nome" id="person_name" type="text" name="name" />
      <FormField
        text="CPF"
        id="cpf"
        type="text"
        name="cpf"
        :rules="Validate.BRL.CPF"
      />
      <FormField
        text="Data de nascimento"
        id="birth_date"
        type="text"
        name="birth_date"
        :rules="Validate.COMMON.Date"
      />
      <FormField
        text="Telefone"
        id="phone"
        type="text"
        name="phone"
        :rules="Validate.BRL.Phone"
      />
      <br />
      <div class="flex space-between">
        <button type="button">Voltar</button>
        <button type="submit">Continuar</button>
      </div>
    </Formulary>
  </div>
</template>
