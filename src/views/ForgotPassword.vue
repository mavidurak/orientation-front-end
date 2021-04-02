<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <div class="text-center"></div>
        <div class="card">
          <div class="card-body">
            <form v-show="!isReset" @submit.prevent="onSubmit()">
              <div class="text-center">
                <img src="https://i.pinimg.com/originals/4d/eb/3c/4deb3c920b25c70288af20d66c559b72.png"
                style="background-position: -130px 0; height: 96px; width: 96px;"
                />
                <h5><b>Giriş Yaparken Sorun mu Yaşıyorsun?</b></h5>
                <div type="alert" class="alert alert-info" role="alert">
                  E-posta adresini gir , hesabına
                  yeniden girebilmen için sana bir bağlantı gönderelim.
                  <br />
                </div>
              </div>
              <div>
                <label for="mail">E-posta</label>
                <input
                  type="email"
                  required
                  v-model="mail"
                  id="mail"
                  class="form-control"
                  placeholder="e.g. name@domain.com"
                />
              </div>
              <div>
                <br />
              <button type="submit" class="btn btn-outline-primary">Giriş Bağlantısı Gönder</button>
              </div>
            </form>
            <div v-show="isReset">
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
                        <b>{{ mail }}</b
                        >".
                      </h5>
                      <h5>
                        Please follow the link in your email to complete your
                        password reset request.
                      </h5>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div v-show="isReset">
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
                        <b>{{ mail }}</b
                        >" is incorrect or the account does not exist.Please
                        enter correct mail address
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
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    mail: '',
    password: '',
    isReset: false,
  }),
  methods: {
    onSubmit: function bar() {
      // isMailCorrect = true => continue
      this.isReset = true;
    },
    tryAgain: function bar() {
      this.isReset = false;
      this.mail = '';
      // more code
    },
  },
  created: () => {},
};
</script>
