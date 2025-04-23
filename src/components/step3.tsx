import FormData from "../types/formTypes";
import FinnalyBtn from "../styled-components/finnaly-button";
import { FieldErrors } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";

interface StepForm3 {
    data: FormData;
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}

const Step3: React.FC<StepForm3> = ({ data, register, errors }) => {
    console.log(data)
    return (
        <div>
            <h1>Resumo dos Dados</h1>
            <ul className="space-y-2">
                <li><strong>Nome:</strong> {data.completeName}</li>
                <li><strong>Email:</strong> {data.email}</li>
                <li><strong>Telefone:</strong> {data.cellphone}</li>
                <li><strong>CEP:</strong> {data.CEP}</li>
                <li><strong>Rua:</strong> {data.street}</li>
                <li><strong>Bairro:</strong> {data.neighborhood}</li>
                <li><strong>Cidade:</strong> {data.city}</li>
                <li><strong>Número:</strong> {data.number}</li>
                {data.complement && <li><strong>Complemento:</strong> {data.complement}</li>}

                <div>
                    <label>Senha:
                        <input type="password" {...register('password', { required: 'Informe uma senha.' })} />
                    </label>
                    <p className="text-red-500 text-sm">{errors.password?.message}</p>
                    <label>Confirme a senha:
                        <input type="password" {...register('confirmPassword', { required: 'Confirme a senha.' })} />
                    </label>
                    <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
                </div>

                <FinnalyBtn />
            </ul>
        </div>
    )
}

export default Step3
