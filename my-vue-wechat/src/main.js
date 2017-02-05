// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable no-new */

new Vue({
  el:  "#editor",
  data:  {
    input:  "# hello"
  },
  computed: {
    complieMarkdown: function() {
      var m = marked(this.input, {sanitize: true});
      return m;
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
})