<script setup>
  import Registration from "@/components/domain/registration/Registration.vue";
  import { inject } from "vue";

  const api = inject("api");

  function onRegisterRequest(payload) {}
</script>

<template>
  <Registration @register="onRegisterRequest" />
</template>
