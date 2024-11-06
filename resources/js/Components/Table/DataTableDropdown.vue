<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@shadcn/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shadcn/ui/dialog";
import { MoreHorizontal, Pencil, Trash } from "lucide-vue-next";
import { Head, useForm } from "@inertiajs/vue3";
import { useToast } from "@shadcn/ui/toast/use-toast";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const { toast } = useToast();

const form = useForm({});
const isDialogOpen = ref(false);

const onDelete = () => {
  form.delete(route(`${props.type}.destroy`, props.item.uid), {
    preserveScroll: true,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Category deleted successfully",
        variant: "success",
      });
    },
    onError: () => {
      toast({
        title: "Woops !",
        description: "Something went wrong",
        variant: "destructive",
      });
    },
    onFinish: () => {
      isDialogOpen.value = false;
    },
  });
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem as-child>
        <a :href="route(`${type}.edit`, item.uid)">
          <Pencil class="mr-2 h-4 w-4" />
          Edit
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem as-child>
        <Dialog :open="isDialogOpen">
          <DialogTrigger>
            <Button variant="ghost" @click="isDialogOpen = true">
              <Trash class="mr-2 h-4 w-4" />
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle class="uppercase">Delete {{ type }}</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                {{ type }} and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter class="ml-auto flex items-center gap-2">
              <DialogClose as-child>
                <Button
                  type="button"
                  variant="secondary"
                  class="h-7 gap-1 me-2"
                >
                  Close
                </Button>
              </DialogClose>
              <Button
                type="button"
                variant="destructive"
                class="h-7 gap-1"
                @click="onDelete"
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
