import React from 'react';

const Modal = () => {
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="edit" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold text-center">Book  cheap price </h3>


                    <form  >

                        <input type="text" name='name' readOnly placeholder="name" className="input w-full mt-10   input-bordered " />

                        <input type="text" name='itemname' readOnly placeholder="name" className="input w-full mt-10   input-bordered " />

                        <input type="email" name='email' readOnly disabled placeholder="email" className="input w-full mt-10   input-bordered " />

                        <input type="number" name='price' readOnly

                            placeholder="price" className="input w-full mt-10  input-bordered " />



                        <input type="text" name='phone' placeholder="your phone number" className="input w-full mt-10   input-bordered " />

                        <input type="text" name='location' placeholder="your location " className="input w-full mt-10   input-bordered " />



                        <input className='w-full  btn-primary rounded mt-10' type="submit" value="submit" />
                    </form>
                </div>
            </div></>
    );
};

export default Modal;