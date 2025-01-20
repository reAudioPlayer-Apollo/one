<!--
  - Copyright (c) 2023, reAudioPlayer ONE.
  - Licenced under the GNU General Public License v3.0
  -->

<script lang="ts" setup>
import { Playable, usePlayerStore } from "../../store/player";
import { onMounted, ref, watch } from "vue";
import WaveSurfer from "wavesurfer.js";

// @ts-ignore
import themes from "../../assets/themes.json";
import { useInsightStore } from "../../store/insight";

const audio = ref<WaveSurfer | null>(null);
const audioElement = new Audio();

onMounted(() => {
    // @ts-ignore
    const theme = window.getCurrentTheme();
    const waveColor = themes["fg-base"][theme];
    const progressColor = themes["fg-secondary"][theme];

    audio.value = WaveSurfer.create({
        container: "#waveform",
        waveColor,
        progressColor,
        cursorWidth: 0,
        barWidth: 1,
        barGap: 3,
        height: document.querySelector("#waveform")?.clientHeight,
        media: audioElement,
    });
    audio.value.on("play", () => {
        player.setPlaying(true);
    });
    audio.value.on("pause", () => {
        player.setPlaying(false);
    });
    audio.value.on("audioprocess", () => {
        player.setProgress(audio.value.getCurrentTime());
    });
    audio.value.on("finish", () => {
        if (forcePlay) return;

        forcePlay = true;
        player.onSongEnded();
    });
    audio.value.on("ready", () => {
        if (!audio.value) return;
        player.setDuration(audio.value.getDuration());

        if (forcePlay || player.playing) {
            play();
            forcePlay = false;
        }
    });

    updateSrc();
    setVolume(player.volume);
});

const player = usePlayerStore();
const insights = useInsightStore();
let forcePlay = false;
let initialised = false;

const initialise = () => {
    if (initialised) return;

    var AudioContext = window.AudioContext;
    const context = new AudioContext();

    audio.value.once("play", () => {
        const source = context.createMediaElementSource(audioElement);
        source.connect(context.destination);
        insights.setSource(source, context);
    });

    initialised = true;
};

const updateSrc = () => {
    if (player.stream) {
        audioElement.src = player.stream;
        audio.value.load(player.stream);
    }
};

watch(
    () => player.song.id,
    () => {
        if (audio.value.isPlaying()) {
            forcePlay = true;
        }

        updateSrc();
        player.setPlaying(false);
    }
);

const play = () => {
    try {
        initialise();
        audio.value.play();
    } catch (_) {}
};

const pause = () => {
    audio.value.pause();
};

const seek = (time: number) => {
    audio.value.seekTo(time / player.durationSeconds);
};

const setVolume = (volume: number) => {
    let asPercent = volume / 100;
    asPercent = Math.min(Math.max(asPercent, 0), 1);
    audio.value.setVolume(asPercent);
};

const setMute = (muted: boolean) => {
    audio.value.setMuted(muted);
};

const playable: Playable = {
    play,
    pause,
    seek,
    setVolume,
    setMute,
};

defineExpose(playable);
</script>
<template>
    <div
        id="waveform"
        @audioprocess="player.setProgress($event)"
    />
</template>
<style lang="scss">
#waveform,
#waveform canvas {
    width: 100%;
    height: calc(var(--h-player) / 2 - 1em) !important;
}

#waveform .canvases {
    min-height: unset;
}
</style>
