<template>
  <div class="forgot-password">
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="text-center"></div>
          <div class="card">
            <div class="card-body">
              <form v-show="!isReset" @submit.prevent="onSubmit()">
                <div class="text-center">
                  <img
                    src="https://i.pinimg.com/originals/4d/eb/3c/4deb3c920b25c70288af20d66c559b72.png"
                    style="
                      background-position: -130px 0;
                      height: 30px;
                      width: 30px;
                    "
                  />
                  <h5><b>Giriş Yaparken Sorun mu Yaşıyorsun?</b></h5>
                  <div type="alert" class="alert alert-info" role="alert">
                    E-posta adresini gir, hesabına yeniden girebilmen için sana
                    bir bağlantı gönderelim.
                    <br />
                  </div>
                </div>
                <div>
                  <label for="email">E-posta</label>
                  <input
                    type="email"
                    required
                    v-model="email"
                    id="email"
                    class="form-control"
                    placeholder="e.g. name@domain.com"
                  />
                </div>
                <div>
                  <br />
                  <button type="submit" class="btn btn-outline-primary">
                    Giriş Bağlantısı Gönder
                  </button>
                </div>
              </form>
              <div v-show="isReset">
                <div v-if="succes">
                  <br />
                  <div class="alert alert-success" role="alert">
                    <table>
                      <tr>
                        <th colspan="3">
                          <h3>Successfull</h3>
                          <hr />
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://icons-for-free.com/iconfiles/png/512/complete+done+green+success+valid+icon-1320183462969251652.png"
                            alt="success"
                            style="margin: 10px; width: 90px; heigth: 90px"
                          />
                        </td>
                        <td>
                          <h5>
                            An email has been sent to "
                            <b>{{ email }}</b
                            >".
                          </h5>
                          <h5>
                            Please follow the link in your email to complete
                            your password reset request.
                          </h5>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div v-else>
                  <br />
                  <div class="alert alert-danger" role="alert">
                    <table>
                      <tr>
                        <th colspan="3">
                          <h3>Error</h3>
                          <hr />
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-error-icon.png"
                            alt="error"
                            style="margin: 10px; width: 90px; heigth: 90px"
                          />
                        </td>
                        <td>
                          <h5>
                            We are sorry."
                            <b>{{ email }}</b
                            >" is incorrect or the account does not exist.Please
                            enter correct address
                          </h5>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <button @click="tryAgain()" class="btn btn-outline-primary">
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ForgotPassword',
  data: () => ({
    email: '',
    password: '',
    isReset: false,
    succes: false,
  }),
  methods: {
    onSubmit: function bar() {
      axios
        .post('/api/authentication/forgot-password/', {
          email: this.email,
        })
        .then((res) => {
          if (res.status === 200) {
            this.succes = true;
            this.isReset = true;
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            this.isReset = true;
          }
        });
    },
    tryAgain: function bar() {
      this.isReset = false;
      this.email = '';
    },
  },
  created: () => {},
};
</script>

<style scoped>
.forgot-password {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: rgb(236, 235, 233);
}
</style>
