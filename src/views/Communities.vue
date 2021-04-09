<template>
  <div>
    <h1 style="text-align: center; margin: 20px">Gruplar</h1>
    <div class="arama">
      <input
        type="text"
        placeholder="Grup ismi"
        id="grupismi"
        v-model="grupismi"
      />
      <button id="grupara">Grup Ara</button>
    </div>
    <CommunityList :grupismi="{grupismi}"/>
  </div>
</template>
<script>
import CommunityList from '../components/CommunityList/CommunityDetailSmall.vue';

export default {
  components: {
    CommunityList,
  },
  data() {
    return {
      grupismi: '',
    };
  },
};
</script>
<style lang="scss">
.arama {
  margin: 40px;

  #grupismi {
    border: 1px solid grey;
    border-radius: 5px;
    width: 400px;
    height: 40px;
    padding: 10px;
    margin-right: 15px;
  }

  #grupara {
    border: 1px solid green;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    background-color: green;
    color: white;
  }

  #grupara:hover {
    background-color: rgb(17, 90, 17);
  }
}
</style>
