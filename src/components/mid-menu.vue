<template>
    <ul class="middle-menu">
        <li class="menu-line menu-line-section" v-for="[k, value] in Object.entries($store.state.sections)" :key="k">
            <div>
            <img :src="require(`../assets/${value}.svg`)" alt="img" class="sect-icon">
            <span class="menu-name">{{ k }}</span>
            </div>
        </li>
    </ul>
</template>

<script>
import styles from '../styles/mid-menu.scss'
export default {
    name : 'mid-menu-comp',
    styles
}
</script>

<style>

</style>