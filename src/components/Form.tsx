import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NextButton from "../styled-components/next-button";

const Form: React.FC = () => {
  const { register, trigger } = useForm();

  const [page, setPage] = useState(1);

  const handleNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleBack = () => setPage((prevPage) => prevPage - 1);

  return (
    <>
      {page === 1 && (
        <div>
          <h1 className="text-4xl flex justify-center mt-12 text-bold">
            Formulário de cadastro
          </h1>
          <div className="flex justify-center">
            <h1 className="text-xl mt-12 flex justify-center">
              Informações pessoais
            </h1>
          </div>
          <div className="flex justify-center mt-16">
            <label>
              Nome completo:
              <input type="text" />
            </label>
            <label>
              CPF:
              <input type="text" />
            </label>
          </div>
          <NextButton/>
        </div>
      )}
    </>
  );
};

export default Form;
