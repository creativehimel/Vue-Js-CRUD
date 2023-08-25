<script setup>
import {RouterLink} from "vue-router";
import {reactive} from "vue";
const studentData = reactive({
  studentName: '',
  roll: '',
  class: '',
  gender: '',
  bloodGroup: '',
  religion: '',
  phone: '',
  address: ''
})
const addStudent = async ()=>{

}
</script>

<template>
<section class="container mx-auto flex flex-col items-center justify-center font-nunito">
  <div class="max-w-3xl w-full py-10 bg-white my-16 shadow shadow-blue-100 px-10">
    <h1 class="pb-5 text-center text-2xl font-semibold ">Add Student</h1>

    <form class="w-full">
      <div class="flex pb-5 gap-4 items-center justify-between">
        <div class="w-1/2">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Name <span class="text-red-500">*</span></label>
          <input v-model="studentData.studentName" type="email" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-300 focus:ring-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
        </div>
        <div class="w-1/2">
          <label for="roll" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roll <span class="text-red-500">*</span></label>
          <input v-model="studentData.roll" type="text" id="roll" class="bg-white border focus:outline-blue-300 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
      </div>
      <div class="flex pb-5 gap-4 items-center justify-between">
        <div class="w-1/2">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class <span class="text-red-500">*</span></label>
          <input v-model="studentData.class" type="email" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-300 focus:ring-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
        </div>
        <div class="w-1/2">
          <label for="roll" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender  <span class="text-red-500">*</span></label>
          <input v-model="studentData.gender" type="text" id="roll" class="bg-white focus:outline-blue-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
      </div>
      <div class="flex pb-5 gap-4 items-center justify-between">
        <div class="w-1/2">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group <span class="text-red-500">*</span></label>
          <input v-model="studentData.bloodGroup" type="email" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-300 focus:ring-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
        </div>
        <div class="w-1/2">
          <label for="roll" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Religion  <span class="text-red-500">*</span></label>
          <input v-model="studentData.religion" type="text" id="roll" class="bg-white focus:outline-blue-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
      </div>
      <div class="flex pb-5 gap-4 items-center justify-between">
        <div class="w-1/2">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone <span class="text-red-500">*</span></label>
          <input v-model="studentData.phone" type="email" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-300 focus:ring-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
        </div>
        <div class="w-1/2">
          <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address  <span class="text-red-500">*</span></label>
          <input v-model="studentData.address" type="text" id="address" class="bg-white focus:outline-blue-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
      </div>
      <div class="flex gap-5 items-center justify-center">
        <button type="button" @click="addStudent" class="bg-blue-500 px-16 py-2 rounded-full text-white text-center">Add</button>
        <RouterLink :to="{name: 'student'}"><button type="button" class="bg-blue-500 px-16 py-2 rounded-full text-white text-center">Back to Student List</button></RouterLink>
      </div>
    </form>

  </div>

</section>
</template>

<style scoped>

</style>