import React from 'react'
import { UseFormRegister, FieldErrors } from "react-hook-form";
import FormData from '../types/formTypes';
import { UseFormSetValue } from 'react-hook-form';

interface SecondStepProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
    setValue: UseFormSetValue<FormData>;
}

const Step2: React.FC<SecondStepProps> = ({ register, errors, setValue }) => {


    async function handleZipBlur(e: React.FocusEvent<HTMLInputElement>) {

        e.preventDefault();

        const zipcode = e.target.value;

        console.log(zipcode)

        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${zipcode}`);

        const data = await response.json();

        setValue('street', data.street || '')
        setValue('city', data.city || '')
        setValue('neighborhood', data.neighborhood || '')
        setValue('number', data.number || '')
    }


    return (
        <div>
            <h1>Endereço</h1>
            <div>
                <label>CEP
                    <input type="text" {...register('CEP', { required: 'Informe o CEP.', onBlur: handleZipBlur })} />
                </label>
                <p className="text-red-500 text-sm">{errors.CEP?.message}</p>
                <label>Logradouro
                    <input type="text" {...register('street')} />
                </label>
                <label>Bairro
                    <input type="text" {...register('neighborhood')} />
                </label>
                <label>Cidade
                    <input type="text" {...register('city')} />
                </label>
                <label>Complemento
                    <input type="text" {...register('complement')} />
                </label>
                <label>Número
                    <input type="text" {...register('number', { required: 'Informe seu número.' })} />
                </label>
                <p className="text-red-500 text-sm">{errors.number?.message}</p>
            </div>
        </div>
    )
}

export default Step2
