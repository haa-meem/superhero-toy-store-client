import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  //Website name changing in every route
  useEffect(() => {
    document.title = 'SuperHero Toy Store | Update Toy'
  }, []);

  const toy = useLoaderData();

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      price,
      quantity,
      description,
    };

    console.log(updatedToy);

    // send data to the server
    fetch(`https://superhero-toy-store-server-haa-meem.vercel.app/atoy/${toy._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Your Toy has been updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        }
      });
  };

  return (
    <div className="bg-amber-300 p-24">
      <h2 className="text-3xl font-extrabold text-center">Update Toy</h2>
      <form onSubmit={handleUpdateToy}>
        <div className="mb-8">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            name="price" defaultValue={toy.price}
            placeholder="Price"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-8">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            name="quantity" defaultValue={toy.quantity}
            placeholder="Available Quantity"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-8">
          <label className="label">
            <span className="label-text">Detail Description</span>
          </label>
          <textarea
            name="description" defaultValue={toy.description}
            placeholder="Detail Description"
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>
        </div>
        <input type="submit" value="Update" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateToy;
