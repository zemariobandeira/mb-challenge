<script setup>
  import Formulary from "@/components/shared/Formulary.vue";
  import FormField from "@/components/shared/FormField.vue";
  import Validate from "@/utils/validations";
  import { inject } from "vue";

  const props = defineProps(["title"]);

  const forward = inject("forward");
  const backward = inject("backward");
  const payload = inject("payload");
</script>

<template>
  <div>
    <Formulary :title="props.title" @submit-data="forward">
      <FormField
        v-model:model-value="payload.name"
        text="Nome"
        id="person_name"
        type="text"
        name="name"
      />
      <FormField
        v-model:model-value="payload.cpf"
        text="CPF"
        id="cpf"
        type="text"
        name="cpf"
        :rules="Validate.BRL.CPF"
      />
      <FormField
        v-model:model-value="payload.birth_date"
        text="Data de nascimento"
        id="birth_date"
        type="text"
        name="birth_date"
        :rules="Validate.COMMON.Date"
      />
      <FormField
        v-model:model-value="payload.phone_number"
        text="Telefone"
        id="phone"
        type="text"
        name="phone"
        :rules="Validate.BRL.Phone"
      />
      <br />
      <div class="flex space-between">
        <button type="button" @click="backward">Voltar</button>
        <button type="submit">Continuar</button>
      </div>
    </Formulary>
  </div>
</template>
