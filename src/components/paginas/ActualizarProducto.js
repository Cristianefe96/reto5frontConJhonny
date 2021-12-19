import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup'
import { useParams } from 'react-router-dom';


const ActualizarProducto = () => { // validación y leer los datos del formulario

    const {id} = useParams();
    console.log({id});
    
    const actualizarProducto =reference =>{
        console.log(reference);
    }

    const [productos, guardarProductosActualizar] = useState([]);

    fetch(`http://localhost:8080/api/cleaningprod/${id}`)
    .then((res) => res.json()).then((data) => {
        console.log(data);
        guardarProductosActualizar(data);
    });

    const formik = useFormik({
        initialValues: {
            brand: '',
            category: '',
            presentation: '',
            description: '',
            price: '',
            availability: '',
            quantity: '',
            photography: ''

        },
        validationSchema: Yup.object(
            {
                id: Yup.number().min(1, 'Debes agregar un número').required('El id es obligatorio. Por favor digite un id.'),
                brand: Yup.string().min(1, 'Debes agregar una marca').required('La marca es obligatoria, Por favor digite una marca.'),
                category: Yup.string().min(2, 'Debes agregar una categoria').required('La categoria es obligatoria, Por favor digite una categoria.'),
                presentation: Yup.string().min(3, 'Debes agregar una presentacion').required('La presentacion es obligatoria'),
                description: Yup.string().min(3, 'Debes agregar una presentacion').required('La presentacion es obligatoria'),
                availability: Yup.string().min(3, 'Debes agregar la disponibilidad').required('La disponibilidad debe ser true o false'),
                price: Yup.number().min(3, 'Debes agregar el precio').required('El precio es obligatorio'),
                quantity: Yup.number().min(3, 'Debes agregar la cantidad').required('Debes agregar el precio'),
                photography: Yup.string().min(3, 'Debes agregar el link de la fotografia').required('La fotografia es obligatoria')

            }
        ),
        onSubmit: datos => {

            console.log(datos);

        }
    });
    return (
        <>
            <h1 className="text-3xl font-light mb-4">Actualizar Producto</h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form onSubmit={
                        formik.handleSubmit
                    }>
                        
                        {
                        formik.touched.id && formik.errors.id ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{
                                    formik.errors.id
                                } </p>
                            </div>
                        ) : null
                    }


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Marca</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="brand" type="text" placeholder="brand"
                                value={
                                    formik.values.brand
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }/>
                        </div>
                        {
                        formik.touched.brand && formik.errors.brand ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{
                                    formik.errors.brand
                                } </p>
                            </div>
                        ) : null
                    }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Categoria</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" placeholder="Category"
                                value={
                                    formik.values.nombre
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }/>
                        </div>
                        {
                        formik.touched.category && formik.errors.category ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{
                                    formik.errors.category
                                } </p>
                            </div>
                        ) : null
                    }


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Presentación</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="presentation" type="text" placeholder="Presentacion"
                                value={
                                    formik.values.presentation
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }/>
                        </div>
                        {
                        formik.touched.presentation && formik.errors.presentation ? (
                            <div className="bg-blue-200 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{
                                    formik.errors.presentation
                                } </p>
                            </div>
                        ) : null
                    }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Descripción</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Descripcion"
                                value={
                                    formik.values.description
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }/>
                        </div>
                        {
                        formik.touched.description && formik.errors.description ? (
                            <div className="bg-blue-200 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{
                                    formik.errors.description
                                } </p>
                            </div>
                        ) : null
                    }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Disponibilidad</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="availability" type="text" placeholder="Disponibilidad"
                                value={
                                    formik.values.availability
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }/>
                        </div>
                        {
                        formik.touched.availability && formik.errors.availability ? (
                            <div className="bg-blue-200 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{
                                    formik.errors.availability
                                } </p>
                            </div>
                        ) : null
                    }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Precio</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" placeholder="Precio"
                                value={
                                    formik.values.price
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }/>
                        </div>
                        {
                        formik.touched.price && formik.errors.price ? (
                            <div className="bg-blue-200 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{
                                    formik.errors.price
                                } </p>
                            </div>
                        ) : null
                    }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Cantidad</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Quantity"
                                value={
                                    formik.values.quantity
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }/>
                        </div>
                        {
                        formik.touched.quantity && formik.errors.quantity ? (
                            <div className="bg-blue-200 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{
                                    formik.errors.quantity
                                } </p>
                            </div>
                        ) : null
                    }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fotografia</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="photography" type="text" placeholder="Photography"
                                value={
                                    formik.values.photography
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }/>
                        </div>
                        {
                        formik.touched.photography && formik.errors.photography ? (
                            <div className="bg-blue-200 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{
                                    formik.errors.photography
                                } </p>
                            </div>
                        ) : null
                    }
                        <button onClick={
                                () => actualizarProducto()
                            }
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold">
                            Borrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ActualizarProducto;