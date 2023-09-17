<template>
  <div class="top-work" id="works">
    <h2 class="top-work-ttl">Works</h2>
    <div class="top-work-list">
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
        <a href="/rese" class="top-work-item-thumbnail">
          <img 
            src="../assets/Rese/rese.png"
            alt="Rese"
            class="top-work-item-img"
          />
        </a>
        <div class="top-work-item-info">
        </div>
        <div class="top-work-item-flex">
          <a href="/rese" class="top-work-item-ttl">飲食店アプリ</a>
          <p class="top-work-item-tag">個人開発</p>
        </div>
      </article>
      <article class="top-work-item">
        <a href="/sns" class="top-work-item-thumbnail">
          <img
            src="../assets/SNS/sns.png"
            alt="SNS"
            class="top-work-item-img"
          />
        </a>
        <div class="top-work-item-flex">
          <a href="/sns" class="top-work-item-ttl">SNS</a>
          <p class="top-work-item-tag">個人開発</p>
        </div>
      </article>
      <article class="top-work-item">
        <a href="/terrast" class="top-work-item-thumbnail">
          <img
            src="../assets/Terrast/terrast.png"
            alt="Terrast"
            class="top-work-item-img"
          />
        </a>
        <div class="top-work-item-flex">
          <a href="/terrast" class="top-work-item-ttl">TERRAST</a>
          <p class="top-work-item-tag2">案件開発</p>
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
  padding-top: 80px;
  margin: 0 40px;
}

.top-work-ttl{
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.top-work-list{
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.top-work-item{
  width: 32%;
  margin-right: calc((100% - (32% * 3)) / 2);
}

.top-work-item:nth-child(3n){
  margin-right: 0;
}

.top-work-item-img {
  width: 100%;
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
</style>