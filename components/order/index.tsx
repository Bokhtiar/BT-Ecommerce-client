import { TextInput } from "../input-fild";
import { useForm } from "react-hook-form";
import Button from "../button";


type PropsTypes = {
    loading: boolean;
    onSubmit: (data: any) => void;
};

const OrderForm: React.FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    /* Handle form submit */
    const onSubmit = (data: any) => props.onSubmit(data);

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                {/* title */}
                <div className="flex gap-4 my-8 py-3 items-center shadow-md px-3">
                    <div className='mt-1'><span className="material-symbols-outlined">check_circle</span></div>
                    <div className='uppercase text-xl font-bold'>Shipping Address</div>
                </div>

                {/* name part */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div>
                        <TextInput
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="name"
                            control={control}
                            error={errors.name && errors.name.message}
                            defaultvalue={""}
                            rules={{
                                required: "Name is required.",
                                pattern: {
                                    message: "Invalid name.",
                                },
                            }}
                        />
                    </div>
                </div>

                {/* personal infomation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className='md:col-span-1'>
                        <TextInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email address"
                            control={control}
                            error={errors.email && errors.email.message}
                            defaultvalue={""}
                            rules={{
                                required: "Email is required.",
                                pattern: {
                                    message: "Invalid email.",
                                },
                            }}
                        />
                    </div>
                    <div className='md:col-span-1'>
                        <TextInput
                            label="Phone"
                            name="phone"
                            type="number"
                            placeholder="Phone number"
                            control={control}
                            error={errors.phone && errors.phone.message}
                            defaultvalue={""}
                            rules={{
                                required: "Phone is required.",
                                pattern: {
                                    message: "Invalid phone.",
                                },
                            }}
                        />
                    </div>
                </div>

                {/* payment information */}
                <div className="grid grid-cols-3 my-4 gap-4">
                    <TextInput
                        label="Payment name"
                        name="payment_name"
                        type="text"
                        placeholder="bkash, rocket, nogud"
                        control={control}
                        error={errors.payment_name && errors.payment_name.message}
                        defaultvalue={""}
                        rules={{
                            required: "Payment name is required.",
                            pattern: {
                                message: "Invalid payment name.",
                            },
                        }}
                    />

                    <TextInput
                        label="Payment number"
                        name="payment_number"
                        type="text"
                        placeholder="0182372323"
                        control={control}
                        error={errors.payment_number && errors.payment_number.message}
                        defaultvalue={""}
                        rules={{
                            required: "Payment number is required.",
                            pattern: {
                                message: "Invalid payment number.",
                            },
                        }}
                    />

                    <TextInput
                        label="Payment transection id"
                        name="payment_txid"
                        type="text"
                        placeholder="0las23las"
                        control={control}
                        error={errors.payment_txid && errors.payment_txid.message}
                        defaultvalue={""}
                        rules={{
                            required: "payment transection id is required.",
                            pattern: {
                                message: "Invalid payment transection id.",
                            },
                        }}
                    />
                </div>

                {/* address */}
                <div className='grid grid-cols-1 my-4'>
                    <TextInput
                        label="Location"
                        name="location"
                        type="text"
                        placeholder="Location"
                        control={control}
                        error={errors.location && errors.location.message}
                        defaultvalue={""}
                        rules={{
                            required: "Location is required.",
                            pattern: {
                                message: "Invalid location.",
                            },
                        }}
                    />
                </div>
                {/* note */}
                <div className='grid grid-cols-1 my-4'>
                    <TextInput
                        label="Note"
                        name="note"
                        type="text"
                        placeholder="note"
                        control={control}
                        error={errors.note && errors.note.message}
                        defaultvalue={""}
                        rules={{
                            required: "Note is required.",
                            pattern: {
                                message: "Invalid note.",
                            },
                        }}
                    />
                </div>

                {/* button */}
                <div className='my-8 flex gap-2 text-center'>
                    <Button name='Save and delivery here'></Button>
                    <Button name='Cancel'></Button>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;
