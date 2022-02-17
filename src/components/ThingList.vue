<template>
    <div class="thing-list">
        <button>Refresh</button>
        <div v-if="hasThings">
            <div 
                v-for="(thing, index) in things" 
                :key="index"
                class="thing-list-item"
                :class="{'item-flagged' : isFlagged(thing.id)}"
            >
                <p>{{ thing.name }}</p>
                <div>
                    <!-- can use v-on:click or @click -->
                    <button @click="removeThing(index)">Remove</button>
                    <button @click="flagThing(thing.id)">
                        {{ isFlagged(thing.id) ? 'Unflag' : 'Flag' }}
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="thing-list-item">
            <p>There are no things.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThingList",
    data() {
        return {
            things: [
                {
                    "id": "1001",
                    "name": "Orange Bottle",
                    "keywords": [
                    "equipment",
                        "food"
                    ]
                },
                {
                    "id": "1002",
                    "name": "Ashley's Vaporiser",
                    "keywords": [
                        "equipment"
                    ]
                }
            ],
            flagged: []
        }
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
                background:lightgrey;
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