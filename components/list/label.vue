<script setup>
const emit = defineEmits(['selected']);
const supabase = useSupabaseClient();
const labels = ref([]);
const {data} = await supabase
    .from('label')
    .select('id, title, color');
labels.value = data;

// Listen to inserts
const handleInserts = async (payload) => {
    labels.value.push(payload.new);
}
supabase
    .channel('label')
    .on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'label'}, handleInserts)
    //   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'label' }, handleUpdates)
    .subscribe()

const onClick = (lb) => {
    console.log(lb)
    emit('selected', lb);
}
</script>
<template>
    <div class="flex flex-wrap gap-3">
        <UButton v-for="lb in (labels || [])" :color="lb.color" @click="onClick(lb)">{{ lb.title }}</UButton>
    </div>
</template>
