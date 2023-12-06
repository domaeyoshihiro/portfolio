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

    <div class="center-container">
      <div>
        <p class="center-container-text">
          プログラミングを学習してきて初めての業務案件になります。<br>
          chart.jsを用いたグラフの作成など初めての実装も短期間で完成させることができました。<br>
          機能の変更、新機能実装時は一度に大量の変更をしてからエラー発見をするとエラー箇所の特定が難しいです。変更時には細かく確認をするなど、丁寧な開発を心がけました。
          エラー発生時にはChatGPTなど新しく出たツールも活用することで解決しています。<br>
          また、期日や日々の報告などの徹底をしております。<br>
          プログラミング能力だけではなくSlackによる業務報告やJIRAによるタスク管理などの能力も向上しました。
        </p>
      </div>
      <div>
        <h3>サービス概要</h3>
        <p class="center-container-text2">
          非財務情報の収集・整理・分析比較を圧倒的に効率化し、SDGs経営を推進するための「TERRAST for Enterprise」を提供。<br>
          質問項目に回答するだけで、AIが会社のESGカルテを作成。<br>
          会社のサステナ的魅力を発見・証明することがでる。（公式サイトより引用）
        </p>
      </div>
      <div>
        <h3>期間</h3>
        <p class="center-container-text2">
          2023年7月〜2023年9月（3ヶ月間）
        </p>
      </div>
      <div>
        <h3>開発体制</h3>
        <p class="center-container-text2">
          PM：1名<br>
          実装者：2名
        </p>
      </div>
      <div class="function">
        <h3>携わった機能</h3>
        <p class="center-container-text2">
          LaravelとVue3を用いた新機能追加のコーダーとして携わりました。<br>
          企業の現状のESG/SDGsデータ集計の項目追加・未来のESG/SDGsデータの目標入力ページの作成を行いました。
        </p>
        <ul>
          <li>環境の取水量項目追加</li>
          <li>目標設定機能追加</li>
          <li>chart.jsを用いたグラフの作成</li>
        </ul>
      </div>
      <div class="skill">
        <h3>使用技術</h3>
        <ul>
          <li>Laravel</li>
          <li>Vue.js</li>
          <li>Docker</li>
          <li>MySQL</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
    <div>
      <a href="/#works" class="works-link">Works一覧へ</a>
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
        'terrast5.png',
        'terrast6.png',
        'terrast7.png',
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

.works-link {
  color: #0000FF;
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 10px;    
}
</style>