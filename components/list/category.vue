<script setup>
const emit = defineEmits(['selected']);
const supabase = useSupabaseClient();
const categories = ref([]);
const {data} = await supabase
    .from('category')
    .select('id, title, icon, description');
categories.value = data;

// Listen to inserts
const handleInserts = async (payload) => {
    categories.value.push(payload.new);
}
supabase
    .channel('category')
    .on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'category'}, handleInserts)
    //   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'label' }, handleUpdates)
    .subscribe()

const onClick = (lb) => {
    console.log(lb)
    emit('selected', lb);
}
</script>
<template>
    <div class="flex flex-wrap gap-3">
        <UButton v-for="lb in (categories || [])" @click="onClick(lb)">{{ lb.title }}</UButton>
    </div>
</template>
