<script setup>
import {EyeIcon, PencilIcon, TrashIcon, UserPlusIcon} from "@heroicons/vue/20/solid";
import axios from "axios";
import {onMounted, ref} from "vue";
const studentList = ref('')
const error = ref('')
async function getStudentList(){
  try {
    const url = 'http://localhost:3000/studentList'
    const response = await axios.get(url)
    studentList.value = response.data
  } catch (error) {
    error.value = error
  }

}
onMounted(()=>{
  getStudentList()
})
function deleteStudent(id){

}
</script>

<template>
<section class="container mx-auto my-10 bg-white shadow py-5 px-10">
  <div class="flex items-center justify-between">
    <h3 class="text-2xl font-semibold">Students</h3>
    <RouterLink class="bg-blue-500 px-5 py-1.5 text-sm font-semibold text-white rounded-full flex gap-1 items-center" :to="{name: 'add'}"><UserPlusIcon class="text-white h-5 w-5"></UserPlusIcon>Add Student</RouterLink>
  </div>
  <div class="my-8">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">Id</th>
        <th scope="col" class="px-6 py-3">Name</th>
        <th scope="col" class="px-6 py-3">Class</th>
        <th scope="col" class="px-6 py-3">Gender</th>
        <th scope="col" class="px-6 py-3">Phone</th>
        <th scope="col" class="px-6 py-3">Address</th>
        <th scope="col" class="px-6 py-3">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(student, index) in studentList" :key="student.id" class="hover:bg-gray-100 odd:bg-white even:bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {{ index +1 }}
        </th>
        <td class="px-6 py-4">
          {{ student.name }}
        </td>
        <td class="px-6 py-4">
          {{ student.class }}
        </td>
        <td class="px-6 py-4">
          {{ student.gender }}
        </td><td class="px-6 py-4">
        {{ student.phone }}
        </td><td class="px-6 py-4">
        {{ student.address }}
        </td>
        <td class="px-6 py-4 flex gap-2 items-center">
          <RouterLink :to="{name: 'view', params: {id: student.id}}"><EyeIcon class="text-gray-500 h-5 w-5"/></RouterLink>

          <RouterLink :to="{name: 'edit', params: {id: student.id}}"><PencilIcon class="text-gray-500 h-5 w-5"/></RouterLink>
          <TrashIcon @click="deleteStudent(1)" class="text-gray-500 cursor-pointer h-5 w-5"/>

        </td>

      </tr>

      </tbody>
    </table>
  </div>

</section>
</template>

<style scoped>

</style>