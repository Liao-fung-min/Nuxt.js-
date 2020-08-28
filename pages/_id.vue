<template>
  <div>
    <h1>{{ post.title }}</h1>
    <pre>{{ post.body }}</pre>
  </div>
</template>
<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
     console.log(params); 
    //點擊第三筆，結果：{id: 3}
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    console.log(data); 
    //抓出點擊的該筆資料
    return { post: data };
  },
  head() {
    return {
      // 頁面 title 設為該文章標題
      title: this.post.title,
    };
  },
};
</script>