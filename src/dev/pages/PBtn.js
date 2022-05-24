import Vue from 'vue';

import { PBtn } from '../../components';

export default Vue.extend({
    name: 'page-p-btn',
    render(h) {
        return h('div', [
            h('div', {
                class: 'container'
            }, [
                h(PBtn, {
                    props: {
                        label: 'Label',
                    },
                }),
            ]),
            ...['sm', 'md', 'lg'].map(size => h('div', {
                class: 'container',
                key: size,
            }, [
                h(PBtn, {
                    props: {
                        color: 'primary',
                        textColor: '#fff',
                        size,
                    }
                }, [`Size: ${size}`]),
            ])),
        ]);
    }
});