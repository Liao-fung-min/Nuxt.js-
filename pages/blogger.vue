<template>
  <div>
    <h1>這是我的部落格</h1>
    <li v-for="(post, index) in posts" :key="index">
      <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
    </li>
  </div>
</template>

<script>
import axios from "axios";

export default {
  asyncData({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // 將網址的資料指給res，並取前五筆資料，建議 console.log 以下兩點，來看其差異
         console.log(res);
         //包含其它物件
         console.log(res.data); 
         //選取 前五筆資料
        return { posts: res.data.slice(0,5)};
      });
  },
};
</script>