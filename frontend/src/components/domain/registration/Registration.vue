<script setup>
  import useSteps from "@/composables/useSteps";
  import AccountDataForm from "@/components/domain/registration/AccountDataForm.vue";
  import CompanyDataForm from "@/components/domain/registration/CompanyDataForm.vue";
  import CredentialDataForm from "@/components/domain/registration/CredentialDataForm.vue";
  import PersonalDataForm from "@/components/domain/registration/PersonalDataForm.vue";
  import ReviewDataForm from "@/components/domain/registration/ReviewDataForm.vue";
  import { inject, provide, ref } from "vue";

  const { currentStep, totalSteps, backward, forward } = useSteps(4);

  const payload = inject("payload");
  const account_type = inject("account_type");
  const isProcessing = ref(false);

  const emit = defineEmits(["register"]);

  function onConfirmation() {
    emit("register");
  }

  provide('forward', forward);
  provide('backward', backward);
</script>

<template>
  <div>
    <div>
      Etapa <span class="primary-color">{{ currentStep }}</span> de {{ totalSteps }}
    </div>

    <AccountDataForm
      v-if="currentStep == 1"
      title="Seja bem-vindo(a)"
      @forward="forward"
    />

    <template v-if="currentStep == 2">
      <PersonalDataForm
        v-if="account_type == 'PF'"
        title="Pessoa Física"
        @forward="forward"
        @backward="backward"
      />

      <CompanyDataForm
        v-if="account_type == 'PJ'"
        title="Pessoa Jurídica"
        @forward="forward"
        @backward="backward"
      />
    </template>

    <CredentialDataForm
      v-if="currentStep == 3"
      title="Senha de acesso"
      @forward="forward"
      @backward="backward"
    />

    <ReviewDataForm
      v-if="currentStep == 4"
      title="Revise suas informações"
      :payload="payload"
      :account-type="account_type"
      :is-waiting="isProcessing"
      @confirm="onConfirmation"
      @backward="backward"
    />
  </div>
</template>
