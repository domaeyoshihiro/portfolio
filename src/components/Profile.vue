<template>
  <div class="top-profile" id="profile">
    <h2 class="top-profile-ttl">PROFILE</h2>
    <div class="top-profile-flex">
      <div>
        <img
          src="../assets/cat.png"
          alt="profile"
          class="top-profile-item-img"
        />
      </div>
      <div class="">
        <h3 class="top-profile-name">同前佳寛</h3>
        <p class="top-profile-txt">
          1999年6月2日生まれ。現在24歳。<br>
          大学卒業後、メーカー企業に就職。<br>
          2022年8月よりプログラミング学習開始。<br>
        </p>
        <p class="top-profile-txt">
          HTML,CSS,JavaScript,PHPを主に学習。フレームワークはVue.js,Nuxt.js,Laravelを使用。<br>
          2023年7月、実務案件を経験。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile-name'
}
</script>

<style scoped>
.top-profile {
  padding-top: 80px;
}

.top-profile-ttl{
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.top-profile-flex {
  display: flex;
  justify-content: center;
}

.top-profile-item-img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #DCDCDC;
  margin-top: 20px;
  margin-right: 20px;
}

.top-profile-name {
  margin-left: 20px;
}

.top-profile-txt {
  margin-left: 20px;
}

</style>