import React from "react";
import Swal from "sweetalert2";

const FormularioProductos = ({ producto }) => {
  const {
    id,
    brand,
    category,
    presentation,
    description,
    price,
    availability,
    quantity,
    photography,
  } = producto;

  const actualizarProducto = id => {
    console.log(id);
  }

  const borrarProducto = (id) => {
    Swal.fire({
      title: "Quieres borrar el producto?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          console.log(id);
          fetch(`http://localhost:8080/api/cleaningprod/${id}`, {
            method: "DELETE",
            headers: {
              Accept: "aplication/json",
              "Content-Type": "aplication/json",
            },
          }).then((data) => {
            // console.log(data);
          });
          Swal.fire("Deleted!", "Se borro correctamente.", "success");
        } catch (error) {
          console.log(error);
        }
      }
    })
  }

  return (
    <div className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white">
        <div className="lg:flex">
          <div className="lg:w-5/12 xl:w-3/12">
            <img src={photography} alt=" imagen platillo " />
            <div className="sm:flex sm:-mx-2 pl-2"></div>
          </div>
          <div className="lg:w-7/12 xl:w-9/12 pl-5">
            <p className="font-bold text-2xl text-yellow-600 mb-4">{brand} </p>
            <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>
            <p className="text-gray-600 mb-4">{presentation} </p>
            <p className="text-gray-600 mb-4">{description} </p>
            <p className="text-gray-600 mb-4">{availability} </p>
            <p className="text-gray-600 mb-4">{category} </p>
            <p className="text-gray-600 mb-4">
              Precios: {""}
              <span className="text-gray-700 font-bold">$ {price}</span>
              <p className="text-gray-600 mb-4">
                Dirección: {""}
                <span className="text-gray-700 font-bold">{quantity}</span>
              </p>
            </p>
            <button
              onClick={() => borrarProducto(producto.id)}
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
            >
              Borrar
            </button>
            <button
              onClick={() => actualizarProducto(producto.id)}
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioProductos;
