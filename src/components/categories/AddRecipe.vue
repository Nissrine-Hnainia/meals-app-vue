<template>
    <div v-if="show">
        <div class="fixed inset-0 z-50 flex justify-center md:w-full md:h-5/6">
            <div
                class="flex flex-col rounded-lg mt-20 shadow-lg bg-white md:w-4/6"
            >
                <!-- header-->
                <div class="p-5">
                    <div class="flex justify-between items-start">
                        <h3 class="text-2xl font-semibold">
                            Add a new category to the cart
                        </h3>
                        <button class="p-1 leading-none" @click="toggleModal">
                            <div class="text-xl font-semibold h-6 w-6">
                                <span>x</span>
                            </div>
                        </button>
                    </div>
                </div>
                <!-- body-->
                <form class="w-full max-w-6xl">
                    <div
                        class="md:flex md:items-center mb-6 mx-40 justify-evenly"
                    >
                        <div class="md:w-1/3">
                            <label
                                class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                                for="inline-category"
                            >
                                Category name
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 md:w-full rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                r
                                id="inline-category"
                                type="text"
                                name="category"
                                v-model="category"
                            />
                        </div>
                    </div>

                    <div
                        class="md:flex md:items-center mb-6 mx-40 justify-evenly"
                    >
                        <div class="md:w-1/3">
                            <label
                                class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                                for="inline-photo"
                            >
                                Thumb
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 md:w-full rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-photo"
                                type="text"
                                name="thumb"
                                v-model="thumb"
                            />
                        </div>
                    </div>

                    <div
                        class="md:flex md:items-center mb-6 mx-40 justify-evenly"
                    >
                        <div class="md:w-1/3">
                            <label
                                class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                                for="inline-description"
                            >
                                Description
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <textarea
                                class="bg-gray-200 appearance-none border-2 border-gray-200 md:w-full rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                rows="10"
                                id="inline-description"
                                type="text"
                                name="description"
                                v-model="description"
                            />
                        </div>
                    </div>
                </form>
                <!-- footer-->
                <div class="p-6 flex justify-end items-center">
                    <button
                        class="ml-3 inline-flex justify-center py-2 px-4 border border-indigo-600 shadow-sm text-sm font-medium rounded-md text-indigo-600 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                        @click="toggleModal"
                    >
                        Close
                    </button>
                    <button
                        class="ml-3 inline-flex justify-center py-2 px-4 border border-indigo-600 shadow-sm text-sm font-medium rounded-md text-indigo-600 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                        type="submit"
                        @click="addCategory"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
        <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>
export default {
    props: ["show"],
    data() {
        return {
            category: "",
            thumb: "https://bg.legal/wp-content/uploads/2019/01/Food.jpg",
            description: "",
        };
    },
    methods: {
        toggleModal() {
            this.$emit("toggle-model");
        },
        addCategory() {
            this.$emit(
                "add-category",
                this.category,
                this.thumb,
                this.description
            );
            this.category = "";
            this.description = "";
        },
    },
    emits: ["toggle-model", "add-category"],
};
</script>
