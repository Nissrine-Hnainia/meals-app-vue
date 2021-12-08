<template>
    <h1>Our meals categories list</h1>
    <loading-recipes v-if="loading"> </loading-recipes>
    <ul
        v-else
        role="list"
        class="grid grid-cols-1 gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
        <recipe-card
            v-for="recipe in recipes"
            :key="recipe.idCategory"
            :recipe="recipe"
        >
        </recipe-card>
        <button
            @click="toggleModel"
            class="ml-3 align-center justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            add new category
        </button>
        <add-recipe
            :show="showModal"
            @toggle-model="toggleModel"
            @add-category="addNewCategory"
        >
        </add-recipe>
    </ul>
</template>

<script>
import axios from "axios";
import RecipeCard from "./RecipeCard.vue";
import AddRecipe from "./AddRecipe.vue";
import LoadingRecipes from "./LoadingRecipes.vue";

export default {
    components: {
        RecipeCard,
        AddRecipe,
        LoadingRecipes,
    },
    data() {
        return {
            recipes: [],
            loading: true,
            showModal: false,
        };
    },
    async created() {
        try {
            const res = await axios.get(
                "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
            this.recipes = res.data.categories;
            this.loading = false;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        toggleModel() {
            this.showModal = !this.showModal;
        },
        addNewCategory(category, thumb, description) {
            const newCategory = {
                idCategory: new Date().toISOString(),
                strCategory: category,
                strCategoryThumb: thumb,
                strCategoryDescription: description,
            };
            this.recipes.push(newCategory);
        },
    },
};
</script>

<style scoped>
h1 {
    text-align: center;
    color: #88898d;
    font-size: 4rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #bcbec5;
    margin-bottom: 70px;
}
</style>
