class Food {
    name
    color
    taste // spicy, sweet, sour
    constructor(name) {
        this.name = name;
    }
    getPhoto() {
        // show a photo of this food
    }
    setName(name) {
        this.name = name;
    }
    setTaste(taste) {
        this.taste = taste;
    }
    setColor(color) {
        this.color = color;
    }
}

export class Ingredient extends Food {
    serving = '1 tbs'
    getServing() {
        return this.serving;
    }
}

export class Meal extends Food {
    ingredients = []
    price = 0
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
        console.info('Updated ingredients -> %o', this.ingredients);
    }
}

export const EdibleThings = Food;

