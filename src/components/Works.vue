<template>
  <div class="top-work" id="works">
    <h2 class="top-work-ttl">Works</h2>
    <div class="top-work-list">
      <article class="top-work-item">
        <router-link to="/terrast" class="top-work-item-thumbnail">
          <img
            src="../assets/Terrast/terrast.png"
            alt="Terrast"
            class="top-work-item-img"
          />
        </router-link>
        <div class="top-work-item-flex">
          <router-link to="/terrast" class="top-work-item-ttl">TERRAST</router-link>
          <p class="top-work-item-tag2">案件開発</p>
        </div>
      </article>
      <article class="top-work-item">
        <router-link to="/rese" class="top-work-item-thumbnail">
          <img 
            src="../assets/Rese/rese.png"
            alt="Rese"
            class="top-work-item-img"
          />
        </router-link>
        <div class="top-work-item-info">
        </div>
        <div class="top-work-item-flex">
          <router-link to="/rese" class="top-work-item-ttl">飲食店アプリ</router-link>
          <p class="top-work-item-tag">個人開発</p>
        </div>
      </article>
      <article class="top-work-item">
        <router-link to="/sns" class="top-work-item-thumbnail">
          <img
            src="../assets/SNS/sns.png"
            alt="SNS"
            class="top-work-item-img"
          />
        </router-link>
        <div class="top-work-item-flex">
          <router-link to="/sns" class="top-work-item-ttl">SNSアプリ</router-link>
          <p class="top-work-item-tag">個人開発</p>
        </div>
      </article>
      <article class="top-work-item">
        <router-link to="/todo" class="top-work-item-thumbnail">
          <img 
            src="../assets/Todo/todo.png" 
            alt="todo" 
            class="top-work-item-img" />
        </router-link>
        <div class="top-work-item-flex">
          <router-link to="/todo" class="top-work-item-ttl">Todoアプリ</router-link>
          <p class="top-work-item-tag">個人開発</p>
        </div>
      </article>
      <article class="top-work-item">
        <router-link to="/portfolio" class="top-work-item-thumbnail">
          <img 
            src="../assets/Portfolio/portfolio.png" 
            alt="portfolio" 
            class="top-work-item-img" />
        </router-link>
        <div class="top-work-item-flex">
          <router-link to="/portfolio" class="top-work-item-ttl">Portfolio</router-link>
          <p class="top-work-item-tag">個人開発</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works-name'
}
</script>

<style scoped>
.top-work {
  width : 80%;
  padding-top: 80px;
  margin: 0 auto;
}

.top-work-ttl{
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.top-work-list{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.top-work-item:nth-child(3n){
  margin-right: 0;
}

.top-work-item-img {
  width: 100%;
  height: 70%;
}

.top-work-item-flex {
  display: flex;
  align-items: center;
}

.top-work-item-ttl{
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  color: #000000;
  font-family: 'Shippori Mincho', serif;
}

.top-work-item-tag {
  display: inline-block;
  text-align: center;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
  background-color: #D3D3D3;
  padding: 5px 10px;
  margin-left: 15px;
}

.top-work-item-tag2 {
  display: inline-block;
  text-align: center;
  border: 1px solid #FFA500;
  border-radius: 5px;
  background-color: #FFA500;
  padding: 5px 10px;
  margin-left: 15px;
}

@media screen and (max-width: 768px){
  .top-work {
    width : 90%;
    padding-top: 80px;
    margin: 0 auto;
  }
  .top-work-list{
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media screen and (max-width: 480px){
  .top-work {
    width : 85%;
    padding-top: 80px;
    margin: 0 auto;
  }

  .top-work-item{
    width: 100%;
    margin-bottom: 20px;
    margin-right: 0;
  }

  .top-work-item-flex {
    display: block;
    align-items: center;
  }

  .top-work-list{
    display: block;
    margin-top: 20px;
  }

  .top-work-item-ttl{
    font-size: 16px;
  }

  .top-work-item-tag,
  .top-work-item-tag2 {
    font-size: 14px;
  }
}
</style>