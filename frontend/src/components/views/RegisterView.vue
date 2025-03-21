<script setup>
  import { inject, provide, ref, toRaw } from "vue";
  import Registration from "@/components/domain/registration/Registration.vue";
  import RegistrationFeedback from "@/components/domain/registration/RegistrationFeedback.vue";
  import Loader from '@/components/shared/Loader.vue';

  const api = inject("api");
  const payload = ref({ email: "" });
  const account_type = ref("");
  const isProcessing = ref(false);
  const operationCompleted = ref(false);
  const operationFeedback = ref("");

  async function onRegisterRequest() {
    isProcessing.value = true;
    const body = toRaw(payload.value);
    const data = await api.post("/registration", body);
    const { message } = data;

    operationFeedback.value = message;
    operationCompleted.value = true;
    isProcessing.value = false;
  }

  provide("payload", payload);
  provide("account_type", account_type);
  provide("isProcessing", isProcessing);
</script>

<template>
  <Loader :loading="isProcessing" />

  <RegistrationFeedback
    v-if="operationCompleted"
    :feedback="operationFeedback"
  />

  <Registration v-else @register="onRegisterRequest" />
</template>
