let cocktails=[{img:'<img src="/images/Cosmopolitan.jpg">',
                name:'<p>Cosmopolitan</p>',
                ingredients:`<p><span>Ingredients:</span>45ml lemon vodka,
                15ml triple sec,
                30ml cranberry juice,
                10ml lime juice,
                ice,
                orange zest,
                </p>`,
                },
                {img:'<img src="/images/margarita.jpeg">',
                name:'<p>Margarita</p>',
                ingredients:`<p><span>Ingredients:</span>1 wedge lime,

                1 teaspoon coarse sea salt, or as needed,
                
                1 large ice cube,
                
                1 cup ice cubes, or as needed,
                
                2 fluid ounces white tequila,
                
                1 ½ fluid ounces triple sec,
                
                1 fluid ounce freshly squeezed lime juice,
                
                1 slice lime</p>`,
                },
                {img:'<img src="/images/Long island.webp">',
                name:'<p>Long Island</p>',
                ingredients:`<p><span>Ingredients:
                </span>½ fluid ounce vodka,

                ½ fluid ounce rum,
                
                ½ fluid ounce gin,
                
                ½ fluid ounce tequila,
                
                ½ fluid ounce triple sec (orange-flavored liqueur),
                
                1 fluid ounce sweet and sour mix,
                
                1 fluid ounce cola, or to taste,
                
                1 lemon slice,</p>`,
                },
                {img:'<img src="/images/sex on the beach.jpg">',
                name:'<p>Sex On The Beach</p>',
                ingredients:`<p><span>Ingredients:</span>1 1/2 oz. vodka,
                1/2 oz. peach schnapps,
                2 oz. orange juice,
                2 oz. cranberry juice,
                Orange wedge and maraschino ,cherries, for serving</p>`,
                },
                {img:'<img src="/images/tequila sunrise.jpg">',
                name:'<p>Tequla Sunrise</p>',
                ingredients:`<p><span>Ingredients:</span>2 ounces blanco tequila,
                4 ounces orange juice,
                1/4 ounce grenadine,
                Garnish: orange slice,
                Garnish: cherry</p>`,
                },
                {img:'<img src="/images/mojito.jpg">',
                name:'<p>Mojito</p>',
                ingredients:`<p><span>Ingredients:</span>fresh mint leaves,

                ½ medium lime, cut into 3 wedges, divided,
                
                2 tablespoons white sugar, or to taste,
                
                1 cup ice cubes, or as needed,
                
                1 ½ fluid ounces white rum,
                
                ½ cup club soda, or as needed</p>`,
                },
                
            
            ]



const generateBtn=document.querySelector('.generate-btn')
let images=document.querySelector('.cocktail-img')
let cockName=document.querySelector('.cocktail-name')
let cockIngredients=document.querySelector('.cocktail-ingredient')

generateBtn.addEventListener('click', function(){

        let randomIndex=Math.floor(Math.random()*cocktails.length);
        for (let i = 0; i<cocktails.length;i++){

            console.log(cocktails[randomIndex])
            images.innerHTML=cocktails[randomIndex].img
            cockName.innerHTML=cocktails[randomIndex].name
            cockIngredients.innerHTML=cocktails[randomIndex].ingredients
            


        }

})