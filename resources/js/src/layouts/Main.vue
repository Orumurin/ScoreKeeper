<template>
    <div class="main flex">
        <nav class="bg-indigo-300 w-72 flex flex-col justify-between items-center p-4">
            <div>
                <div class="flex flex-col items-center">
                    <img
                        class="w-12"
                        src="@/assets/images/icons/person.svg"
                        alt="person"
                    />
                    <span class="text-2xl text-gray-700 pt-4 pb-1">Nick</span>
                    <div class="h-px w-24 bg-gray-500"></div>
                </div>
                <div class="flex flex-col items-center p-2">
                    <button class="bg-blue-400 w-64 py-1 my-4 rounded-xl">Play game</button>
                    <button class="bg-blue-400 w-64 py-1 my-4 rounded-xl">Templates</button>
                    <button class="bg-blue-400 w-64 py-1 my-4 rounded-xl">Last games</button>
                    <button class="bg-blue-400 w-64  py-1 my-4 rounded-xl">About of author</button>
                </div>
            </div>
            <div>
                <button class="bg-orange-400  py-1 px-24 my-4 rounded-xl">Exit</button>
            </div>
        </nav>
        <section class="w-4/5">
            <slot></slot>
        </section>
    </div>
</template>

<script>
</script>

<style scoped>
    .main {
        width: 100vw;
        height: 100vh;
        background: conic-gradient(from 98.68deg at 50% 50%, rgba(27, 149, 188, 0.21) 0deg, #6417E1 18.28deg, rgba(68, 77, 209, 0.662513) 186.95deg, rgba(27, 149, 188, 0.21) 360deg, rgba(27, 149, 188, 0.21) 360deg);
    }
</style>
