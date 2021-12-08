<template>
    <div class="container">
        <div
            class="relative rounded-lg bg-white flex-1 items-center space-x-3 w-16 md:w-32 md:h-28 lg:w-48"
        >
            <div class="flex-shrink-0">
                <img
                    class="h-10 w-10 rounded-full"
                    :src="meal.strMealThumb"
                    alt="meal"
                />
            </div>
            <div class="flex-1 min-w-0">
                <a href="#" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900 break-words">
                        Meal:
                    </p>
                    <p class="text-sm text-gray-500 truncate">
                        {{ meal.strMeal }}
                    </p>
                </a>
            </div>
        </div>
        <div>
            <button
                @click="toggleModel"
                class="ml-3 inline-flex justify-center py-2 px-4 border border-indigo-600 shadow-sm text-sm font-medium rounded-md text-indigo-600 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                edit
            </button>
            <edit-meal
                :show="isOpen"
                @toggle-model="toggleModel"
                @edit-meal="mealEdit"
                :meal="meal"
            >
            </edit-meal>
            <button
                @click="deleteMeal"
                class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                delete
            </button>
        </div>
    </div>
</template>

<script>
import EditMeal from "./EditMeal.vue";

export default {
    components: { EditMeal },
    data() {
        return {
            isOpen: false,
        };
    },
    props: ["meal", "id"],
    methods: {
        deleteMeal() {
            this.$emit("delete-meal", this.id);
        },
        toggleModel() {
            this.isOpen = !this.isOpen;
        },
        mealEdit(id, name) {
            this.$emit("meal-edit", this.id, name);
        },
    },
    emits: ["delete-meal", "meal-edit"],
};
</script>
<style>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid gray;
    padding: 1.5rem;
    border-radius: 0.5rem;
}
</style>
