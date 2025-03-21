<script setup>
  import Registration from "@/components/domain/registration/Registration.vue";
  import { inject, provide, ref, toRaw } from "vue";

  const api = inject("api");
  const payload = ref({ email: "" });
  const account_type = ref("");

  async function onRegisterRequest() {
    const body = toRaw(payload.value)
    const data = await api.post('/registration', body);
    console.log(data);
  }

  provide("payload", payload);
  provide("account_type", account_type);
</script>

<template>
  <Registration @register="onRegisterRequest" />
</template>
