<template>
    <div>
        <h1> {{ msg }}
        </h1>
        <input type="text" placeholder="Mr Martin">
        <button>Search</button>
        <button>Clear Search Results</button>
        <!-- <ul v-for="(guest, index) in guests " v-show="guest.gName === 'Joshua Waitzkin' ">
                                                                            <li class=" inline ">{{ guest.gName }}</li>
                                                                            <li class="inline ">Placeholder 2</li>
                                                                            <li class="inline ">Placeholder 3</li>
                                                                            <li class="inline ">Placeholder 4</li>
                                                                        </ul> -->
        <table>
            <tr>
                <th>Guest</th>
                <th>Episodes</th>
                <th>Books</th>
            </tr>
            <tr>
                <td>g1</td>
                <td>e1</td>
                <td>b1</td>
            </tr>
            <tr>
                <td>g</td>
                <td>e</td>
                <td>b</td>
            </tr>
            <tr>
                <td>g</td>
                <td>e</td>
                <td>b</td>
            </tr>
            <tr>
                <td>x</td>
                <td>xx</td>
                <td>xxx</td>
            </tr>
        </table>
    </div>
</template>

<script>

import api from "./api";
export default {
    name: 'Guests',
    data() {
        return {
            msg: 'Episode Guests',
            guests: "",
            books: "",
            headers: [
                { text: 'Name', align: 'left', value: 'gName' },
                { text: 'Episode', value: 'gEpisode' },
                { text: 'Books', value: 'gBooks' }
            ]
        }
    },

    created() {

        api.getGuest(this.$route.params.guestID).then(guest => {
            this.guest = guest;
        });
    },
    computed: {

    },
    methods: {
        setView(arg) {
            this.seen = arg;
        }
    }
}
</script>

<style scoped>
.inline {
    display: inline-block;
}


th {
    border: 2px solid black;
}

td {
    border: 2px solid black;
    width: 100px;
}

table {
    margin: 20px 25%;
    border-radius: 3px;
}
</style>