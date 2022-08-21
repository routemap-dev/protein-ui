import Vue from "vue";
import { compute, includeMixins, mergeValues } from "../../util";

import colorable from "../../mixins/colorable";
const mixins = [colorable];

import "./PInput.scss";

export default Vue.extend({
  name: "PInput",
  mixins: includeMixins(mixins),
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    context: {
      type: String,
      default: null,
    },
    containerClass: {
      type: [Object, String, Array],
      default: null,
    },
  },
  render(h) {
    const hasContainer = this.label || this.description || this.context;
    if (hasContainer) {
      const computed = compute.call(this, "p-input-container", mixins);
      const children = [];
      if (this.label) {
        children.push(
          h(
            "label",
            {
              attrs: {
                for: this.$attrs.id,
              },
            },
            [this.label]
          )
        );
      }
      children.push(
        h("input", {
          class: "p-input",
          attrs: this.$attrs,
        })
      );
      if (this.context) {
        children.push(
          h(
            "div",
            {
              class: "p-input-context",
            },
            [this.context]
          )
        );
      }
      if (this.description) {
        children.push(
          h(
            "div",
            {
              class: "p-input-description",
            },
            [this.description]
          )
        );
      }

      return h(
        "div",
        {
          class: mergeValues(
            "p-input-container",
            computed.classes,
            this.containerClass
          ),
          style: computed.styles,
        },
        children
      );
    } else {
      const computed = compute.call(this, "p-input", mixins);
      return h("input", {
        class: ["p-input", ...computed.classes],
        style: computed.styles,
        attrs: this.$attrs,
      });
    }
  },
});
