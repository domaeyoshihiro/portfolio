<template>
  <div class="sns">
    <div class="sns-top">
      <h2 class="sns-ttl">SNSアプリ</h2>
      <p class="sns-tag">個人開発</p>
    </div>
    <div class="slider-container">
      <button class="slider-button" @click="prevImage">&lt;</button>
      <img :src="require(`@/assets/SNS/${images[currentImageIndex]}`)" alt="Image" class="slider-image" />
      <button class="slider-button" @click="nextImage">&gt;</button>
    </div>
    <div class="center-container">
      <div>
        <p class="center-container-text">
          1ヶ月かけて作成したアプリになります。<br>
          LaravelとNuxt.jsで実装しました。<br>
          APIの知識、バックエンドとフロントエンドのデータの受け渡しなどの知識を身につけることができました。<br>
        </p>
      </div>
      <div>
        <h3>期間</h3>
        <p class="center-container-text2">
          2022年12月（1ヶ月間）
        </p>
      </div>
      <div class="function">
        <h3>機能</h3>
        <ul>
          <li>ログイン・ログアウト機能</li>
          <li>投稿追加・削除</li>
          <li>いいね追加・削除</li>
          <li>コメント追加</li>
        </ul>
      </div>
      <div class="skill">
        <h3>使用技術</h3>
        <ul>
          <li>Laravel</li>
          <li>Nuxt.js</li>
          <li>MySQL</li>
          <li>Github</li>
        </ul>
      </div>
      <div class="github">
        <h3>Github</h3>
        <a class="github-link" href="https://github.com/domaeyoshihiro/snspj">SNSアプリフロントエンドのgithubへ</a>
        <a class="github-link" href="https://github.com/domaeyoshihiro/snspj-backend">SNSアプリバックエンドのgithubへ</a>
      </div>
    </div>
    <div>
      <a href="/#works" class="works-link">Works一覧へ</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sns-name',

  data() {
    return {
      images: [
        'sns.png',
        'sns2.png'
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
.sns {
  padding-top: 80px;
}

.sns-top {
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.sns-ttl{
  margin-bottom: 0px;
}

.sns-tag {
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
  display: block;
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