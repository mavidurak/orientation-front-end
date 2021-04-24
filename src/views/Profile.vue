<template>

  <div class="row">
  <div class="col-8">  <div class="card">
      <div class="infos">
        <div class="name capitalize">
          {{ name }}
          <a href="...">(edit profile)</a>
        </div>
        <hr>
        <div class="row row-cols-auto">
    <div class="col">
    <div class="avatar">
      <img  src="https://image.flaticon.com/icons/svg/149/149992.svg"  style="width:50px;height:50px; float:left;"/>
      <p><a href="...">0 ratings (0.0 avg)</a></p>
      <a href="...">0 reviews</a>
      <a href="...">more photos (0)</a>
      </div>
      </div>
    <div class="col">
    <div>
        <div ><h5>Details   {{ details}}</h5></div>
        <div><h5> Activity {{ activity }}</h5></div>
        <div ><i class="fas fa-fw fa-envelope"></i>{{ email }}</div>
      </div>
      </div>
      </div>
  </div>
    <div class="refresh">
      <i class="fas fa-fw fa-random" @click="generate()" data-text="Random"></i>
      <i class="fas fa-fw fa-venus" @click="generate('female')" data-text="Female"></i>
      <i class="fas fa-fw fa-mars" @click="generate('male')" data-text="Male"></i>
    </div>
  </div>
    <div class="col-4">col-4</div>
  </div>
</div>
</template>
<script>
export default {
  el: 'main',
  data() {
    return {
      back: '',
      name: 'Şule Koç',
      details: 'Istanbul 34',
      email: 'sulekooc@gmail.com',
      activity: 'Joined in March 2021, last active this month',
    };
  },
  beforeMount() {
    this.generate();
  },
  methods: {
    generate(gender) {
      const self = this;

      this.$.ajax({
        url: `https://uinames.com/api/?ext&maxlen=15${
          gender !== null && (gender === 'male' || gender === 'female') ? `&gender=${gender}` : ''
        }`,
        dataType: 'json',
        success(data) {
          self.name = `${data.title} ${data.name} ${data.surname}`;

          self.gender = data.gender;
          self.email = data.email;
          self.picture = data.photo;

          /* eslint-disable no-use-before-define */
          const color = getRandomColor();
          const color1 = shadeColor(color, 40);
          const color2 = shadeColor(color, -40);
          self.back = `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`;
        },
      });
    },
  },
};

function getRandomColor() {
  const brightness = 4;

  const rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
  const mix = [brightness * 51, brightness * 51, brightness * 51]; // 51 => 255/5
  const mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]]
    .map((x) => Math.round(x / 2.0));
  return rgbToHex(mixedrgb[0], mixedrgb[1], mixedrgb[2]);
}

/* eslint-disable no-mixed-operators, radix, no-use-before-define */
function shadeColor(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);
  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);
  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;
  const RR = R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
  const GG = G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
  const BB = B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);
  return `#${RR}${GG}${BB}`;
}

/* eslint-disable no-bitwise */
function rgbToHex(red, green, blue) {
  const rgb = blue | (green << 8) | (red << 16);
  return `#${(0x1000000 + rgb).toString(16).slice(1)}`;
}
</script>

<style lang="scss">
$global_gap: 10px;
$shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
$shadow_hover: 0 6px 10px rgba(0, 0, 0, 0.16), 0 6px 10px rgba(0, 0, 0, 0.23);

@import url("https://fonts.googleapis.com/css?family=Nunito");
.body {

  .main {

    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .card {
      width: 470px;
      min-height: 185px;

      display: flex;

      padding: $global_gap;
      border-radius: 5px;
      box-shadow: $shadow;
      background: rgba(255, 255, 255, 0.8);

      .avatar {
        width: 1px;
        height: 1px;
        margin-right: $global_gap;
        border-radius: 50%;
        //box-shadow: $shadow;
        //border: 4px solid rgba(255, 255, 255, .5);
      }

      .infos {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;

        div {
          &:not(:last-child) {
            margin-bottom: $global_gap;
          }

          &.capitalize {
            text-transform: capitalize;
          }

          &.name {
            font-size: 150%;
            font-weight: bold;
          }

          i {
            margin-right: $global_gap;
          }
        }
      }
    }

    .refresh {
      display: flex;
      flex-direction: column;

      margin-left: $global_gap * 4;

      i {
        position: relative;
        height: 40px;
        width: 40px;
        margin: $global_gap 0;
        font-size: 110%;
        line-height: 40px;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: $shadow;
        border-radius: 50%;
        cursor: pointer;

        transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

        &:hover {
          background: white;
          box-shadow: $shadow_hover;

          &:after {
            opacity: 1;
          }
        }

        &:after {
          content: attr(data-text);
          position: absolute;
          left: calc(100% + #{$global_gap});
          top: 50%;
          transform: translateY(-50%);
          font-size: 80%;
          font-family: "Nunito", sans-serif;
          line-height: initial;
          background: white;
          padding: ($global_gap / 4) $global_gap;
          border-radius: 1000px;
          box-shadow: $shadow;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    main {
      flex-direction: column !important;
      font-size: 80%;

      .card {
        max-width: 80%;
        width: auto;
        min-height: 150px;
      }

      .refresh {
        flex-direction: row;

        margin-left: 0;
        margin-top: $global_gap * 3;

        i {
          margin: 0 $global_gap;

          &:after {
            display: none;
          }
        }
      }
    }
  }

  .copy {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: ($global_gap / 2) $global_gap;
    color: white;

    a {
      color: inherit;
    }
  }
}
</style>
