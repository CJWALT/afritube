import toons from '../src/assets/TextThumbnail/honeylion.png';
import books from '../src/assets/TextThumbnail/books.webp'
import facts from '../src/assets/TextThumbnail/facts.webp';
import kingdoms from '../src/assets/TextThumbnail/kingdoms.webp';
import foods from '../src/assets/TextThumbnail/popularfoods.webp';
import dances from '../src/assets/TextThumbnail/dances.webp'

//text docs 
import txtToons from '../src/TextFiles/Literature/Explore/AfricanToons.txt';
import txtBooks from '../src/TextFiles/Literature/Explore/Booklist.txt';
import cape from '../src/TextFiles/Literature/Explore/CapeVerde.txt';
import txtDances from '../src/TextFiles/Literature/Explore/Dances.txt';
import txtFoods from '../src/TextFiles/Literature/Explore/PopularFood.txt';
import txtKingdom from '../src/TextFiles/Literature/Explore/FamousAfricanKingdoms.txt';

export const literature =  [
    {
        "id" : 1,
        "name" : "African Toons",
        "thumbnail" : toons,
        "text" : txtToons
    },
    {
        "id" : 2,
        "name" : "African Books",
        "thumbnail" : books,
        "text" : txtBooks
    },
    {
        "id" : 3,
        "name" : "Cape Verde Facts",
        "thumbnail" : facts,
        "text" : cape
    },
    {
        "id" : 4,
        "name" : "African Kingdoms",
        "thumbnail" : kingdoms,
        "text" : txtKingdom
    },
    {
        "id" : 5,
        "name" : "Popular Foods",
        "thumbnail" : foods,
        "text" : txtFoods
    },
    {
        "id" : 6,
        "name" : "Famout African Dances",
        "thumbnail" : dances,
        "text" : txtDances
    }
]