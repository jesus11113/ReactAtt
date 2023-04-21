import React from "react"
import Banner from "./banner/Banner"
import Cart from "./cart/Cart"
import TestSlider from "./testSlider"

const Home =(props)=>{
    return(
        <>
        <TestSlider/>
        <Banner />
        <div className="text-section">
            <h2>
            НОЖ ДОЛЖЕН РЕЗАТЬ, ДЛЯ ВСЕГО ОСТАЛЬНОГО ЕСТЬ ТОПОР
            </h2>
            <p>
            С давних времен в небольшом городке ( ранее селе) Ворсма искусные мастера изготавливали ножи высочайшего качества, которые славились не только во всех уголках нашей необъятной родины, но и по всему миру.
История возникновения центра кузнечного мастерства в городе Ворсма
            </p>
            <p>
            Плоды трудов Ворсменских ремесленников всегда отличались своей уникальностью, и мы, потомки Ворсменских кузнецов, соблюдающие традиции и имеющие завод по изготовлению ножей в Ворсме, выделим их основные отличительные черты:

Исключительно ручной труд;

Долговечность;

Использование высококачественных сплавов металлов и
благородных материалов;

Тонкая проработка деталей ножа и клинка, исходя из
предназначения;

Предпродажные испытания и контроль качества;

Привлекательный внешний вид изделий.
            </p>
        </div>
        <Cart
            item={props.item}
            overlayItems={props.overlayItems}
            setOverlayItems={props.setOverlayItems}
            setSearch={props.setSearch}
            search={props.search}
            // favorites={props.favorites}
            // setFavorites={props.setFavorites}
        />
      </>
    )
}
export default Home