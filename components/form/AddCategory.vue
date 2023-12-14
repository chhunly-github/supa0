<script setup>
const supabase = useSupabaseClient();

const title = ref('');
const description = ref('');
const icon = ref('');
const loading = ref(false);
const addNew = async () => {
    try {
        loading.value = true
        let {error} = await supabase
            .from('category')
            .insert({title: title.value, description: description.value, icon: icon.value})
        if (error) throw error
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}
const update = async () => {
    try {
        loading.value = true
        console.log(props.selected)
        let {error} = await supabase
            .from('category')
            .update({title: title.value, description: description.value, icon: icon.value})
            .eq('id', props.selected.id);

        if (error) throw error
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}
const onSubmit = () => {
    if (props.selected) {
        update();
    } else {
        addNew();
    }
}
const props = defineProps(['selected']);
watch(props, () => {
    if (props.selected) {
        title.value = props.selected.title;
        description.value = props.selected.description;
        icon.value = props.selected.icon;
    }
})
</script>
<template>
    <form class="form-widget" @submit.prevent="onSubmit">
        <div>
            <label for="title">title</label>
            <input id="title" type="text" v-model="title"/>
        </div>
        <div>
            <label for="description">New description</label>
            <input id="description" type="text" v-model="description"/>
        </div>
        <div>
            <label for="icon">New icon</label>
            <input id="icon" type="text" v-model="icon"/>
        </div>

        <div>
            <input type="submit" class="button block primary"
                   :value="loading ? 'Loading ...' : (selected ? 'Update': 'Add')"
                   :disabled="loading"/>
        </div>
    </form>
</template>