const AToy = () => {
    const handleAddToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const pictureUrl = form.pictureUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newToy = {
            pictureUrl,
            name,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            quantity,
            description,
        };

        console.log(newToy);

        // send data to the server
        fetch('http://localhost:5000/atoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newToy),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // form.reset();
            });
    };

    return (
        <div className="bg-amber-300 p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Picture URL of the toy</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="pictureUrl"
                                placeholder="Picture URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="sellerName"
                                placeholder="Seller Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="email"
                                name="sellerEmail"
                                placeholder="Seller Email"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <label className="input-group">
                            <select
                                name="subCategory"
                                className="select select-bordered w-full"
                            >
                                <option value="">Select a sub-category</option>
                                <option value="Action Figures">Action Figures</option>
                                <option value="Vehicles & Playsets">Vehicles & Playsets</option>
                                <option value="Role-Play & Costumes">Role-Play & Costumes</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                name="rating"
                                placeholder="Rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <label className="input-group">
                            <textarea
                                name="description"
                                placeholder="Detail Description"
                                className="textarea textarea-bordered w-full"
                                rows="4"
                            ></textarea>
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Toy" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AToy;
