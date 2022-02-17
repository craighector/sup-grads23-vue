<template>
    <div>
        <button>Refresh</button>
        <div>
            <p>A thing</p>
            <button>Remove</button>
            <button>Flag</button>
        </div>
        <div>
            <p>There are no things.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThingList",
    data() {
        return {
            things: []
        }
    }
}
</script>

<style scoped>

</style>