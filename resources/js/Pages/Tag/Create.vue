<script setup lang="ts">
import { ChevronLeft } from "lucide-vue-next";
import { Head, useForm } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Badge } from "@shadcn/ui/badge";
import { Button } from "@shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shadcn/ui/card";
import { Input } from "@shadcn/ui/input";
import { Label } from "@shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shadcn/ui/select";
import { Textarea } from "@shadcn/ui/textarea";
import { ref } from "vue";

const formInput = ref(null);

const form = useForm({
  name: "",
  description: "",
  parent_id: "",
});

const storeTag = () => {
  form.post(route("tag.store"), {
    preserveScroll: true,
    onSuccess: () => form.reset(),
    onError: () => {
      if (form.errors.name) {
        form.reset("name", "description", "parent_id");
        formInput.value.focus();
      }
    },
  });
};
</script>

<template>
  <Head title="New Tag" />

  <AuthenticatedLayout>
    <main
      class="w-full flex-1 items-start gap-4 p-4 my-6 sm:px-6 sm:py-0 md:gap-12"
    >
      <div class="mx-auto grid flex-1 auto-rows-max gap-4">
        <div class="flex items-center gap-4">
          <Button variant="outline" size="icon" class="h-7 w-7">
            <ChevronLeft class="h-4 w-4" />
            <span class="sr-only">Back</span>
          </Button>
          <h1
            class="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0"
          >
            Tag
          </h1>
          <Badge variant="outline" class="ml-auto sm:ml-0"> New</Badge>
          <div class="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" as-child>
              <a :href="route('tag.index')"> Discard </a>
            </Button>
            <Button @click.prevent="storeTag"> Save Tag</Button>
          </div>
        </div>
        <div
          class="w-full grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-12"
        >
          <div
            class="w-full grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Tag Details</CardTitle>
                <CardDescription>
                  Add New Tag Details for your blogs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="grid gap-6">
                  <div class="grid gap-3">
                    <Label for="name">Name</Label>
                    <Input
                      id="name"
                      ref="formInput"
                      type="text"
                      class="w-full"
                      v-model="form.name"
                    />
                  </div>
                  <div class="grid gap-3">
                    <Label for="description">Description</Label>
                    <Textarea
                      id="description"
                      v-model="form.description"
                      class="min-h-32"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div class="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline"> Discard</Button>
          <Button @click.prevent="storeTag"> Save Tag</Button>
        </div>
      </div>
    </main>
  </AuthenticatedLayout>
</template>
