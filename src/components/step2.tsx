import React from 'react'
import { UseFormRegister, FieldErrors } from "react-hook-form";
import FormData from '../types/formTypes';
import { useState } from 'react';

interface SecondStepProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>
}

const Step2: React.FC<SecondStepProps> = ({ register, errors }) => {
 
    const [address, setAddress] = useState({street: '', city: '', neighborhood: '', number: ''})

    async function handleZipBlur(e: React.FocusEvent<HTMLInputElement>) {
        
        e.preventDefault();

        const zipcode = e.target.value;
    
        console.log(zipcode)
    
        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${zipcode}`);
    
        const data = await response.json();
    
        setAddress({
            street: data.street,
            city: data.city,
            neighborhood: data.neighborhood,
            number: data.number
        })
    }
    return (
        <div>
            <h1>Endereço</h1>
            <div>
                <label>CEP
                    <input type="text" {...register('CEP', {required: 'Informe o CEP.', onBlur: handleZipBlur})}/>
                </label>
                <p className="text-red-500 text-sm">{errors.CEP?.message}</p>
                <label>Logradouro
                    <input type="text" {...register('street')} value={address.street} />
                </label>
                <label>Bairro
                    <input type="text" {...register('neighborhood')} value={address.neighborhood}/>
                </label>
                <label>Cidade
                    <input type="text" {...register('city')} value={address.city}/>
                </label>
                <label>Complemento
                    <input type="text" {...register('complement')} />
                </label>
                <label>Número
                    <input type="text" {...register('number', {required: 'Informe seu número.'})} />
                </label>
                <p className="text-red-500 text-sm">{errors.number?.message}</p>
            </div>
        </div>
    )
}

export default Step2
