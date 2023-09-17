<template>
  <div class="rese">
    <div class="rese-top">
      <h2 class="rese-ttl">飲食店アプリ</h2>
      <p class="rese-tag">個人開発</p>
    </div>
    <div class="slider-container">
      <button class="slider-button" @click="prevImage">&lt;</button>
      <img :src="require(`@/assets/Rese/${images[currentImageIndex]}`)" alt="Image" class="slider-image" />
      <button class="slider-button" @click="nextImage">&gt;</button>
    </div>

    <div class="function">
      <h3>機能</h3>
      <ul>
        <li>会員登録機能</li>
        <li>ログイン・ログアウト機能</li>
        <li>メール認証機能</li>
        <li>飲食店詳細取得</li>
        <li>飲食店お気に入り機能</li>
        <li>飲食店予約機能</li>
        <li>一般ユーザー飲食店予約情報取得</li>
        <li>検索機能（エリア・ジャンル・店名）</li>
        <li>評価機能</li>
        <li>決済機能</li>
        <li>QR機能</li>
        <li>店舗代表者管理</li>
        <li>店舗代表者飲食店追加</li>
        <li>リマインダー機能</li>
        <li>店舗代表者追加</li>
        <li>お知らせメール機能</li>
      </ul>
    </div>

    <div class="skill">
      <h3>使用技術</h3>
      <ul>
        <li>Laravel</li>
        <li>Docker</li>
        <li>AWS</li>
      </ul>
    </div>

    <div class="github">
      <h3>Github</h3>
      <a class="github-link" href="https://github.com/domaeyoshihiro/coachtech-advanced-ec-site">飲食店アプリのgithubへ</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rese-name',

  data() {
    return {
      images: [
        'rese.png',
        'rese2.png',
        'rese3.png',
        'rese4.png',
        'rese5.png',
        'rese6.png',
        'rese7.png',
        'rese8.png',
        'rese9.png',
        'rese10.png'
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
.rese {
  padding-top: 80px;
}

.rese-top {
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.rese-ttl{
  margin-bottom: 0px;
}

.rese-tag {
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

.function,
.skill,
.github {
  margin: 0 0 30px 40px;
}

.github-link {
  color: #000000;
  margin-left: 30px;
}

</style>