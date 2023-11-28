<script setup>
    const supabase = useSupabaseClient();

    const title = ref('');
    const color = ref('');
    const loading = ref(false);
    const addLabel = async () => {
        try {
            loading.value = true
            let { error } = await supabase
            .from('label')
            .insert({ title: title.value, color: color.value })
            if (error) throw error
        } catch (error) {
            alert(error.message)
        } finally {
            loading.value = false
        }
    }
    const updateLabel = async () => {
        try {
        loading.value = true
        console.log(props.selected)
        let { error } = await supabase
        .from('label')
        .update({title: title.value, color: color.value })
        .eq('id', props.selected.id);

        if (error) throw error
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
    }
    const onSubmit = () => {
        if(props.selected) {
            updateLabel();
        }else {
            addLabel();
        }
    }
    const props = defineProps(['selected']);
    watch(props, () => {
        if(props.selected) {
            title.value = props.selected.title;
            color.value = props.selected.color;
        }
    })
</script>
<template>
    <form class="form-widget" @submit.prevent="onSubmit">
        <div>
            <label for="title">title</label>
            <input id="title" type="text" v-model="title" />
        </div>
        <div>
            <label for="color">New color</label>
            <input id="color" type="text" v-model="color" />
        </div>

        <div>
            <input type="submit" class="button block primary" :value="loading ? 'Loading ...' : (selected ? 'Update': 'Add')"
                :disabled="loading" />
        </div>
    </form>
</template>