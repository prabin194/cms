<script setup>
import {ref} from 'vue';
import NavLink from '@/Components/NavLink.vue';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@shadcn/ui/dropdown-menu'
import {Input} from '@shadcn/ui/input'
import {Sheet, SheetContent, SheetTrigger} from '@shadcn/ui/sheet'
import {Bell, CircleUser, Home, LineChart, Menu, Package, Package2, Search, ShoppingCart, Users} from "lucide-vue-next";

const showingNavigationDropdown = ref(false);
</script>

<template>
    <!--    <div>-->
    <!--        <div class="min-h-screen bg-gray-100">-->
    <!--            <nav-->
    <!--                class="border-b border-gray-100 bg-white"-->
    <!--            >-->
    <!--                &lt;!&ndash; Primary Navigation Menu &ndash;&gt;-->
    <!--                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">-->
    <!--                    <div class="flex h-16 justify-between">-->
    <!--                        <div class="flex">-->
    <!--                            &lt;!&ndash; Logo &ndash;&gt;-->
    <!--                            <div class="flex shrink-0 items-center">-->
    <!--                                <Link :href="route('dashboard')">-->
    <!--                                    <ApplicationLogo-->
    <!--                                        class="block h-9 w-auto fill-current text-gray-800"-->
    <!--                                    />-->
    <!--                                </Link>-->
    <!--                            </div>-->

    <!--                            &lt;!&ndash; Navigation Links &ndash;&gt;-->
    <!--                            <div-->
    <!--                                class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"-->
    <!--                            >-->
    <!--                                <NavLink-->
    <!--                                    :href="route('dashboard')"-->
    <!--                                    :active="route().current('dashboard')"-->
    <!--                                >-->
    <!--                                    Dashboard-->
    <!--                                </NavLink>-->
    <!--                            </div>-->
    <!--                        </div>-->

    <!--                        <div class="hidden sm:ms-6 sm:flex sm:items-center">-->
    <!--                            &lt;!&ndash; Settings Dropdown &ndash;&gt;-->
    <!--                            <div class="relative ms-3">-->
    <!--                                <Dropdown align="right" width="48">-->
    <!--                                    <template #trigger>-->
    <!--                                        <span class="inline-flex rounded-md">-->
    <!--                                            <button-->
    <!--                                                type="button"-->
    <!--                                                class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"-->
    <!--                                            >-->
    <!--                                                {{ $page.props.auth.user.name }}-->

    <!--                                                <svg-->
    <!--                                                    class="-me-0.5 ms-2 h-4 w-4"-->
    <!--                                                    xmlns="http://www.w3.org/2000/svg"-->
    <!--                                                    viewBox="0 0 20 20"-->
    <!--                                                    fill="currentColor"-->
    <!--                                                >-->
    <!--                                                    <path-->
    <!--                                                        fill-rule="evenodd"-->
    <!--                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"-->
    <!--                                                        clip-rule="evenodd"-->
    <!--                                                    />-->
    <!--                                                </svg>-->
    <!--                                            </button>-->
    <!--                                        </span>-->
    <!--                                    </template>-->

    <!--                                    <template #content>-->
    <!--                                        <DropdownLink-->
    <!--                                            :href="route('profile.edit')"-->
    <!--                                        >-->
    <!--                                            Profile-->
    <!--                                        </DropdownLink>-->
    <!--                                        <DropdownLink-->
    <!--                                            :href="route('logout')"-->
    <!--                                            method="post"-->
    <!--                                            as="button"-->
    <!--                                        >-->
    <!--                                            Log Out-->
    <!--                                        </DropdownLink>-->
    <!--                                    </template>-->
    <!--                                </Dropdown>-->
    <!--                            </div>-->
    <!--                        </div>-->

    <!--                        &lt;!&ndash; Hamburger &ndash;&gt;-->
    <!--                        <div class="-me-2 flex items-center sm:hidden">-->
    <!--                            <button-->
    <!--                                @click="-->
    <!--                                    showingNavigationDropdown =-->
    <!--                                        !showingNavigationDropdown-->
    <!--                                "-->
    <!--                                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"-->
    <!--                            >-->
    <!--                                <svg-->
    <!--                                    class="h-6 w-6"-->
    <!--                                    stroke="currentColor"-->
    <!--                                    fill="none"-->
    <!--                                    viewBox="0 0 24 24"-->
    <!--                                >-->
    <!--                                    <path-->
    <!--                                        :class="{-->
    <!--                                            hidden: showingNavigationDropdown,-->
    <!--                                            'inline-flex':-->
    <!--                                                !showingNavigationDropdown,-->
    <!--                                        }"-->
    <!--                                        stroke-linecap="round"-->
    <!--                                        stroke-linejoin="round"-->
    <!--                                        stroke-width="2"-->
    <!--                                        d="M4 6h16M4 12h16M4 18h16"-->
    <!--                                    />-->
    <!--                                    <path-->
    <!--                                        :class="{-->
    <!--                                            hidden: !showingNavigationDropdown,-->
    <!--                                            'inline-flex':-->
    <!--                                                showingNavigationDropdown,-->
    <!--                                        }"-->
    <!--                                        stroke-linecap="round"-->
    <!--                                        stroke-linejoin="round"-->
    <!--                                        stroke-width="2"-->
    <!--                                        d="M6 18L18 6M6 6l12 12"-->
    <!--                                    />-->
    <!--                                </svg>-->
    <!--                            </button>-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                </div>-->

    <!--                &lt;!&ndash; Responsive Navigation Menu &ndash;&gt;-->
    <!--                <div-->
    <!--                    :class="{-->
    <!--                        block: showingNavigationDropdown,-->
    <!--                        hidden: !showingNavigationDropdown,-->
    <!--                    }"-->
    <!--                    class="sm:hidden"-->
    <!--                >-->
    <!--                    <div class="space-y-1 pb-3 pt-2">-->
    <!--                        <ResponsiveNavLink-->
    <!--                            :href="route('dashboard')"-->
    <!--                            :active="route().current('dashboard')"-->
    <!--                        >-->
    <!--                            Dashboard-->
    <!--                        </ResponsiveNavLink>-->
    <!--                    </div>-->

    <!--                    &lt;!&ndash; Responsive Settings Options &ndash;&gt;-->
    <!--                    <div-->
    <!--                        class="border-t border-gray-200 pb-1 pt-4"-->
    <!--                    >-->
    <!--                        <div class="px-4">-->
    <!--                            <div-->
    <!--                                class="text-base font-medium text-gray-800"-->
    <!--                            >-->
    <!--                                {{ $page.props.auth.user.name }}-->
    <!--                            </div>-->
    <!--                            <div class="text-sm font-medium text-gray-500">-->
    <!--                                {{ $page.props.auth.user.email }}-->
    <!--                            </div>-->
    <!--                        </div>-->

    <!--                        <div class="mt-3 space-y-1">-->
    <!--                            <ResponsiveNavLink :href="route('profile.edit')">-->
    <!--                                Profile-->
    <!--                            </ResponsiveNavLink>-->
    <!--                            <ResponsiveNavLink-->
    <!--                                :href="route('logout')"-->
    <!--                                method="post"-->
    <!--                                as="button"-->
    <!--                            >-->
    <!--                                Log Out-->
    <!--                            </ResponsiveNavLink>-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--            </nav>-->

    <!--            &lt;!&ndash; Page Heading &ndash;&gt;-->
    <!--            <header-->
    <!--                class="bg-white shadow"-->
    <!--                v-if="$slots.header"-->
    <!--            >-->
    <!--                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">-->
    <!--                    <slot name="header" />-->
    <!--                </div>-->
    <!--            </header>-->

    <!--            &lt;!&ndash; Page Content &ndash;&gt;-->
    <!--            <main>-->
    <!--                <slot />-->
    <!--            </main>-->
    <!--        </div>-->
    <!--    </div>-->

    <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-muted/40">
        <div class="hidden border-r bg-background/40 md:block">
            <div class="flex h-full max-h-screen flex-col gap-2">
                <div class="flex h-14 items-center border-b px-4 lg:h-[48px] lg:px-6">
                    <Link :href="route('dashboard')" class="flex items-center gap-2 font-semibold">
                        <Package2 class="h-6 w-6"/>
                        <span class="">BOS CMS</span>
                    </Link>
                    <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
                        <Bell class="h-4 w-4"/>
                        <span class="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div class="flex-1">
                    <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
                        <NavLink
                            :href="route('dashboard')"
                            :active="route().current('dashboard')"
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Home class="h-4 w-4"/>
                            Dashboard
                        </NavLink>
                        <NavLink
                            :href="route('post.index')"
                            :active="route().current('post.index')"
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Package class="h-4 w-4"/>
                            Posts
                        </NavLink>
                        <NavLink
                            :href="route('category.index')"
                            :active="route().current('category.index')"
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Package class="h-4 w-4"/>
                            Categories
                        </NavLink>
                        <NavLink
                            :href="route('tag.index')"
                            :active="route().current('tag.index')"
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Package class="h-4 w-4"/>
                            Tags
                        </NavLink>
                        <NavLink
                            :href="route('page.index')"
                            :active="route().current('page.index')"
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Package class="h-4 w-4"/>
                            Pages
                        </NavLink>
                        <NavLink
                            :href="route('post.index')"
                            :active="route().current('post.index')"
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Package class="h-4 w-4"/>
                            Settings
                        </NavLink>
                        <NavLink
                            :href="route('contact.index')"
                            :active="route().current('contact.index')"
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Package class="h-4 w-4"/>
                            Contact Us
                        </NavLink>
                        <NavLink
                            :href="route('analytic.index')"
                            :active="route().current('analytic.index')"
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Package class="h-4 w-4"/>
                            Analytics
                        </NavLink>
                    </nav>
                </div>
                <div class="mt-auto p-4">
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <header class="flex h-14 items-center gap-4 border-b bg-background/40 px-4 lg:h-[48px] lg:px-6">
                <Sheet>
                    <SheetTrigger as-child>
                        <Button
                            variant="outline"
                            size="icon"
                            class="shrink-0 md:hidden"
                        >
                            <Menu class="h-5 w-5"/>
                            <span class="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" class="flex flex-col">
                        <nav class="grid gap-2 text-lg font-medium">
                            <a
                                href="#"
                                class="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 class="h-6 w-6"/>
                                <span class="sr-only">Acme Inc</span>
                            </a>
                            <a
                                href="#"
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <Home class="h-5 w-5"/>
                                Dashboard
                            </a>
                            <a
                                href="#"
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                            >
                                <ShoppingCart class="h-5 w-5"/>
                                Orders
                                <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                    6
                                </Badge>
                            </a>
                            <a
                                href="#"
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <Package class="h-5 w-5"/>
                                Products
                            </a>
                            <a
                                href="#"
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <Users class="h-5 w-5"/>
                                Customers
                            </a>
                            <a
                                href="#"
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <LineChart class="h-5 w-5"/>
                                Analytics
                            </a>
                        </nav>
                        <div class="mt-auto">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Upgrade to Pro</CardTitle>
                                    <CardDescription>
                                        Unlock all features and get unlimited access to our
                                        support team.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button size="sm" class="w-full">
                                        Upgrade
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </SheetContent>
                </Sheet>
                <div class="w-full flex-1">
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="secondary" size="icon" class="rounded-full">
                            <CircleUser class="h-6 w-6"/>
                            <span class="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <slot />
        </div>
    </div>
</template>
