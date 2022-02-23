<template>
    <div class="thing-list">
        <button @click="fetchList">Refresh</button>
        <div v-if="hasThings">
            <div 
                v-for="(thing, index) in things" 
                :key="index"
                class="thing-list-item"
                :class="{'item-flagged' : isFlagged(thing.id)}"
                @click="selectThing(thing.id)"
            >
                <p>{{ thing.name }}</p>
                <div>
                    <!-- can use v-on:click or @click -->
                    <!-- .stop modifier to stop event bubbling -->
                    <button @click.stop="removeThing(index)">Remove</button>
                    <button @click.stop="flagThing(thing.id)">
                        {{ isFlagged(thing.id) ? 'Unflag' : 'Flag' }}
                    </button>
                    <thing-detail 
                        v-if="isSelected(thing.id)"
                        :thing="thing
                    "></thing-detail>
                </div>
            </div>
        </div>
        <div v-else class="thing-list-item">
            <p>There are no things.</p>
        </div>
    </div>
</template>

<script>
import ThingDetail from './ThingDetail.vue'
import { getThings } from '../api/'

export default {
	components: { ThingDetail },
    name: "ThingList",
    data() {
        return {
            things: [],
            flagged: [],
            selectedId: null
        }
    },
    mounted() {
        this.fetchList()
    },
    computed: {
        hasThings() {
            return this.things.length > 0
        }
    },
    methods: {
        removeThing(index) {
            // mutates the state and removes the thing
            this.things.splice(index, 1)
        },
        flagThing(id) {
            if (this.isFlagged(id)) {
                this.flagged = this.flagged.filter( i => i !== id)
            } else {
                this.flagged.push(id)
            }
        },
        isFlagged(id) {
            return this.flagged.includes(id)
        },
        selectThing(id) {
            this.selectedId = this.isSelected(id) ? null : id
        },
        isSelected(id) {
            return this.selectedId === id
        },
        async fetchList() {
            this.things = await getThings()
        }
    }
}
</script>

<style lang="scss" scoped>
    .thing-list {
        button {
            min-width: 96px;
            border-radius: 0px;
            border: 1px solid darkgray;
            outline: none;

            &:hover {
                background-color: white;
            }
        }

        display: flex;
        flex-direction: column;
        max-width: 512px;
        border: 1px solid black;

        .thing-list-item {
            display: flex;
            flex-direction: column;
            padding: 8px;
            border-bottom: 1px solid darkgrey;

            &:hover {
                background:rgb(35, 3, 216);
            }
        }
        .item-flagged {
            background-color: lightpink;

            &:hover {
                background:lightcoral;
            }
        }
    }
</style>