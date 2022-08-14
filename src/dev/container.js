import Vue from "vue";

import "./container.scss";

export default Vue.extend({
  name: "container",
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
  },
  render(h) {
    const children = [];
    if (this.title) children.push(h("h2", this.title));
    if (this.description) children.push(h("p", this.description));
    children.push(h("div", { class: "container-row" }, this.$slots.default));

    return h(
      "div",
      {
        class: "container",
      },
      children
    );
  },
});
