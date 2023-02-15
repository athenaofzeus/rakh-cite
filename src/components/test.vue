<template>
    <div :v-if="!Boolean(href)"><slot></slot></div>
    <a :v-if="Boolean(href)" href="href"><slot></slot></a>
</template>

<script>
export default {
    name : 'test-copmS',
    props : [
        'backgroundColor',
        'href'
    ],
}
</script>

<style lang="scss">

</style>