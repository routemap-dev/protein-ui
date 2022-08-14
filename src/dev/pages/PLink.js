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
              label: "Primary Link",
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
            ["Secondary Link"]
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
            ["Always Underline"]
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
            ["Underline on Hover"]
          ),
          h(
            PLink,
            {
              props: {
                underline: false,
              },
              attrs: {
                href: "#",
              },
            },
            ["No Underline"]
          ),
        ]
      ),
    ]);
  },
});
