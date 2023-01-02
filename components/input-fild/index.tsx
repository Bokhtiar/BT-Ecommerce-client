import React from 'react'
import { useState } from 'react';
import { useController } from "react-hook-form";
import { Iinput } from '../../types/components/input'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface IRFields {
  label: string;
  error: any;
  name: string;
  defaultvalue: string | number;
  placeholder: string;
  control: any;
  rules: any;
  className?: string;
  disabled?: boolean;
  rows?: number;
  type?: "text" | "number" | "email" | "password";
}

type OptionTypes = {
  _id?: string;
  image?: string;
  label: string;
  value: string;
};

/* Text input */
export const TextInput: React.FC<IRFields> = (props: IRFields): JSX.Element => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
  });

  return (
    <div>
      {props.error ? (
        <p className="text-sm mb-1 text-danger">{props.error}</p>
      ) : (
        <p className="text-sm mb-1 text-gray-500">{props.label}</p>
      )}
      <input
        onChange={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={props.name} // send down the input name
        placeholder={props.placeholder}
        disabled={props.disabled}
        type={props.type || "text"}
        min={0}
        className={
          props.error
            ? `w-full text-sm bg-white disabled:bg-gray-300 rounded-none outline-none p-[18px] border !border-danger ${props.className}`
            : `w-full text-sm bg-white disabled:bg-gray-300 rounded-none outline-none p-[18px] border disabled:border-gray-300 ${props.className}`
        }
      />
    </div>
  );
};


/* Password input */
export const PasswordInput: React.FC<IRFields> = (
  props: IRFields
): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
  });

  return (
    <div>
      {props.error ? (
        <p className="text-sm mb-1 text-danger">{props.error}</p>
      ) : (
        <p className="text-sm mb-1 text-gray-500">{props.label}</p>
      )}

      <div className="relative">
        <input
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched/blur
          value={value} // input value
          name={props.name} // send down the input name
          placeholder={props.placeholder}
          type={show ? "text" : "password"}
          disabled={props.disabled}
          className={
            props.error
              ? `w-full text-sm bg-white disabled:bg-gray-300 rounded-none outline-none p-[18px] border border-danger ${props.className}`
              : `w-full text-sm bg-white disabled:bg-gray-300 rounded-none outline-none p-[18px] border disabled:border-gray-300 ${props.className}`
          }
        />

        {show ? (
          <AiOutlineEye
            size={21}
            className="cursor-pointer absolute top-5 right-4 text-gray-500"
            onClick={() => setShow(!show)}
          />
        ) : (
          <AiOutlineEyeInvisible
            size={21}
            className="cursor-pointer absolute top-5 right-4 text-gray-500"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
    </div>
  );
};
