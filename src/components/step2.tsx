import React from 'react'
import { UseFormRegister, FieldErrors } from "react-hook-form";
import FormData from '../types/formTypes';

interface SecondStepProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>
}

const Step2: React.FC<SecondStepProps> = ({ register, errors }) => {
    return (
        <div>
            <h1>Endereço</h1>
            <div>
                <label>CEP
                    <input type="text" {...register('CEP', {required: 'Informe o CEP.'})}/>
                </label>
                <p className="text-red-500 text-sm">{errors.CEP?.message}</p>
                <label>Logradouro
                    <input type="text" {...register('street')} />
                </label>
                <label>Cidade
                    <input type="text" {...register('city')} />
                </label>
                <label>Estado
                    <input type="text" {...register('state')} />
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
