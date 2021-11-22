const product = {
    props: ['product', 'img'],
    template: `
            <div class="products__item">
                <a href="product.html" class="products__image">
                <source media="(max-width: 1160px)" :srcset="product.imageMob">
                <img :src="img" alt="product img" class="item-img">
                </a>
                <div class="item-txt-box">
                <a href="product.html"><p class="item-desc">{{ product.product_name }}</p></a> 
                <p class="item-desc-s">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                </div>
                <div class="item-txt-box">
                    <p class="item-prise">$\{{ product.price }}</p>
                </div>
                    <div class="add-box">
                        <a href="#" class="add" @click="$emit('add-product', product)">
                            <img class="cart-add"   src="img/Vector.png" alt="cart">
                            <p class="add-txt">Add to Cart</p>
                        </a>
                    </div>
            </div>
    `
};


const catalog = {
    data() {
        return {
            
            filtered: [],
            catalog: [],
        }
        
    },
    components: {
        product
    },
    mounted() {
        this.$parent.getJson(`/api/catalog`)
            .then(data => {
                for (let item of data) {
                    item.imgPath = `img/catalog/${item.id_product}.jpg`;
                    this.$data.filtered.push(item);
                    this.$data.catalog.push(item);
                    }   
                
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.catalog.filter(el => regexp.test(el.product_name));
        }
    },
    template: `<div class="products__items">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img = "item.imgPath"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div>`
};


export default catalog
