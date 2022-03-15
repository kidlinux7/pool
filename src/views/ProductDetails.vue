<template>
  <ProductProfile></ProductProfile>
</template>
<script>
import ProductProfile from "@/components/ProductProfile.vue";
export default {
  name: "ProductDetails",
  data() {
    return {
      id:this.$route.params.id
    };
  },
  components: {
    ProductProfile,
  },
};
</script>