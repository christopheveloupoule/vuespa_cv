<template>
    <div>
        <h2>Détails de l'utilisateur {{ this.$route.params.id }}</h2>
        <p><router-link to="/users">retour</router-link></p>
    </div>
</template>

<script>
export default {
  name: 'UserDetails'
}
</script>
