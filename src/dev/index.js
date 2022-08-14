import Vue from "vue";

import sidebar from "./sidebar";
import pages from "./pages";

import "../themes/default.scss";
import "./index.scss";

const pageKeys = Object.keys(pages);

export default Vue.extend({
  name: "index",
  data() {
    return {
      pages: pageKeys,
      selected:
        location.hash.length && pageKeys.includes(location.hash.substring(1))
          ? location.hash.substring(1)
          : pageKeys[0],
    };
  },
  render(h) {
    const children = [
      h(sidebar, {
        props: {
          pages: this.pages,
          selected: this.selected,
        },
        on: {
          select: (page) => {
            this.selected = page;
            location.hash = page;
          },
        },
      }),
      h(
        "main",
        {
          class: "main",
        },
        [h("h1", [this.selected]), h(pages[this.selected])]
      ),
    ];

    return h(
      "div",
      {
        class: "app",
      },
      children
    );
  },
});
