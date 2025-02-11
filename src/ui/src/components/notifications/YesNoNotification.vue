<!--
  - Copyright (c) 2023, reAudioPlayer ONE.
  - Licenced under the GNU General Public License v3.0
  -->

<script lang="ts" setup>
import { PropType } from "vue";
import type { IYesNoNotification } from "./createNotification";
import Card from "../../containers/Card.vue";
import { useRouter } from "vue-router";

const props = defineProps({
    notification: {
        type: Object as PropType<IYesNoNotification>,
        required: true,
    },
});

const emit = defineEmits(["remove"]);
const router = useRouter();

const no = () => {
    emit("remove", props.notification.id);
    if (props.notification.onNo) {
        props.notification.onNo();
    }
};

const yes = () => {
    emit("remove", props.notification.id);
    if (props.notification.onYes) {
        props.notification.onYes();
    }
};

const click = () => {
    emit("remove", props.notification.id);
    if (props.notification.onClick) {
        props.notification.onClick();
    }
    if (props.notification.redirect) {
        router.push(props.notification.redirect);
    }
};
</script>

<template>
    <Card class="notification" @click.stop.prevent="click">
        <div class="message">
            <h4>
                {{ notification.message }}
            </h4>
            <span v-if="notification.details" class="details">
                {{ notification.details }}
            </span>
        </div>
        <div class="yes-no">
            <div class="yes option" @click.stop.prevent="yes">
                <span class="material-symbols-rounded"> check </span>
            </div>
            <div class="no option" @click.stop.prevent="no">
                <span class="material-symbols-rounded"> close </span>
            </div>
        </div>
    </Card>
</template>

<style lang="scss" scoped>
.notification {
    gap: 2em;
    align-items: center;
    color: var(--fg-base);
    overflow: hidden;
    filter: var(--drop-shadow);
    background: var(--fg-contrast);
    cursor: pointer;

    .message {
        padding: 0.5em 1em;

        h4 {
            margin: 0;
        }

        .details {
            font-size: 0.8em;
        }
    }
}

.yes-no {
    display: flex;
    flex-direction: row;

    .option {
        flex: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &.yes {
            background-color: var(--success);
        }

        &.no {
            background-color: var(--fail);
        }
    }
}
</style>
