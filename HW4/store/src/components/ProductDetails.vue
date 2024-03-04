<template>
    <div>
    <div >
      <p>Название: {{ name }}</p>
      <p>Цена (выбирете, пожалуйста валюту)</p>
      
      <p>{{formattedPrice}}</p>
      <select size="1" name="" id="" v-model="valuta">
      <option>₽</option>
      <option>€</option>
      <option>$</option>
    </select>
      <p v-if="available"> Статус: Available</p>
      <p v-else>Статус: Out of stock</p>
      <br>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
        valuta:'',
        dollar:0,
        euro:0,
       
            name:'Cacke',
            price: 99.99,
            available:false
        
    };
  },
  computed: {
    formattedPrice: function () {
        let formattePriceProduct='';
        console.log(this.dollar);
        switch (this.valuta) {
            case '₽': formattePriceProduct = `₽ ${this.price}`;
            break;
            case '€': formattePriceProduct = `€ ${(this.price/this.euro).toFixed(2)}`;  
            break;
            case '$': formattePriceProduct = `$ ${(this.price/this.dollar).toFixed(2)}`; 
            break;
    
        }
        
        return formattePriceProduct;
    }
  
  },
  mounted() {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(data => data.json())
    .then(data=> {
        this.dollar = data.Valute.USD.Value;
        this.euro =data.Valute.EUR.Value;
    })
}
}

  

</script>