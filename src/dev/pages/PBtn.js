import Vue from "vue";

import Container from "../Container";

import { PBtn } from "../../components";

import { presetColors } from "../../mixins/colorable";

export default Vue.extend({
  name: "PagePBtn",
  render(h) {
    return h("div", [
      h(
        Container,
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
        Container,
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
