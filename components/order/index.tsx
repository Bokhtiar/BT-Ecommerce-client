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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <TextInput
                            label="First Name"
                            name="f_name"
                            type="text"
                            placeholder="first name"
                            control={control}
                            error={errors.name && errors.name.message}
                            defaultvalue={""}
                            rules={{
                                required: "First name is required.",
                                pattern: {
                                    message: "Invalid first name.",
                                },
                            }}
                        />
                    </div>
                    <div>
                        <TextInput
                            label="Last Name"
                            name="l_name"
                            type="text"
                            placeholder="last name"
                            control={control}
                            error={errors.name && errors.name.message}
                            defaultvalue={""}
                            rules={{
                                required: "Last name is required.",
                                pattern: {
                                    message: "Invalid last name.",
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

                {/* address */}
                <div className='grid grid-cols-1 my-4'>
                    <TextInput
                        label="Address"
                        name="address"
                        type="text"
                        placeholder="Address"
                        control={control}
                        error={errors.addres && errors.addres.message}
                        defaultvalue={""}
                        rules={{
                            required: "Addres is required.",
                            pattern: {
                                message: "Invalid addres.",
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
