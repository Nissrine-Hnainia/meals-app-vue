<template>
    <loading-recipes v-if="loading"> </loading-recipes>
    <div v-else class="my-container">
        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <meal-card
                v-for="meal in meals"
                :id="meal.idMeal"
                :key="meal.idMeal"
                :meal="meal"
                @delete-meal="deleteTheMeal"
                @meal-edit="editTheMeal"
            >
            </meal-card>
        </ul>
        <button
            @click="toggleAdd"
            class="align-center mt-16 py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            add new meal
        </button>
        <add-meal
            :show="showModal"
            @toggle-add="toggleAdd"
            @add-meal="addNewMeal"
        >
        </add-meal>
    </div>
</template>

<script>
import axios from "axios";
import MealCard from "./MealCard.vue";
import AddMeal from "./AddMeal.vue";
import LoadingRecipes from "../categories/LoadingRecipes.vue";

export default {
    components: { MealCard, AddMeal, LoadingRecipes },
    data() {
        return {
            meals: [],
            loading: true,
            showModal: false,
        };
    },
    async created() {
        const categoryId = this.$route.params.categoryId;
        try {
            const res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`
            );
            this.meals = res.data.meals;
            this.loading = false;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        toggleAdd() {
            this.showModal = !this.showModal;
        },
        addNewMeal(name, thumb) {
            const newMeal = {
                strMeal: name,
                strMealThumb: thumb,
                idMeal: Date.now().toString(),
            };
            this.meals.push(newMeal);
        },
        deleteTheMeal(id) {
            this.meals = this.meals.filter((meal) => meal.idMeal !== id);
        },
        editTheMeal(mealId, newName) {
            this.meals = this.meals.map((meal) =>
                meal.idMeal === mealId
                    ? {
                          ...meal,
                          strMeal: newName,
                      }
                    : meal
            );
        },
    },
};
</script>

<style scoped>
.my-container {
    padding: 40px;
    border-radius: 7px;
    box-shadow: 6px 8px 8px gray;
}
</style>
