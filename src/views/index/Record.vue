<template>
    <div class="hello">
        <div class="left">
            <IP>
                <template #main>
                    <One></One>
                </template>
            </IP>
            <IP>
                <template #main>
                    <Two></Two>
                </template>
            </IP>
        </div>
        <div class="right">
            <IP>
                <template #main>
                    <Three></Three>
                </template>
            </IP>
            <IP>
                <template #main>
                    <Four></Four>
                </template>
            </IP>
        </div>        
    </div>
</template>

<script setup>
     import IP from "@/components/Zujian.vue";
     import One from "@/components/One.vue"
     import Two from "@/components/Two.vue"
     import Three from "@/components/Three.vue"
     import Four from "@/components/Four.vue"
</script>

<style lang="scss" scoped>

  .hello{
    width: 20.5rem;
    background-color: gray;
    display: flex;
    margin: 0.525rem auto;
    height: 9.8rem;
    .left,.right{
        flex: 1;
    }
  }
</style>