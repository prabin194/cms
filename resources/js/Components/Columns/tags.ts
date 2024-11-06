import DropdownAction from "@/components/Table/DataTableDropDown.vue";
import { ColumnDef } from "@tanstack/vue-table";
import { h, ref } from "vue";
import { Button } from "@shadcn/ui/button";
import { ArrowUpDown, ChevronDown } from "lucide-vue-next";
import { Checkbox } from "@shadcn/ui/checkbox";

export interface Tag {
    id: string;
    name: string;
    description?: string;
    slug: string;
    count: number;
}

export const columns: ColumnDef<Tag>[] = [
    {
        id: "select",
        header: ({ table }) =>
            h(Checkbox, {
                checked:
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate"),
                "onUpdate:checked": (value) =>
                    table.toggleAllPageRowsSelected(!!value),
                ariaLabel: "Select all",
            }),
        cell: ({ row }) =>
            h(Checkbox, {
                checked: row.getIsSelected(),
                "onUpdate:checked": (value) => row.toggleSelected(!!value),
                ariaLabel: "Select row",
            }),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return h(
                Button,
                {
                    variant: "ghost",
                    onClick: () =>
                        column.toggleSorting(column.getIsSorted() === "asc"),
                },
                () => ["Name", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
            );
        },
        cell: ({ row }) =>
            h("div", { class: "capitalize" }, row.getValue("name")),
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) =>
            h("div", { class: "lowercase" }, row.getValue("description")),
    },
    {
        accessorKey: "slug",
        header: "Slug",
        cell: ({ row }) =>
            h("div", { class: "lowercase" }, row.getValue("slug")),
    },
    {
        accessorKey: "count",
        header: "Count",
        cell: ({ row }) => {
            const count = row.getValue("count") ?? 0;

            return h("div", { class: "font-medium" }, count);
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const item = row.original;

            return h(
                "div",
                { class: "relative" },
                h(DropdownAction, {
                    item,
                    type: 'tag',
                    onExpand: row.toggleExpanded,
                })
            );
        },
    },
];
