<script setup>
  import Formulary from "@/components/shared/Formulary.vue";
  import FormField from "@/components/shared/FormField.vue";
  import FormRadio from "@/components/shared/FormRadio.vue";
  import Validate from "@/utils/validations";
  import { inject } from "vue";

  const props = defineProps(["title"]);

  const payload = inject("payload");
  const forward = inject("forward");
  const account_type = inject("account_type");
</script>

<template>
  <div>
    <Formulary :title="props.title" @submit-data="forward">
      <FormField
        v-model:model-value="payload.email"
        text="Endereço de email"
        id="email"
        type="text"
        name="email"
        :rules="Validate.COMMON.Email"
      />
      <div class="flex space-between">
        <FormRadio
          v-model:model-value="account_type"
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
