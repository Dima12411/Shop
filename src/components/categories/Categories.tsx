import React, {useState} from 'react';
import styles from './Categories.module.css'

export type CategoriesType = {
    key: string
    name: string
}

type PropsType = {
    chooseCategory: (category: string) => void
}

const Categories = ({chooseCategory, ...props}: PropsType) => {
    const [categories, setCategories] = useState<Array<CategoriesType>>([
        {key: 'all', name: 'все'},
        {key: 'chairs', name: 'стулья'},
        {key: 'tables', name: 'столы'},
        {key: 'sofas', name: 'диваны'},
        {key: 'wardrobes', name: 'шкафы'},
        {key: 'armchairs', name: 'кресла'},
        {key: 'beds', name: 'кровати'},

    ])
    return (
        <div className={styles.categories}>
            {categories.map(el => (
                <div key={el.key} onClick={() => chooseCategory(el.key)}>
                    {el.name}
                </div>
            ))}
        </div>
    );
};

export default Categories;