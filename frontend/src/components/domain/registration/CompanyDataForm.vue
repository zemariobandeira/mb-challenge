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
        v-model:model-value="payload.company_name"
        text="Razão social"
        id="company_name"
        type="text"
        name="company_name"
      />
      <FormField
        v-model:model-value="payload.cnpj"
        text="CNPJ"
        id="cnpj"
        type="text"
        name="cnpj"
        :rules="Validate.BRL.CNPJ"
      />
      <FormField
        v-model:model-value="payload.birth_date"
        text="Data de abertura"
        id="birth_date"
        type="text"
        name="birth_date"
        :rules="Validate.COMMON.Date"
      />
      <FormField
        v-model:model-value="payload.phone_number"
        text="Telefone"
        id="phone_number"
        type="text"
        name="phone_number"
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
