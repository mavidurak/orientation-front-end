<template>
  <div>
    <div>
        <h2><b>Gruplar</b></h2>
      <input type="text" placeholder="Grup ismi" id="grupismi" />
      <button id="grupara">Grup ara</button>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#grupismi {
  width: 400px;
  height: 30px;
  margin-top: 30px;
  margin-right: 10px;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px;
}
#grupara {
  width: 100px;
  height: 30px;
  border: 1px solid rgb(17, 138, 17);
  border-radius: 3px;
  background-color: rgb(17, 138, 17);
  color: white;
}
#grupara:hover {
  background-color: rgb(6, 95, 29);
}
</style>
