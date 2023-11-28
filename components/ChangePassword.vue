<template>
    <form class="form-widget" @submit.prevent="updatePassword">
        <div>
            <label for="password">New Password</label>
            <input id="password" type="text" v-model="new_password" />
        </div>
        <div>
            <label for="confirm">Confirm</label>
            <input id="confirm" type="text" v-model="confirm" />
        </div>

        <div>
            <input type="submit" class="button block primary" :value="loading ? 'Loading ...' : 'Update'"
                :disabled="loading || new_password !== confirm" />
        </div>
    </form>
</template>

<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const new_password = ref('')
const confirm = ref('')

const user = useSupabaseUser();

async function updatePassword() {

    try {
        loading.value = true
        let { error } = await supabase.auth.updateUser({ password: new_password.value })
        if (error) throw error
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}

</script>
