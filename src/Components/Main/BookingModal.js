import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';


const BookingModal = ({product}) => {
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const {name,price,photo, _id}=product;
    
    const handleBooking=(event)=>{
        event.preventDefault();
        if(!user){
            navigate('/login')
            toast.success('Please login first to book any item')
            return
        }
        const form=event.target;
        const uName=form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        const meetingLocation=form.meetingLocation.value;
        const booking={
            name:uName,
            email,
            productName:name,
            photo,
            price,
            productID:_id,
            phone,
            meetingLocation
        }

        fetch('https://laptop-reseller-server.vercel.app/bookings',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success(data.response)
            console.log(data);
            form.reset()
             navigate('/dashboard/myOrders')
        })
        .catch(err=>console.log(err))


        
        

        
    }
    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking Information for <span className='text-primary'>{name} at {price} tk</span> </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="number" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <input name="meetingLocation" type="text" placeholder="Meeting Location" className="input w-full input-bordered" required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;