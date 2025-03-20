<script setup>
  import Formulary from "@/components/shared/Formulary.vue";
  import FormField from "@/components/shared/FormField.vue";

  const emit = defineEmits(["confirm", "review"]);

  defineProps({
    payload: {
      type: Object,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
    isWaiting: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <div>
    <Formulary>
      <FormField
        v-model:model-value="payload.email"
        text="Endereço de email"
        id="email"
        type="text"
        name="email"
        disabled
      />
      <template v-if="accountType == 'PF'">
        <FormField
          v-model:model-value="payload.name"
          text="Nome"
          id="name"
          type="text"
          name="name"
          disabled
        />
        <FormField
          v-model:model-value="payload.cpf"
          text="CPF"
          id="cpf"
          type="text"
          name="cpf"
          disabled
        />
        <FormField
          v-model:model-value="payload.birth_date"
          text="Data de nascimento"
          id="birth_date"
          type="text"
          name="birth_date"
          disabled
        />
      </template>
      <template v-if="accountType == 'PJ'">
        <FormField
          v-model:model-value="payload.company_name"
          text="Razão social"
          id="company_name"
          type="text"
          name="company_name"
          disabled
        />
        <FormField
          v-model:model-value="payload.cnpj"
          text="CNPJ"
          id="cnpj"
          type="text"
          name="cnpj"
          disabled
        />
        <FormField
          v-model:model-value="payload.birth_date"
          text="Data de abertura"
          id="birth_date"
          type="text"
          name="birth_date"
          disabled
        />
      </template>

      <FormField
        v-model:model-value="payload.phone"
        text="Telefone"
        id="phone"
        type="text"
        name="phone"
        disabled
      />
      <FormField
        v-model:model-value="payload.password"
        text="Senha"
        id="password"
        type="text"
        name="password"
        disabled
      />
      <br />
      <div class="flex space-between">
        <button type="button" :disabled="isWaiting" @click="$emit('review')">
          Voltar
        </button>
        <button
          type="button"
          :disabled="isWaiting"
          @click="$emit('confirm', payload)"
        >
          Cadastrar
        </button>
      </div>
    </Formulary>
  </div>
</template>
