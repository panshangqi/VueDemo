<template>
  <div id="example">
    <p>{{message}}</p>
    <button v-on:click="reversedClick">翻转字符串</button>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data () {
      return {
        message: 'Hello World'
      }
    },
    methods: {
      reversedClick: function() {
        console.log(this.message)

        this.message = this.message.split('').reverse().join('')
      }
    }

  }
</script>
