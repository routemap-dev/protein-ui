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
                        color: 'secondary',
                    },
                    attrs: {
                        href: '#',
                    },
                }, [`Secondary Link`]),
            ]),
            h('div', {
                class: 'container',
            }, [
                h(PLink, {
                    props: {
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