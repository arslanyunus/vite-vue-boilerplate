<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';

const store = useStore();
const count = computed(() => store.state.count);
</script>

<template>
    <div class="prose">
        <h2>Home</h2>
        <p>Count: {{ count }}</p>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" class="w-40 my-12"/>

    <div class="text-center">
        <hello-world msg="Hello Vue 3 + Vite" />
    </div>
</template>
