import Vue from 'vue';

import { PBtn } from '../../components';

import { presetColors } from '../../mixins/colorable';

export default Vue.extend({
    name: 'page-p-btn',
    render(h) {
        return h('div', [
            h('div', {
                class: 'container row',
            }, presetColors.map(color => h(PBtn, {
                props: {
                    label: color,
                    color,
                },
            }))),
            h('div', {
                class: 'container row',
            }, ['sm', 'md', 'lg'].map(size => h(PBtn, {
                props: {
                    color: 'primary',
                    size,
                },
                key: size,
            }, [`Size: ${size}`]))),
        ]);
    }
});