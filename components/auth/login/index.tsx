import { PasswordInput, TextInput } from "../../input-fild";
import { useForm } from "react-hook-form";
import Button from "../../button";


type PropsTypes = {
  loading: boolean; 
  onSubmit: (data: any) => void;
};

const LoginForm: React.FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
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
        {/* Email */}
        <div className="mb-6">
          <TextInput
            label="Email"
            name="email"
            type="text"
            placeholder="example@gmail.com"
            control={control}
            error={errors.email && errors.email.message}
            defaultvalue={""}
            rules={{
              required: "Email is required.",
              pattern: {
                message: "Invalid email address.",
              },
            }}
          />

          {/* Password input control */}
          <div className="mb-2">
            <PasswordInput
              label="Password"
              name="password"
              type="text"
              placeholder="********"
              control={control}
              error={errors.password && errors.password.message}
              defaultvalue={""}
              rules={{ required: "Password is required" }}
            />
          </div>

          <Button name="Login"></Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
