import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddClass = () => {
    const { user } = useContext(AuthContext);

    const handleAddClass = (event) => {
        event.preventDefault();

        const form = event.target;

        const className = form.className.value;
        const classImage = form.classImage.value;
        const instructorName = user.displayName;
        const instructorEmail = user.email;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;

        const newClass = {
            className,
            classImage,
            instructorName,
            instructorEmail,
            availableSeats,
            price,
            status: "pending",
        };

        console.log(newClass);

        // send data to the server
        fetch("https://superhero-toy-store-server-haa-meem.vercel.app/atoy", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newClass),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();
                Swal.fire({
                    title: "Success!",
                    text: "Your Class Added Successfully",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
            });
    };

    return (
        <div className="bg-amber-300 p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a Class</h2>
            <form onSubmit={handleAddClass}>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="className"
                                placeholder="Class Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class Image URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="classImage"
                                placeholder="Class Image URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="instructorName"
                                value={user.displayName}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="instructorEmail"
                                value={user.email}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                name="availableSeats"
                                placeholder="Available Seats"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
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
                </div>
                <input type="submit" value="Add Class" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddClass;
