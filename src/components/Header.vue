<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
<section class="bg-white py-5 shadow">
  <div class="container mx-auto">
    <nav class="flex items-center justify-between">
      <img src="../assets/logo.png" alt="">
      <ul class="flex font-semibold text-md text-slate-700 uppercase">
        <li>
          <RouterLink class="hover:bg-blue-500 px-6 py-2 rounded hover:text-white transition-colors duration-300" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="hover:bg-blue-500 px-6 py-2 rounded hover:text-white transition-colors duration-300" to="/about">About</RouterLink>
        </li><li>
          <RouterLink class="hover:bg-blue-500 px-6 py-2 rounded hover:text-white transition-colors duration-300" to="/student">Students</RouterLink>
        </li><li>
          <RouterLink class="hover:bg-blue-500 px-6 py-2 rounded hover:text-white transition-colors duration-300" to="/">Blog</RouterLink>
        </li><li>
          <RouterLink class="hover:bg-blue-500 px-6 py-2 rounded hover:text-white transition-colors duration-300" to="/">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</section>
</template>

<style scoped>

</style>