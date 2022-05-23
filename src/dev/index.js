import Vue from 'vue';

import sidebar from './sidebar';
import pages from './pages';

import './index.scss';

const pageKeys = Object.keys(pages);


export default Vue.extend({
    name: 'index',
    data() {
        return {
            pages: pageKeys,
            selected: pageKeys[0],
        }
    },
    render(h) {
        const children = [
            h(sidebar, {
                props: {
                    pages: this.pages,
                    selected: this.selected,
                }
            }),
            h(pages[this.selected], {
                class: 'main'
            })
        ];

        return h('div', {
            class: 'app',
        }, children);
    }
});