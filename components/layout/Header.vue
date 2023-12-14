<script setup>
    const links = ref([
        {
            to: '/',
            title: 'Home'
        },
        {
            to: '/labels',
            title: 'Label'
        },
        {
            to: '/categories',
            title: 'Category'
        },
        {
            to: '/profile',
            title: 'Profile'
        },

    ])
</script>

<template>
    <div class="flex gap-4 bg-emerald-950 py-1 px-2">
        <ULink v-for="link in links"
            :to="link.to"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
            {{link.title}}
        </ULink>
    </div>
</template>
