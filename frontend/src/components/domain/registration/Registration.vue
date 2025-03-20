<script setup>
  import useSteps from "@/composables/useSteps";
  import AccountDataForm from "@/components/domain/registration/AccountDataForm.vue";
  import CompanyDataForm from "@/components/domain/registration/CompanyDataForm.vue";
  import CredentialDataForm from "@/components/domain/registration/CredentialDataForm.vue";
  import PersonalDataForm from "@/components/domain/registration/PersonalDataForm.vue";
  import ReviewDataForm from "@/components/domain/registration/ReviewDataForm.vue";
  import { computed, ref, toRaw } from "vue";

  const { currentStep, totalSteps, backward, forward } = useSteps(5);
  const account_type = ref("PF");

  const payload = ref({});
  const isProcessing = ref(false);

  const registrationTitles = [
    '',
    'Seja bem-vindo(a)',
    'Pessoa Física',
    'Pessoa Jurídica',
    'Senha de acesso',
    'Revise suas informações'
  ]

  const stepTitle = computed(() => registrationTitles[currentStep.value])

  const emit = defineEmits(['register']);

  function checkAccontTypeAndForward(data) {
    const { account_type: acc_type } = data;
    account_type.value = acc_type;
    payload.value = { ...payload.value, ...data };
    forward();
  }

  function getDataAndForward(data) {
    payload.value = { ...payload.value, ...data };
    forward();
  }

  function onConfirmation(data) {
    const sendData = toRaw(data.value)
    emit('register', sendData)
  }
</script>

<template>
  <div>
    <div>
      Etapa <span class="primary-color">{{ currentStep }}</span> de {{ totalSteps }}
      <h2>{{ stepTitle }}</h2>
    </div>

    <AccountDataForm
      v-if="currentStep == 1"
      @success="checkAccontTypeAndForward"
    />

    <template v-if="currentStep == 2">
      <PersonalDataForm
        v-if="account_type == 'PF'"
        @success="getDataAndForward"
      />
  
      <CompanyDataForm
        v-if="account_type == 'PJ'"
        @success="getDataAndForward"
      />
    </template>

    <CredentialDataForm
      v-if="currentStep == 3"
      @success="getDataAndForward"
    />

    <ReviewDataForm
      v-if="currentStep == 4"
      :payload="payload"
      :account-type="account_type"
      :is-waiting="isProcessing"
      @confirm="onConfirmation"
      @review="backward"
    />
  </div>
</template>
