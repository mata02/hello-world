<template>
  <!-- @contextmenu.prevent を付与することで、この要素内での右クリックを禁止します -->
  <div @contextmenu.prevent>
    <video
      ref="videoPlayer"
      class="video-js vjs-default-skin"
      controls
    ></video>
  </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default {
  data() {
    return {
      player: null
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, {
      autoplay: false,
      controls: true,
      sources: [{ src: 'https://example.com', type: 'video/mp4' }]
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>
