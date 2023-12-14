<script setup>
definePageMeta({
  middleware: 'auth'
})
    const supabase = useSupabaseClient();
    
const selected = ref(null);
        // Create a function to handle inserts

const handleUpdates = async (payload) => {
  console.log('update', payload)
}
const onClick = (lb) => {
    console.log(lb)
    selected.value = lb
}


</script>

<template>
    <div >

        <ListCategory @selected="onClick"/>
        <FormAddCategory :selected="selected"/>
    </div>
</template>
