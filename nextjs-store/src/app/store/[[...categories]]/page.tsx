interface CategoryProps{
    params:{
        categories: string[],
        searhParams?: string
    }
}
export default function Category(props: CategoryProps){
    //console.log(props)
    const{categories} = props.params
    //console.log(categories)
    //throw new Error("Error de prueba");
    return(
        <h1>Categoria dinamica: {categories}</h1>
    )
}