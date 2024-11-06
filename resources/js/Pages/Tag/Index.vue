<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { shallowRef } from "vue";
import type { Tag } from "@/components/columns/tags";
import { columns } from "@/components/columns/tags";
import DataTable from "@/components/table/DataTable.vue";
import { Button } from "@shadcn/ui/button";

const props = defineProps({
  tags: {
    type: Object,
    required: true,
  },
});

const data = shallowRef<Tag[]>(props.tags.data);
</script>

<template>
  <Head title="Tag" />

  <AuthenticatedLayout>
    <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div class="w-full">
        <div class="flex items-center justify-between">
          <h1 class="text-lg font-semibold md:text-2xl my-2">Tags</h1>
          <div class="ml-auto flex items-center gap-2">
            <Button variant="outline" class="h-7 gap-1">
              <File class="h-3.5 w-3.5" />
              <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
            <Button class="h-7 gap-1" as-child>
              <a :href="route('tag.create')">
                <PlusCircle class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Tag
                </span>
              </a>
            </Button>
          </div>
        </div>

        <DataTable :columns="columns" :data="data" type="tag" />
      </div>
    </main>
  </AuthenticatedLayout>
</template>
