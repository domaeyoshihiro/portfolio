<template>
  <div class="terrast">
    <div class="terrast-top">
      <h2 class="terrast-ttl">Terrast</h2>
      <p class="terrast-tag">案件開発</p>
    </div>
    <div class="slider-container">
      <button class="slider-button" @click="prevImage">&lt;</button>
      <img :src="require(`@/assets/Terrast/${images[currentImageIndex]}`)" alt="Image" class="slider-image" />
      <button class="slider-button" @click="nextImage">&gt;</button>
    </div>

    <div class="function">
      <h3>携わった機能</h3>
      <ul>
        <li>環境の取水量項目追加</li>
        <li>目標設定機能追加</li>
      </ul>
    </div>

    <div class="skill">
      <h3>使用技術</h3>
      <ul>
        <li>Laravel</li>
        <li>Vue.js</li>
        <li>Docker</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terrast-name',

  data() {
    return {
      images: [
        'terrast.png',
        'terrast2.png',
        'terrast3.png',
        'terrast4.png',
      ],
      currentImageIndex: 0,
    };
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
  },
}
</script>

<style scoped>
.terrast {
  padding-top: 80px;
}

.terrast-top {
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.terrast-ttl{
  margin-bottom: 0px;
}

.terrast-tag {
  display: inline-block;
  text-align: center;
  border: 1px solid #FFA500;
  border-radius: 5px;
  background-color: #FFA500;
  padding: 5px 10px;
}

.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.slider-button {
  background: transparent;
  font-size: 24px;
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 20px;
}

.slider-image {
  max-width: 50%;
  max-height: 80vh;
  margin-bottom: 30px;
}

.function,
.skill {
  margin: 0 0 30px 40px;
}

</style>