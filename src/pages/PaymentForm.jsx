import { toast, ToastContainer, useForm , useState } from "../utils/imports";

const paypalImg = "/assets/images/paypal.png";
const visaImg = "/assets/images/visa.png";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [paymentMethod, setPaymentMethod] = useState(null); // Track selected payment method

  const onSubmit = (data) => {
    toast.success("Thank you for visiting our website and placing an order");
    reset()
  };

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    // Optionally, reset the card-related fields if payment method changes
    if (method === 'COD') {
      setValue('cardNumber', '');
      setValue('expiryDate', '');
      setValue('cardHolder', '');
      setValue('cvc', '');
    }
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="flex flex-wrap gap-6 justify-between ">
        <div className="w-full p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Billing Info</h2>
              <div className="flex justify-between text-gray-500 mb-4">
                <span>Please Enter your Billing Info</span>
                <span>Step 1 of 2</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Type Your Name"
                    className="input input-bordered w-full h-10 bg-gray-100 rounded-md px-2"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="number"
                    placeholder="Type Your Phone Number"
                    className="input input-bordered w-full h-10 bg-gray-100 rounded-md px-2"
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    placeholder="Type Your Address"
                    className="input input-bordered w-full h-10 bg-gray-100 rounded-md px-2"
                    {...register('address', { required: 'Address is required' })}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Town/City</label>
                  <input
                    type="text"
                    placeholder="Town/City"
                    className="input input-bordered w-full h-10 bg-gray-100 rounded-md px-2"
                    {...register('city', { required: 'City is required' })}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
              <div className="flex justify-between text-gray-500 mb-4">
                <span>Please Enter your Payment Method</span>
                <span>Step 2 of 2</span>
              </div>
              <div className="flex items-center gap-6 mb-4 w-full justify-between pr-3">
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="payment"
                    onChange={() => handlePaymentChange('Online')}
                    checked={paymentMethod === 'Online'}
                    className="radio"
                  />
                  <span className="text-gray-700 font-medium">Online</span>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="payment"
                    onChange={() => handlePaymentChange('COD')}
                    checked={paymentMethod !== 'Online' || paymentMethod === 'COD'}
                    className="radio"
                  />
                  <span className="text-gray-700 font-medium">COD</span>
                </div>
              </div>
              <div className="flex gap-5 w-full justify-end">
                <img src={visaImg} alt="Visa" className="w-14" />
                <img src={paypalImg} alt="MasterCard" className="w-14" />
              </div>
            </div>
            {paymentMethod === 'Online' && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Card Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Card Number</label>
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="input input-bordered w-full h-10 bg-gray-100 rounded-md px-2"
                      {...register('cardNumber', { required: 'Card Number is required' })}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Expiration Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="input input-bordered w-full h-10 bg-gray-100 rounded-md px-2"
                      {...register('expiryDate', { required: 'Expiration Date is required' })}
                    />
                    {errors.expiryDate && (
                      <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Card Holder</label>
                    <input
                      type="text"
                      placeholder="Card Holder"
                      className="input input-bordered w-full h-10 bg-gray-100 rounded-md px-2"
                      {...register('cardHolder', { required: 'Card Holder is required' })}
                    />
                    {errors.cardHolder && (
                      <p className="text-red-500 text-sm">{errors.cardHolder.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">CVC</label>
                    <input
                      type="text"
                      placeholder="CVC"
                      className="input input-bordered w-full h-10 bg-gray-100 rounded-md px-2"
                      {...register('cvc', { required: 'CVC is required' })}
                    />
                    {errors.cvc && (
                      <p className="text-red-500 text-sm">{errors.cvc.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <button type="submit" className="w-full btn mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PaymentForm;
