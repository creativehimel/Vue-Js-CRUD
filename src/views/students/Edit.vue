<script setup>
import axios from "axios"
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router"
import router from "@/router";
const student = ref('')
const error = ref('')
async function getSingleStudent(id){
  try {
    const url = 'http://localhost:3000/studentList/'
    const response = await axios.get(url + id)
    student.value = response.data
  } catch (error) {
    error.value = error
  }

}
const route = useRoute()
onMounted(()=>{
  getSingleStudent(route.params.id)
})


async function update(id, data){
  const url = 'http://localhost:3000/studentList/'
 const response = await axios.put(url + id, data )
  if (response.status === 200){
    await router.push('/student')
  }
}
</script>

<template>
  <section class="container mx-auto flex flex-col items-center justify-center font-nunito">
    <div class="max-w-3xl w-full py-10 bg-white my-16 shadow shadow-blue-100 px-10">
      <h1 class="pb-5 text-center text-2xl font-semibold ">Edit Student Data</h1>
      <div class="w-full">
        <div class="flex pb-5 gap-4 items-center justify-between">
          <div class="w-1/2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Name <span class="text-red-500">*</span></label>
            <input v-model="student.name"  type="text" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-300 focus:ring-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
          </div>
          <div class="w-1/2">
            <label for="roll" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roll <span class="text-red-500">*</span></label>
            <input v-model="student.roll" type="text" id="roll" class="bg-white border focus:outline-blue-300 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          </div>
        </div>
        <div class="flex pb-5 gap-4 items-center justify-between">
          <div class="w-1/2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class <span class="text-red-500">*</span></label>
            <input v-model="student.class" type="text" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-300 focus:ring-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
          </div>
          <div class="w-1/2">
            <label for="roll" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender  <span class="text-red-500">*</span></label>
            <input v-model="student.gender" type="text" id="roll" class="bg-white focus:outline-blue-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          </div>
        </div>
        <div class="flex pb-5 gap-4 items-center justify-between">
          <div class="w-1/2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group <span class="text-red-500">*</span></label>
            <input v-model="student.bloodGroup" type="email" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-300 focus:ring-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
          </div>
          <div class="w-1/2">
            <label for="roll" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Religion  <span class="text-red-500">*</span></label>
            <input v-model="student.religion" type="text" id="roll" class="bg-white focus:outline-blue-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          </div>
        </div>
        <div class="flex pb-5 gap-4 items-center justify-between">
          <div class="w-1/2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone <span class="text-red-500">*</span></label>
            <input v-model="student.phone" type="email" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-300 focus:ring-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
          </div>
          <div class="w-1/2">
            <label for="roll" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address  <span class="text-red-500">*</span></label>
            <input v-model="student.address" type="text" id="roll" class="bg-white focus:outline-blue-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          </div>
        </div>
        <div class="flex gap-5 items-center justify-center">
          <button type="button" @click="update(route.params.id, student)" class="bg-blue-500 px-16 py-2 rounded-full text-white text-center">Update</button>
        </div>
      </div>

    </div>

  </section>
</template>

<style scoped>

</style>