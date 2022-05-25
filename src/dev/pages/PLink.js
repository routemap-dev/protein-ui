import Vue from 'vue';

import { PLink } from '../../components';

export default Vue.extend({
    name: 'page-p-link',
    render(h) {
        return h('div', [
            h('div', {
                class: 'container'
            }, [
                h(PLink, {
                    props: {
                        label: 'Label',
                    },
                    attrs: {
                        href: '#',
                    },
                }),
            ]),
            h('div', {
                class: 'container',
            }, [
                h(PLink, {
                    props: {
                        textColor: 'primary',
                    },
                    attrs: {
                        href: '#',
                    },
                }, [`Primary Link`]),
            ]),
            h('div', {
                class: 'container',
            }, [
                h(PLink, {
                    props: {
                        textColor: 'primary',
                        underline: true,
                    },
                    attrs: {
                        href: '#',
                    },
                }, [`Underline Link`]),
            ]),
            h('div', {
                class: 'container',
            }, [
                h(PLink, {
                    props: {
                        textColor: 'primary',
                        underline: 'hover',
                    },
                    attrs: {
                        href: '#',
                    },
                }, [`Hover Underline`]),
            ]),
        ]);
    }
});