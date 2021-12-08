<template>
    <li
        class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-md divide-y divide-gray-200"
    >
        <div class="flex-1 flex flex-col p-8">
            <img
                class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                :src="recipe.strCategoryThumb"
                alt="..."
            />
            <h3 class="mt-6 text-gray-900 text-base font-medium">
                {{ recipe.strCategory }}
            </h3>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
                <dt class="sr-only">Title</dt>
                <dd class="text-gray-500 text-base">{{ recipe.email }}</dd>
                <dt class="sr-only">Role</dt>
                <dd class="mt-3">
                    <span class="px-2 py-1 text-sm font-medium rounded-full">
                        {{ recipe.strCategoryDescription }}
                    </span>
                </dd>
            </dl>
        </div>
        <div>
            <div class="-mt-px flex divide-x divide-gray-200">
                <div class="-ml-px w-0 flex-1 flex">
                    <router-link
                        :to="'/categories/' + recipe.strCategory"
                        class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                        <span class="ml-3">View meals</span>
                    </router-link>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ["recipe"],
};
</script>
