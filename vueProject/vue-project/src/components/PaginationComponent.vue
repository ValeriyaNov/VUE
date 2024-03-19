<template>
   <div v-show="showBlok" class="">
    <div class="pagination">
    <router-link class="pagination__item" v-for="page in totalPages" :key="`p${page}`" :to="`/${site}/${page}`">
          <p class="count__page-number-text">{{ page }}</p>
        </router-link>
        
        <button class="pagination__button">
            <img src="@/assets/img/Vector.png" class="pagination__button__arrow"
            alt="Arrow">
            </button>
        </div>
    </div>
        
</template>
<script>
export default {
  name: 'PaginationComponent',
  props:['totalPages','quantity', 'visible', 'site'],
  computed: {
    showBlok () {
      return this.visible
    }}


}
</script>
<style lang="scss">
.pagination {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 200px;
    &__item {
        background: white;
        border: 1px solid rgb(205, 162, 116);
        width: 52px;
        height: 52px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &__text {
            color: rgb(41, 47, 54);
            font-family: Jost;
            font-size: 16px;
            font-weight: 500;
            line-height: 150%;
            letter-spacing: 0%;
            text-align: left;
            text-transform: capitalize;
        }
    }
    &__item:hover {
        background: rgb(244, 240, 236);
    }
    &__button {
        background: white;
        border: 1px solid rgb(205, 162, 116);
        width: 52px;
        height: 52px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &__arrow {
            color: rgb(41, 47, 54);
            width: 8px;
            height: 18px;
            left: 517px;
            top: 44px;
        }
    }
    &__button:hover {
        background: rgb(244, 240, 236);
    }
}
</style>