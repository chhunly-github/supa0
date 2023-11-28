<script setup>
const items = [{
  key: 'account',
  label: 'Account',
  description: 'Make changes to your account here. Click save when you\'re done.'
}, {
  key: 'password',
  label: 'Password',
  description: 'Change your password here. After saving, you\'ll be logged out.'
}]
</script>
<template>
<div>
    <UTabs :items="items" class="w-full">
        <template #item="{ item }">
            <UCard>
                <template #header>
              <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {{ item.description }}
              </p>
            </template>
            <Account v-if="item.key==='account'"/>
            <ChangePassword v-if="item.key==='password'"/>
            </UCard>
        </template>
    </UTabs>
</div>
</template>