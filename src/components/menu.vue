<template>
    <ul class="menu" v-if="$store.state.listMenuShown">
        <li class="menu-line" v-for="[k, value], index in Object.entries($store.state.sections)" :key="k">
            <div>
            <img :src="require(`../assets/${value}.svg`)" alt="img" class="sect-icon">
            <span class="menu-name">{{ k }}</span>
            </div>
            <div class="line" v-if="index < $store.state.sectionsLength - 1"></div>
        </li>
    </ul>
</template>

<script>

import styles from '../styles/menu.scss'
export default {
    name: 'menu-comp',
    styles
}
</script>