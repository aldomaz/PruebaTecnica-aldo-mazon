import { useState } from "react";


export const CreateProduct = () => {

    const [state, setState] = useState({
        name: '',
        category: '',
        province: '',
        city: '',
        pricenoiva: '',
        totalprice: '',
        discount: '',
        discountpercentage: '',
        stock: '',
        disponibility: ''
    });

    const { name, category, province, city, pricenoiva, totalprice, discount, discountpercentage, stock, disponibility } = state;

    const handleChangeText = ({target}) => {
        const{name, value} = target;

        setState({
            ...state,
            [ name ]: value
        })
    }


    return (
        <>
            <h1 className="d-flex justify-content-center">Crear Producto</h1>
            <hr/>
           
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Nombre: </label>
                <div className="col-sm-10">
                    <input
                        className="form-control mt-2 "
                        type='text'
                        placeholder='Nombre'
                        value={ name }
                        onChange={ handleChangeText }
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Categoría: </label>
                <div className="col-sm-10">
                    <input
                        className="form-control mt-2 ml-3 "
                        type='text'
                        placeholder='Categoría'
                        value={ category }
                        onChange={ handleChangeText }
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Provincia: </label>
                <div className="col-sm-10">
                    <input
                        className="form-control mt-2 ml-3 "
                        type='text'
                        placeholder='Provincia'
                        value={ province }
                        onChange={ handleChangeText }
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Ciudad: </label>
                <div className="col-sm-10">
                    <input
                        className="form-control mt-2 ml-3 "
                        type='text'
                        placeholder='Ciudad'
                        value={ city }
                        onChange={ handleChangeText }
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Precio sin IVA: </label>
                <div className="col-sm-10">
                    <input
                        className="form-control mt-2 ml-3 "
                        type='text'
                        placeholder='Precio sin IVA'
                        value={ pricenoiva }
                        onChange={ handleChangeText }
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Precio Total: </label>
                <div className="col-sm-10">
                    <input
                        className="form-control mt-2 ml-3 "
                        type='text'
                        placeholder='Precio Total'
                        value={ totalprice }
                        onChange={ handleChangeText }
                        readOnly={true}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Descuento:</label>
                <div className="col-sm-10">
                    <input
                        className="form-control mt-2 ml-3 "
                        type='text'
                        placeholder='Descuento'
                        value={ discount }
                        onChange={ handleChangeText }
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Porcentaje de descuento: </label>
                <div className="col-sm-10">
                    <input
                        className="form-control mt-2 ml-3 "
                        type='text'
                        placeholder='Porcentaje de descuento'
                        value={ discountpercentage }
                        onChange={ handleChangeText }
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Stock: </label>
                <div className="col-sm-10">
                    <input
                        className="form-control mt-2 ml-3 "
                        type='text'
                        placeholder='Stock'
                        value={ stock }
                        onChange={ handleChangeText }
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Disponibilidad: </label>
                <div className="col-sm-10">
                    <input
                        className="form-control mt-2 ml-3 "
                        type='text'
                        placeholder='Disponibilidad'
                        value={ disponibility }
                        onChange={ handleChangeText }
                    />
                </div>
            </div>
        </>
    )

}

