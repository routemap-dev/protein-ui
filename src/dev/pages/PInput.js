import Vue from "vue";

import Container from "../Container";
import { PInput } from "../../components";

export default Vue.extend({
  name: "PagePInput",
  render(h) {
    return h("div", [
      h(
        Container,
        {
          props: {
            title: "Default",
          },
        },
        [
          h(PInput),
          h(PInput, {
            attrs: {
              placeholder: "Placeholder",
            },
          }),
        ]
      ),
      h(
        Container,
        {
          props: {
            title: "Context",
          },
        },
        [
          h(PInput, {
            props: {
              label: "Label",
              description: "Description.",
            },
            attrs: {
              placeholder: "Placeholder",
              id: "context-input-1",
            },
          }),
          h(PInput, {
            props: {
              label: "Required Field *",
              context: "This field is required.",
              color: "danger",
            },
            attrs: {
              placeholder: "Placeholder",
              id: "context-input-2",
            },
          }),
          h(PInput, {
            props: {
              label: "Warning",
              context: "Warning message.",
              color: "warning",
            },
            attrs: {
              placeholder: "Placeholder",
              id: "context-input-3",
            },
          }),
          h(PInput, {
            props: {
              label: "Success",
              context: "Action was successful!",
              color: "success",
            },
            attrs: {
              placeholder: "Placeholder",
              id: "context-input-4",
            },
          }),
        ]
      ),
      h(
        Container,
        {
          props: {
            title: "Disabled",
          },
        },
        [
          h(PInput, {
            attrs: {
              placeholder: "Placeholder",
              disabled: true,
            },
          }),
        ]
      ),
      h(
        Container,
        {
          props: {
            title: "Custom Styles",
          },
        },
        [
          h(PInput, {
            props: {
              label: "Full Width",
              containerClass: "full-width",
            },
            attrs: {
              placeholder: "Placeholder",
              id: "full-width-input",
              style: "width: 100%",
            },
          }),
        ]
      ),
    ]);
  },
});
