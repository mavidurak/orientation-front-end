<template>
  <div>
    <div>
      <div class="card mb-3" style="max-width: 800px">
        <div class="row g-0">
          <div class="col-md-4" style="width: 100px; margin-top: 10px">
            <img :src="community.image" id="img" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ community.name }}</h5>
              <p class="card-text">
                <small class="text-muted">{{ community.members }} üye</small>
              </p>
              <p class="card-text" id="comment">
                {{ community.detail }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['community'],
};
</script>
<style lang="scss">
.card {
  position: relative;
  left: 500px;
  width: 800px;
  margin-top: 30px;
  height: 100px;
  border: none;
  #img {
    height: 80px;
    width: 100px;
  }
}
.card-body {
  .card-title {
    text-align: left;
    font-size: 17px;
    color: #1167b8;
  }
  .text-muted {
    position: relative;
    right: 210px;
    bottom: 10px;
  }
  #comment {
    font-size: 12px;
    position: relative;
    bottom: 25px;
    text-align: left;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
