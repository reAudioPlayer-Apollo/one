<!--
  - Copyright (c) 2023, reAudioPlayer ONE.
  - Licenced under the GNU General Public License v3.0
  -->

<template>
    <div class="shelf">
        <div class="header">
            <h2>{{heading}}<span v-if="icon" class="icon material-icons-outlined">{{icon}}</span></h2>
        </div>
        <div class="items">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FullShelf',
        props: {
            heading: String,
            icon: String
        }
    }
</script>

<style scoped>

    span.icon {
        transform: translateY(3px);
        margin-left: 20px;
    }

    .header {
        margin: 10px 10px 0px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .header>h2 {
        align-self: flex-start;
        margin-top: 0;
        margin-bottom: 10px;
    }

    .header>h5 {
        text-transform: uppercase;
        align-self: center;
        margin: 0;
    }

    .header>h5:hover {
        cursor: pointer;
    }

    .items {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
        grid-template-rows: 1fr;
        gap: 1em;
        overflow-y: auto;
    }
</style>
