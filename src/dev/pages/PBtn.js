import Vue from "vue";

import Container from "../Container";

import { PBtn, PBtnGroup } from "../../components";

import { presetColors } from "../../mixins/colorable";

export default Vue.extend({
  name: "PagePBtn",
  render(h) {
    return h("div", [
      h(
        Container,
        {
          props: {
            title: "Button Group",
            description: "Work in progress...",
          },
        },
        [
          h(
            PBtnGroup,
            {
              props: {
                text: true,
                color: "success",
              },
            },
            [
              h(
                "template",
                {
                  slot: "default",
                },
                [
                  h(PBtn, ["Button 1"]),
                  h(PBtn, ["Button 2"]),
                  h(PBtn, ["Button 3"]),
                ]
              ),
            ]
          ),
        ]
      ),
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
            title: "Outline Buttons",
          },
        },
        presetColors.map((color) =>
          h(PBtn, {
            props: {
              label: color,
              color,
              outline: true,
            },
          })
        )
      ),
      h(
        Container,
        {
          props: {
            title: "Text Buttons",
          },
        },
        presetColors.map((color) =>
          h(PBtn, {
            props: {
              label: color,
              color,
              text: true,
            },
          })
        )
      ),
      h(
        Container,
        {
          props: {
            title: "Text Buttons with Outline",
          },
        },
        presetColors.map((color) =>
          h(PBtn, {
            props: {
              label: color,
              color,
              text: true,
              outline: true,
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
