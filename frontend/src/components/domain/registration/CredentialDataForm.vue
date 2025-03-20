<script setup>
  import Formulary from "@/components/shared/Formulary.vue";
  import FormField from "@/components/shared/FormField.vue";

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
        text="Sua senha"
        id="password"
        type="password"
        name="password"
        :rules="
          (v) =>
            v.length >= 8 ? true : 'A senha deve ter ao menos 8 caracteres'
        "
      />
      <br />
      <div class="flex space-between">
        <button type="button">Voltar</button>
        <button type="submit">Continuar</button>
      </div>
    </Formulary>
  </div>
</template>
