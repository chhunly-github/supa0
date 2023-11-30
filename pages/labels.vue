<script setup>
definePageMeta({
  middleware: 'auth'
})
    const supabase = useSupabaseClient();
    const labels = ref([]);
    const { data } = await supabase
        .from('label')
        .select('id, title, color');
    // const { data} = await useFetch('/api/label', {
    //   headers: useRequestHeaders(['cookie'])
    // })
    // console.log(data.value.label)
    labels.value = data;
const selected = ref(null);
        // Create a function to handle inserts
const handleInserts = async (payload) => {
  labels.value.push(payload.new);
}
const handleUpdates = async (payload) => {
  console.log('update', payload)
}
const onClick = (lb) => {
    console.log(lb)
    selected.value = lb
}

// Listen to inserts
supabase
  .channel('label')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'label' }, handleInserts)
//   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'label' }, handleUpdates)
  .subscribe()
</script>

<template>
    <div >

        <div v-if="labels && labels.length" class="flex flex-wrap gap-3">
            <UButton v-for="lb in labels" :color="lb.color" @click="onClick(lb)">{{ lb.title }}</UButton>
        </div>
        <FormAddLabel :selected="selected"/>
    </div>
</template>