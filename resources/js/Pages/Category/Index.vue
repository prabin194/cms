<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { shallowRef } from "vue";
import type { Category } from "@/components/categories/columns";
import { columns } from "@/components/categories/columns";
import DataTable from "@/components/categories/DataTable.vue";

const props = defineProps({
  categories: {
    type: Object,
    required: true,
  },
});

const data = shallowRef<Category[]>(props.categories.data);
</script>

<template>
  <Head title="Category" />

  <AuthenticatedLayout>
    <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div class="w-full">
        <div class="flex items-center">
          <h1 class="text-lg font-semibold md:text-2xl my-2">Categories</h1>
        </div>
        <DataTable :columns="columns" :data="data" />
      </div>
    </main>
  </AuthenticatedLayout>
</template>
