<template>
  <div id="review">
    <div class="container">
      <img class="book" :src="content.image.path" />
      <div id="info">
        <a
          ><strong> {{ content.name }} </strong></a
        >
        <br />
        <a>Author:{{ content.user.name }}</a>
        <hr />
        <br />
        <label for="review-rating">Rate: <Rate @rate="rated" /></label> <br />
        <div class="raf">
          <form>
            <label for="shelves">Shelves / status: </label>
            <WantedButton :contentType="content.type" @select="selectStatus" />
          </form>
        </div>
        <hr />
      </div>
      <label for="review-select">What are you thinking ?</label>
      <div class="right">
        <div class="review-selectlist">
          <a href="#">Formatting tips</a> |
          <a href="#">Add book/author</a> |
          <a href="#">Enlarge text field</a>
        </div>
      </div>
      <textarea
        v-model="reviewtext"
        class="text-box"
        id="usertext"
        maxlength="15000"
        placeholder="You can write your opinion about the book."
        rows="12"
      ></textarea>
      <div class="spoiler">
        <input
          v-model="isSpoiler"
          type="checkbox"
          id="reviewspoiler"
        />
        <label for="review-spoiler">Spoilers! hide all review</label>
      </div>
      <hr />
      <strong>The dates I read</strong> <br />
      <span class="info">
        <a>Are you re-reading?</a> <br />
        <a
          >You can add reread dates to the challenge.</a
        >
      </span>
      <tr class="date-books">
        <td class="rereading-started-at-header">
          <label id="date" for="date-of-birth"
            >starting date (optional)</label
          >
          <input
            v-model="startDate"
            type="date"
            id="dateofbirth"
          />
        </td>
        <td class="rereading-ended-at-header">
          <label id="date" for="date-of-birth"
            >End date (optional)</label
          >
          <input
            v-model="finishDate"
            type="date"
            id="dateofbirth"
          />
        </td>
      </tr>
      <br />
      <div class="details">
        <details>
          <summary>
            More
          </summary>
          <span class="recommendation1">
            <label for="review-recommendation">I recommend:</label>
            <input
              class="w3-input w3-border w3-animate-input"
              type="text"
              style="width: 30%"
            />
          </span>
          <span class="recommendation2">
            <br />
            <label for="review-recommender-user-name1"
              >Who gave me this advice:</label
            >
            <input
              class="w3-input w3-border w3-animate-input"
              type="text"
              style="width: 30%"
            />
          </span>
          <div class="private-notes">
            <label style="display: inline-block" for="review_notes"
              >Private notes, only you can see:</label
            >
            <textarea
              class="text-box largeTextBox"
              id="review_notes"
              maxlength="512"
              rows="4"
              style="width: 100%"
            ></textarea>
          </div>
        </details>
        <div class="form-item">
          <input
            class="gr-button"
            id="review_submit_for_52845775"
            type="submit"
            value="Share"
            @click="submit"
          />
          <span class="right">
            <input
              id="add_to_blog"
              type="checkbox"
              value="1"
            />
            <label for="add-to-blog">Share on my page</label> |
            <input
              id="add_update"
              type="checkbox"
              value="1"
              checked='"true"/'
            />
            <label for="add-update" id="add_update_text"
              >Add to my feed</label
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
import Rate from '@/components/RateAndWantedButtons/Rate.vue';
import WantedButton from '@/components/RateAndWantedButtons/WantedButton.vue';

export default {
  name: 'Review',
  components: {
    Rate,
    WantedButton,
  },
  data() {
    return {
      content: {},
      reviewtext: null,
      isSpoiler: null,
      rate: null,
      startDate: null,
      finishDate: null,
      status: null,
    };
  },
  methods: {
    submit() {
      // eslint-disable-next-line
      if( this.isSpoiler === null) {
        this.isSpoiler = false;
      }

      axios
        .post('/api/reviews/',
          {
            content_id: this.content.id,
            text: this.reviewtext,
            score: this.rate,
            is_spoiler: this.isSpoiler,
          },
          {
            headers: {
              'x-access-token': window.localStorage.getItem('x-access-token'),
            },
          })
        .then((res) => {
          if (res.status === 200) {
            swal({
              icon: 'success',
              text: `${this.content.name} review created successfully`,
            });
            this.$router.push(`/contents/${this.content.slug}`);
          }
        })
        .catch((err) => {
          const message = err.response.data.errors
            .map((e) => e.message);
          swal({
            icon: 'error',
            text: `${message}`,
          });
        });
    },
    rated(r) {
      this.rate = r;
    },
    selectStatus(s) {
      this.status = s;
    },
  },
  mounted() {
    axios
      .get(`/api/contents/${this.$route.params.content}`, {
        headers: {
          'x-access-token': window.localStorage.getItem('x-access-token'),
        },
      })
      .then((res) => {
        this.content = res.data;
      });
  },
};
</script>

<style lang="scss" scoped>
#review {
  summary{
    font-size: 12px;
    color: #767676;
  }
  hr {
    width: 80%;
    float: right;
  }

  a {
    text-decoration: none;
  }

  .book {
    width: 120px;
    padding: 0 10px 10px 0;
    float: left;
    margin-right: 20px;
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
    display: block;
    height: 240px;
    margin-top: 0px;
    margin-bottom: 0px;
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

  .review-selectlist {
    font-size: 12px;
    color: #767676;
    a {
      color: #767676;
    }
  }
}
</style>
