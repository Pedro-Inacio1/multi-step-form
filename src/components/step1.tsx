import { UseFormRegister, FieldErrors } from "react-hook-form";
import FormData from "../types/formTypes";

interface FirstStepProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}

const Step1:React.FC<FirstStepProps> = ({ register, errors }) => {
  return (
    <div>
      <div className="flex justify-center">
            <h1 className="text-xl mt-12 flex justify-center">
              Informações pessoais
            </h1>
          </div>
          <div className="flex justify-center mt-16">
            <label>
              Nome completo:
              <input type="text" {...register('completeName', {required: "Informe seu nome completo."})} />
            </label>
            <p className="text-red-500 text-sm">{errors.completeName?.message}</p>
            <label>
              Data de nascimento:
              <input type="date" {...register('dateOfBirth', {required: "Informe sua data de nascimento."})}/>
            </label>
            <p className="text-red-500 text-sm">{errors.dateOfBirth?.message}</p>
            <label> Email
              <input type="text" {...register('email', {required: "Campo email é obrigatório."})} />              
            </label>
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
            <label>
              Gênero:
              <select {...register('gender', {required: "Informe seu gênero."})}>
                <option value="">Selecione...</option>
                <option value="Homem Cisgênero">Homem cis</option>
                <option value="Mulher Cisgênero">Mulher cis</option>
                <option value="Não-binário">Não-binário</option>
                <option value="Outros">Outros</option>
              </select>
            </label>
            <p className="text-red-500 text-sm">{errors.gender?.message}</p>
            <label>
              Naturalidade:
              <input type="text" {...register('naturality', {required: "Informe sua naturalidade."})}/>
            </label>
            <p className="text-red-500 text-sm">{errors.naturality?.message}</p>
            <label>
              Estado civil
              <input type="text" {...register('civilState', {required: "Informe seu estado civil."})}/>
            </label>
            <p className="text-red-500 text-sm">{errors.civilState?.message}</p>
            <label>
              Celular:
              <input type="text" {...register('cellphone', {required: "Informe seu celular."})}/>
            </label>
            <p className="text-red-500 text-sm">{errors.cellphone?.message}</p>
          </div>
    </div>
  )
}

export default Step1
