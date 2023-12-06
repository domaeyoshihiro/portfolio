<template>
  <div class="todo">
    <div class="todo-top">
      <h2 class="todo-ttl">Portfolio</h2>
      <p class="todo-tag">個人開発</p>
    </div>
    <div class="slider-container">
      <button class="slider-button" @click="prevImage">&lt;</button>
      <img :src="require(`@/assets/Portfolio/${images[currentImageIndex]}`)" alt="Image" class="slider-image" />
      <button class="slider-button" @click="nextImage">&gt;</button>
    </div>
    <div class="center-container">
      <div>
        <p class="center-container-text">
          ポートフォリオを作成しました。<br>
          随時更新していきます。
        </p>
      </div>
      <div>
        <h3>期間</h3>
        <p class="center-container-text2">
          2023年10月〜（随時更新中）
        </p>
      </div>
      <div class="function">
        <h3>項目</h3>
        <ul>
          <li>TOP</li>
          <li>WORKS</li>
          <li>SKILL</li>
          <li>PROFILE</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div class="skill">
        <h3>使用技術</h3>
        <ul>
          <li>Vue.js</li>
          <li>Netlify</li>
          <li>Github</li>
        </ul>
      </div>
      <div class="github">
        <h3>Github</h3>
        <a class="github-link" href="https://github.com/domaeyoshihiro/portfolio.git">Portfolioのgithubへ</a>
      </div>
    </div>
    <div>
      <a href="/#works" class="works-link">Works一覧へ</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio-name',

  data() {
    return {
      images: [
        'portfolio.png',
        'portfolio2.png',
        'portfolio3.png',
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
.todo {
  padding-top: 80px;
}

.todo-top {
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.todo-ttl{
  margin-bottom: 0px;
}

.todo-tag {
  display: inline-block;
  text-align: center;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
  background-color: #D3D3D3;
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

.center-container {
  max-width: 50%;
  margin: 0 auto 60px;
  text-align: left;
}

.center-container-text {
  width: 100%;
}

.center-container-text2 {
  margin-left: 20px;
}

.github-link {
  color: #000000;
  margin-left: 30px;
}

.works-link {
  color: #0000FF;
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 10px;    
}
</style>