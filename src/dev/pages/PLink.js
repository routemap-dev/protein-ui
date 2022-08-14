import Vue from "vue";

import container from "../container";
import { PLink } from "../../components";

export default Vue.extend({
  name: "page-p-link",
  render(h) {
    return h("div", [
      h(
        container,
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
        container,
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
