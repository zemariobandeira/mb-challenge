<script setup>
  import Formulary from "@/components/shared/Formulary.vue";
  import FormField from "@/components/shared/FormField.vue";
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
        v-model:model-value="payload.password"
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
        <button type="button" @click="backward">Voltar</button>
        <button type="submit">Continuar</button>
      </div>
    </Formulary>
  </div>
</template>
