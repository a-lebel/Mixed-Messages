function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

  const pizza = {
    pizzaBase: ['whole wheat', 'sweet potato', 'cauliflower', 'almond flour'],
    pizzaSauce: ['tomato sauce', 'pesto sauce', 'white sauce', 'parmiggiano sauce'],
    toppings: ['mushrooms and olives', 'ham and artichoke', 'burrata and prosciutto', 'eggplant and zucchini', 'roasted vegetables']
  }

  let pizzaRecipe = [];

  for (let ingredient in pizza) {
    let optionIdx = generateRandomNumber(pizza[ingredient].length)
  

    switch(ingredient) {
      case 'pizzaBase':
        pizzaRecipe.push(`You can make your pizza base out of ${pizza[ingredient][optionIdx]}.`)
        break
      case 'pizzaSauce':
        pizzaRecipe.push(`How about a ${pizza[ingredient][optionIdx]} on top?`)
        break
      case 'toppings':
        pizzaRecipe.push(`Some ${pizza[ingredient][optionIdx]} would be great to top it off.`)
        break
      default:
        pizzaRecipe.push('You should buy some ingredients first.')
    }
  }
  
  function formatPizza(pizza) {

    const formatted = pizzaRecipe.join('\n')
    console.log('Craving pizza? '+ formatted)
  }
  
  formatPizza(pizzaRecipe);