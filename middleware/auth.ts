export default defineNuxtRouteMiddleware(() => {
    const user = useSupabaseUser();
    console.log('user mid', user.value)
    if(!user.value) {
        return navigateTo('/');
    }
})