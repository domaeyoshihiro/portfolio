<template>
  <div class="top-work" id="works">
    <h2 class="top-work-ttl">Works</h2>
    <div class="top-work-list">
      <article class="top-work-item">
        <router-link to="/todo" class="top-work-item-thumbnail">
          <img 
            src="../assets/todo.png" 
            alt="todo" 
            class="top-work-item-img" />
        </router-link>
        <h3 class="top-work-item-ttl">
          <router-link to="/todo" >Todoアプリ</router-link>
          
        </h3>
      </article>
      <article class="top-work-item">
        <a href="#" class="top-work-item-thumbnail">
          <img 
            src="../assets/rese.png"
            alt="Rese"
            class="top-work-item-img"
          />
        </a>
        <div class="top-work-item-info">
        </div>
        <h3 class="top-work-item-ttl">
          <a href="/todo">飲食店アプリ</a>
        </h3>
      </article>
      <article class="top-work-item">
        <a href="#" class="top-work-item-thumbnail">
          <img
            src="../assets/sns.png"
            alt="SNS"
            class="top-work-item-img"
          />
        </a>
        <h3 class="top-work-item-ttl">
          <a href="#">SNS</a>
        </h3>
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

.top-work-item-ttl{
  font-weight: bold;
  font-size: 18px;
}

</style>