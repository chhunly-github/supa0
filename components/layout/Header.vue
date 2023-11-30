<script setup>

</script>

<template>
    <div class="flex gap-4 bg-emerald-950 py-1 px-2">
        <ULink
            to="/"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
            Home
        </ULink>
        <ULink
            to="/labels"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
            labels
        </ULink>
        <ULink
            to="/profile"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
            profile
        </ULink>
    </div>
</template>