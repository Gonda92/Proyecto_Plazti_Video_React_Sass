import React, { Children } from 'react';
import '../assets/styles/components/Categories.scss';
//recuerda, cada componente jsx debe importar su componente scss

const Categories = ({ children, title }) => (
    <div className="categories">
        <h3 class="categories__title">{title}</h3>
        {children}
    </div>
    )

    export default Categories;