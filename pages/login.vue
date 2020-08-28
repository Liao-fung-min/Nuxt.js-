<template lang="pug" class="lt-ie9">
  <div class="col-container">
    <div class="p-login col-row">
      <form class="p-login__account" action="/">
        <div class="p-login__account__block">
          <h2 class="p-login__account__block__title">會員登入</h2>
          <ul class="p-login__community__list h-md-flex h-p-md-4 h-none">
            <li><a href="#"><img src="~/assets/img/ic-facebook.svg" width="108" height="20" /></a></li>
            <li><a href="#"><img src="~/assets/img/ic-google.svg" width="95" height="20" /></a></li>
            <li><a href="#"><img src="~/assets/img/ic-yahoo.svg" width="97" height="23" /></a></li>
          </ul>
          <div class="h-m-md-4">
            <div class="l-registered__form l-registered__form_small h-flex h-align-content-between h-mb-3"><i class="fas fa-user l-registered__form__icon"></i>
              <input class="l-registered__form__text" type="text" placeholder="電子信箱/手機號碼" />
            </div>
            <div class="l-registered__form l-registered__form_small h-flex h-align-content-between h-mb-3"><i class="fas fa-key l-registered__form__icon"></i>
              <input class="l-registered__form__text" type="text" placeholder="請輸入使用者密碼" />
            </div>
            <div class="p-login__account__block__checkbox h-mb-3">
              <input id="check" type="checkbox" />
              <label for="check">記住我</label>
            </div>
          </div>
        </div><a class="p-login__account__submit h-py-3" href="#">登入帳號</a>
      </form>
      <div class="p-login__community h-md-none">
        <h2 class="p-login__community__title">—— 連結社群帳號 ——</h2>
        <ul class="p-login__community__list h-md-flex">
         <li><nuxt-link :to="{name:'index'}">HOME page</nuxt-link></li>
         <li><nuxt-link :to="{name:'search-sigupup-result'}">地方政府開放平台</nuxt-link></li>
         <li><nuxt-link :to="{name:'blogger'}">測試部落格</nuxt-link></li>
          <li class="h-mb-3"><a href="//google.com"><img src="~/assets/img/ic-facebook.svg" width="108" height="20" /></a></li>
          <li class="h-mb-3"><a href="#"><img src="~/assets/img/ic-google.svg" width="95" height="20" /></a></li>
          <li class="h-mb-3"><a href="#"><img src="~/assets/img/ic-yahoo.svg" width="97" height="23" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
//去呼叫 layout的front
export default {
  layout: "front",
  head: {
    title: "甜點電商",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        "http-equiv": "X-UA-Compatible",
        content: "ie=edge",
      },
      {
        property: "og:title",
        content: "這是首頁",
      },
      {
        property: "og:description",
        content: "這是首頁",
      },
      {
        property: "og:site_name",
        content: "這是首頁",
      },
      {
        property: "og:locale",
        content: "zh_TW",
      },
    ],
    link: [
      {
        rel: "shortcut icon",
        href: "~/img/favicon_48.ico",
        type: "image/x-icon",
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
        integrity:
          "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
        crossorigin: "anonymous",
      },
    ],
  },
};
</script>