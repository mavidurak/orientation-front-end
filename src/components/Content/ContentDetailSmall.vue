<template>
  <div>
    <div class="list-group">
      <div class="list-group-item">
        <div class="row">
          <div class="col-md-1">
            <strong>{{ content.id }}</strong>
          </div>
          <div class="col-md-1">
            <img class="img-fluid" :src="content.image.path" :alt="content.image.name" />
          </div>
          <div class="col-md-6 text-left">
            <p id="type" class="badge badge-info">{{content.type}}</p>
            <h2> <b>{{content.name}}</b> <span class="badge badge-success">
              Views: {{content.views}}</span> <span class="badge badge-secondary">
              Rate: {{content.rate}}</span></h2>
            <p>{{content.description}}</p>
          </div>
          <div class="col-md-3">
            <RateAndWantedButton :content="content" @select="changeStatus" @rate="rated"
            id="wantedButton"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RateAndWantedButton from '@/components/RateAndWantedButtons/RateAndWantedButton.vue';
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'ContentDetailSmall',
  props: {
    content: Object,
  },
  components: {
    RateAndWantedButton,
  },
  methods: {
    changeStatus(status) {
      axios.get('/api/wanted-list', {
        headers: {
          'x-access-token': window.localStorage.getItem('x-access-token'),
        },
      }).then((res) => {
        const wanted = res.data.wantedList.find((wantedList) => wantedList.content_id
        === this.content.id);
        if (!wanted) {
          axios.post('/api/wanted-list', {
            content_id: this.content.id,
            status,
          }, {
            headers: {
              'x-access-token': window.localStorage.getItem('x-access-token'),
            },
          })
            .then((response) => {
              if (response.status === 201) {
                swal({
                  title: 'Success!',
                  text: 'Wanted status added successfully!',
                  icon: 'success',
                });
              } else {
                swal({
                  title: 'Error!',
                  text: 'Wanted status added failed!',
                  icon: 'error',
                });
              }
            });
        } else if (wanted) {
          axios.put(`/api/wanted-list/${this.content.id}`, {
            status,
          }, {
            headers: {
              'x-access-token': window.localStorage.getItem('x-access-token'),
            },
          })
            .then((response) => {
              if (response.status === 200) {
                swal({
                  title: 'Success!',
                  text: 'Wanted status updated successfully!',
                  icon: 'success',
                });
              } else {
                swal({
                  title: 'Error!',
                  text: 'Wanted status update failed',
                  icon: 'error',
                });
              }
            });
        }
      });
    },
    rated(r) {
      // eslint-disable-next-line
      console.log("rate", r);
    },
  },
};
</script>
<style lang="scss">
.list-group-item {
  #type {
    font-size:small;
  }
  #wantedButton {
    padding-top: 50px;
  }
  #rate-label{
    margin: 0;
    margin-top: 15px;
    font-size: 12px;
    color: darken(rgb(209, 209, 209), 16);
    line-height: .5;
  }
  .badge{
    font-size: 12px;
  }
}
</style>
