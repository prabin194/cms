<script setup lang="ts">
import {Button} from "@shadcn/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@shadcn/ui/dropdown-menu";
import {MoreHorizontal, Pencil, Trash} from "lucide-vue-next";

defineProps<{
    category: {
        uid: string;
    };
}>();

function copy(uid: string) {
    navigator.clipboard.writeText(uid);
}
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="w-8 h-8 p-0">
                <span class="sr-only">Open menu</span>
                <MoreHorizontal class="w-4 h-4"/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem @click="copy(category.uid)">
                Copy UID
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
                <Pencil class="mr-2 h-4 w-4"/>
                Edit
            </DropdownMenuItem
            >
            <DropdownMenuItem>
                <Trash class="mr-2 h-4 w-4"/>
                Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
