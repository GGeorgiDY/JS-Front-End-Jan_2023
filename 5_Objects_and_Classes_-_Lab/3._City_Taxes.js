function cityTaxes (name, population, treasury) {
    let city = {
        name,           // съкратен начин на писане
        population,     // съкратен начин на писане
        treasury,       // съкратен начин на писане
        taxRate: 10,
        

        // идеята на долните редове е чрез this да вземем пропъртитата, които са декларирани горе и им променяме състоянието. Това се случва динамично ползвайки методите долу. 
        collectTaxes() {
            this.treasury += Math.ceil(this.population * this.taxRate)
        },

        applyGrowth(percentage) {
            this.population = Math.ceil(this.population + this.population * (percentage / 100))
        },

        applyRecession(percentage) {
            this.treasury = Math.ceil(this.treasury - this.treasury * (percentage / 100))
        },
    }
    return city;
}


const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

console.log(city)