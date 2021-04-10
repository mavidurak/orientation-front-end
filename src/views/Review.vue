<template>
  <div id="app" class="container">
    <img
      class="book"
      src="https://i.dr.com.tr/cache/500x400-0/originals/0000000633872-1.jpg"
    />
    <a><b>Hayvanlardan Tanrılara Sapiens: İnsan Türünün Kısa Bir Tarihi</b></a>
    <br />
    <a>Yazar: Yuval Noah Harari</a>
    <hr />
    <label for="review_rating">Puanım: 6/10</label> <br />
    <div class="raf">
      <form>
        <label for="shelves">Raflar / durum: </label>
        <select id="shelves" name="shelves">
          <option value="past">Okudum</option>
          <option value="now">Okuyorum</option>
          <option value="future">Okuyacağım</option>
        </select>
      </form>
    </div>
    <hr />
    <label for="reviewselect">Ne düşünüyorsun ?</label>
    <div class="right">
      <div class="reviewselectlist">
        <a style="color: #767676" href="#">Biçimlendirme ipuçları</a> |
        <a style="color: #767676" href="#">Kitap/yazar ekle</a> |
        <a style="color: #767676" href="#">Metin alanını büyüt</a>
      </div>
    </div>
    <textarea
      v-model="reviewtext"
      class="textBox"
      id="usertext"
      maxlength="15000"
      name="review[review]"
      placeholder="Kitap hakkında görüşlerinizi yazabilirsiniz"
      rows="12"
      style="display: block; height: 240px; margin-top: 0px; margin-bottom: 0px"
    ></textarea>
    <div class="spoiler">
      <input name="reviewspoiler" type="hidden" value="0" /><input
        type="checkbox"
        value="1"
        name="reviewspoiler"
        id="reviewspoiler"
      />
      <label for="reviewspoiler">Spoiler alarmı! tüm incelemeyi gizle</label>
    </div>
    <hr />
    <b>Okuduğum tarihler</b> <br />
    <span class="info">
      <a>Yeniden mi okuyorsun?</a> <br />
      <a
        >Yeniden okuduğun tarihleri de ekleyip meydan okumana ekleyebilirsin.</a
      >
    </span>
    <tr class="datebooks">
      <td class="rereadingStartedAtHeader">
        <label id="date" for="dateofbirth">Başlama tarihi (isteğe bağlı)</label>
        <input type="date" name="dateofbirth" id="dateofbirth" />
      </td>
      <td class="rereadingEndedAtHeader">
        <label id="date" for="dateofbirth">Bittiği tarih (isteğe bağlı)</label>
        <input type="date" name="dateofbirth" id="dateofbirth" />
      </td>
    </tr>
    <br />
    <div class="details">
      <details>
        <summary style="font-size: 12px; color: #767676">Daha fazlası</summary>
        <span class="recommendation1">
          <label for="review_recommendation">Şunları tavsiye ederim:</label>
          <input
            class="w3-input w3-border w3-animate-input"
            type="text"
            style="width: 30%"
          />
        </span>
        <span class="recommendation2">
          <br />
          <label for="review_recommender_user_name1"
            >Bu tavsiyeyi bana kim verdi:</label
          >
          <input
            class="w3-input w3-border w3-animate-input"
            type="text"
            style="width: 30%"
          />
        </span>
        <div class="privatenotes">
          <label style="display: inline-block" for="review_notes"
            >Özel notlar, sadece siz görebilirsiniz:</label
          >
          <textarea
            class="textBox largeTextBox"
            id="review_notes"
            maxlength="512"
            name="review[notes]"
            rows="4"
            style="width: 100%"
          ></textarea>
        </div>
      </details>
      <hr />
      <div class="formitem">
        <input
          class="gr-button"
          id="review_submit_for_52845775"
          name="next"
          type="submit"
          value="Paylaş"
          @click="log($event)"
        />
        <span class="right">
          <input
            id="add_to_blog"
            name="add_to_blog"
            type="checkbox"
            value="1"
          />
          <label for="add_to_blog">Sayfamda paylaş</label> |
          <input
            id="add_update"
            name="add_update"
            type="checkbox"
            value="1"
            checked='"true"/'
          />
          <label for="add_update" id="add_update_text">Özet akışıma ekle</label>
        </span>
      </div>
    </div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  </div>
</template>
<script>
export default {

  el: '#app',
  data() {
    return {
      reviewtext: null,
    };
  },
  methods: {
    log(e) {
      console.log(e.reviewtext);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.book {
  height: 80px;
  width: 70px;
  padding: 0 10px 10px 0;
  float: left;
  margin-right: 10px;
}
.container {
  margin: 0 auto;
  width: 750px;
  background: #ffffff;
  text-align: left;
}
select {
  width: 20%;
  padding: 5px 15px;
  border: 1px;
  border-radius: 4px;
  background-color: #f1f1f1;
  color: rgb(187, 166, 133);
}
.right {
  float: right;
}
#usertext {
  resize: vertical;
  width: 100%;
}
span.info {
  font-size: 12px;
  color: #767676;
}
[type="date"] {
  background: #fff
    url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)
    97% 50% no-repeat;
}
[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}
#date {
  display: block;
  float: left;
}
#dateofbirth {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 5px;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
  width: 190px;
}
.recommedation1 {
  float: left;
}
.reviewselectlist {
  font-size: 12px;
  color: #767676;
}
</style>
