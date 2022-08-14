import Vue from "vue";

import "./Sidebar.scss";

export default Vue.extend({
  name: "Sidebar",
  props: {
    pages: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeTab(tab) {
      this.$emit("select", tab);
    },
  },
  render(h) {
    const children = this.pages.map((page, ind) =>
      h(
        "div",
        {
          class: {
            item: true,
            active: this.selected === page,
          },
          key: ind,
          on: {
            click: this.changeTab.bind(this, page),
          },
        },
        [page]
      )
    );

    return h(
      "div",
      {
        class: "sidebar",
      },
      children
    );
  },
});
