import React from 'react'
import { UseFormRegister, FieldErrors } from "react-hook-form";
import FormData from '../types/formTypes';
import FinnalyBtn from '../styled-components/finnaly-button';

interface SecondStepProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>
}

const Step3: React.FC<SecondStepProps> = ({ register, errors }) => {
    return (
        <div>
            <h1>Criação de usuário</h1>
            <div>
                <label>Nome de usuário:
                    <input type="text" {...register('userName', { required: 'Informe o nome de usuário.'})} />
                </label>
                <p className="text-red-500 text-sm">{errors.userName?.message}</p>
                <label>Senha:
                    <input type="password" {...register('password', { required: 'Informe uma senha.'})} />
                </label>
                <p className="text-red-500 text-sm">{errors.password?.message}</p>
                <label>Confirme a senha:
                    <input type="password" {...register('confirmPassword', { required: 'Confirme a senha.'})} />
                </label>
                <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
            </div>
            <FinnalyBtn/>
        </div>
    )
}
export default Step3;