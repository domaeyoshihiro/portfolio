<template>
  <div class="top-skill" id="skill">
    <h2 class="top-skill-ttl">Skill</h2>
    <div class="top-skill-ttl-langage">
      <h3 class="top-skill-list-langage-title">Langage</h3>
      <div class="top-skill-list-langage-grid">
        <article class="top-skill-item">
          <img 
            src="../assets/php.png" 
            alt="php" 
            class="top-skill-item-img" />
          <div class="top-skill-item-flex">
            <p class="top-skill-item-txt">PHP</p>
            <img 
              src="../assets/star5.png" 
              alt="php" 
              class="top-skill-item-img-star" />
          </div>
        </article>
        <article class="top-skill-item">
          <img 
            src="../assets/javascript.png"
            alt="javascript"
            class="top-skill-item-img"
          />
          <div class="top-skill-item-flex">
            <p class="top-skill-item-ttl">
              JavaScript
            </p>
            <img 
              src="../assets/star5.png" 
              alt="php" 
              class="top-skill-item-img-star" />
          </div>
        </article>
        <article class="top-skill-item">
          <img
            src="../assets/html.png"
            alt="html/css"
            class="top-skill-item-img"
          />
          <div class="top-skill-item-grid">
            <p class="top-skill-item-txt">
              HTML/CSS
            </p>
            <img 
              src="../assets/star5.png" 
              alt="php" 
              class="top-skill-item-img-star" />
          </div>
        </article>
      </div>
    </div>
    <div class="top-skill-list-framework">
      <h3 class="top-skill-ttl-framework">Framework</h3>
      <div class="top-skill-list-framework-grid">
        <article class="top-skill-item">
          <img
            src="../assets/laravel.png"
            alt="laravel"
            class="top-skill-item-img"
          />
          <div class="top-skill-item-flex">
            <p class="top-skill-item-txt">
              Laravel
            </p>
            <img 
              src="../assets/star5.png" 
              alt="php" 
              class="top-skill-item-img-star" />
          </div>
        </article>
        <article class="top-skill-item">
          <img
            src="../assets/vue.png"
            alt="vue"
            class="top-skill-item-img"
          />
          <div class="top-skill-item-flex">
            <p class="top-skill-item-txt">
              Vue.js
            </p>
            <img 
                src="../assets/star4.png" 
                alt="php" 
                class="top-skill-item-img-star" />
          </div>
        </article>
        <article class="top-skill-item">
          <img
            src="../assets/nuxt.png"
            alt="nuxt"
            class="top-skill-item-img"
          />
          <div class="top-skill-item-grid">
            <p class="top-skill-item-txt">
              Nuxt.js
            </p>
            <img 
              src="../assets/star4.png" 
              alt="php" 
              class="top-skill-item-img-star" />
          </div>
        </article>
      </div>
    </div>
    <div class="top-skill-list-tool">
      <h3 class="top-skill-ttl-tool">Tool</h3>
      <div class="top-skill-list-tool-grid">
        <article class="top-skill-item">
          <img
            src="../assets/github.png"
            alt="git/github"
            class="top-skill-item-img"
          />
          <div class="top-skill-item-flex">
            <p class="top-skill-item-txt">
              Git/Github
            </p>
            <img 
              src="../assets/star4.png" 
              alt="php" 
              class="top-skill-item-img-star" />
          </div>
        </article>
        <article class="top-skill-item">
          <img
            src="../assets/mysql.png"
            alt="Mysql"
            class="top-skill-item-img"
          />
          <div class="top-skill-item-flex">
            <p class="top-skill-item-txt">
              MySQL
            </p>
            <img 
              src="../assets/star5.png" 
              alt="php" 
              class="top-skill-item-img-star" />
          </div>
        </article>
        <article class="top-skill-item">
          <img
            src="../assets/docker.png"
            alt="Docker"
            class="top-skill-item-img"
          />
          <div class="top-skill-item-flex">
            <p class="top-skill-item-txt">
              Docker
            </p>
            <img 
              src="../assets/star4.png" 
              alt="php" 
              class="top-skill-item-img-star" />
          </div>
        </article>
        <article class="top-skill-item">
          <img
            src="../assets/aws.png"
            alt="AWS"
            class="top-skill-item-img"
          />
          <div class="top-skill-item-flex">
            <p class="top-skill-item-txt">
              AWS
            </p>
            <img 
              src="../assets/star4.png" 
              alt="php" 
              class="top-skill-item-img-star" />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill-name'
}
</script>

<style scoped>
.top-skill {
  padding-top: 80px;
  margin: 0 40px;
}

.top-skill-ttl{
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.top-skill-ttl-langage,
.top-skill-ttl-framework,
.top-skill-ttl-tool {
  font-family: 'Shippori Mincho', serif;
}

.top-skill-list-langage-title,
.top-skill-ttl-framework,
.top-skill-ttl-tool {
  margin-left: 150px;
}

.top-skill-list-langage-grid,
.top-skill-list-framework-grid,
.top-skill-list-tool-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  margin: 0 200px;
}

.top-skill-item {
  width: 24%;
  display: flex;
  margin-right: 20px;
}

.top-skill-item:nth-child(3n){
  margin-right: 0;
}

.top-skill-item-txt {
  font-family: 'Shippori Mincho', serif;
}

.top-skill-item-img {
  width: 80px;
  height: 70px;
  margin-top: 15px;
  margin-right: 20px;
}

.top-skill-item-img-star {
  width: 80px;
  height: 20px;
}

.top-skill-item-ttl{
  font-weight: bold;
  font-size: 18px;
}

</style>