import Vue from "vue";

import container from "../container";

import { PBtn } from "../../components";

import { presetColors } from "../../mixins/colorable";

export default Vue.extend({
  name: "page-p-btn",
  render(h) {
    return h("div", [
      h(
        container,
        {
          props: {
            title: "Colors",
          },
        },
        presetColors.map((color) =>
          h(PBtn, {
            props: {
              label: color,
              color,
            },
          })
        )
      ),
      h(
        container,
        {
          props: {
            title: "Sizes",
          },
        },
        ["sm", "md", "lg"].map((size) =>
          h(
            PBtn,
            {
              props: {
                color: "primary",
                size,
              },
              key: size,
            },
            [`Size: ${size}`]
          )
        )
      ),
    ]);
  },
});
