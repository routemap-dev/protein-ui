import Vue from "vue";

import Container from "../Container";
import { PLink } from "../../components";

export default Vue.extend({
  name: "PagePLink",
  render(h) {
    return h("div", [
      h(
        Container,
        {
          props: {
            title: "Colors",
          },
        },
        [
          h(PLink, {
            props: {
              color: "primary",
              label: "Primary",
            },
            attrs: {
              href: "#",
            },
          }),
          h(
            PLink,
            {
              props: {
                color: "secondary",
              },
              attrs: {
                href: "#",
              },
            },
            [`Secondary Link`]
          ),
        ]
      ),
      h(
        Container,
        {
          props: {
            title: "Underline Styles",
          },
        },
        [
          h(
            PLink,
            {
              props: {
                underline: true,
              },
              attrs: {
                href: "#",
              },
            },
            [`Underline Link`]
          ),
          h(
            PLink,
            {
              props: {
                underline: "hover",
              },
              attrs: {
                href: "#",
              },
            },
            [`Hover Underline`]
          ),
        ]
      ),
    ]);
  },
});
