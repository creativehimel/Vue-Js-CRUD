<script setup>
import axios from "axios"
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router"
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


</script>

<template>
<section class="container mx-auto flex items-center justify-center mt-16">
  <div class="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center py-10">
      <img class="w-36 h-36 mb-3 rounded-sm shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
      <div class="flex mt-4 space-x-3 md:mt-6">
        <table class="flex w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 border">Name: </th>
            </tr>
            <tr>
              <th scope="col" class="px-6 py-3 border">Roll: </th>
            </tr>
            <tr>
              <th scope="col" class="px-6 py-3 border">Gender: </th>
            </tr>
            <tr>
              <th scope="col" class="px-6 py-3 border">Blood Group: </th>
            </tr>
            <tr>
              <th scope="col" class="px-6 py-3 border">Religion: </th>
            </tr>
            <tr>
              <th scope="col" class="px-6 py-3 border">Phone: </th>
            </tr>
            <tr>
              <th scope="col" class="px-6 py-3 border">Address: </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-2.5">{{ student.name}}</th>
            </tr>
            <tr class="bg-gray-50 border dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-2.5">{{student.roll}}</th>
            </tr>
            <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-2.5">{{student.gender}}</th>
            </tr>
            <tr class="bg-gray-50 border dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-2.5">{{student.bloodGroup}}</th>
            </tr>
            <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-2.5">{{student.religion}}</th>
            </tr>
            <tr class="bg-gray-50 border dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-2.5">{{student.phone}}</th>
            </tr>
            <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-2.5">{{student.address}}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

</template>

<style scoped>

</style>