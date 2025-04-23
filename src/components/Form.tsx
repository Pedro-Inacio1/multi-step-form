import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import FormData from "../types/formTypes";
import NextButton from "../styled-components/next-button";
import BackButton from "../styled-components/back-button";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Swal from "sweetalert2";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  const [page, setPage] = useState(1);

  const handleNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleBack = () => setPage((prevPage) => prevPage - 1);

  const values = getValues();

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Step1 register={register} errors={errors} />;
      case 2:
        return <Step2 register={register} errors={errors} setValue={setValue} />;
      default:
        return <Step3 data={values} register={register} errors={errors} />;
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data: FieldValues) => {
    Swal.fire({
      icon: "success",
      title: "Sucesso",
      text: "Cadastro realizado com sucesso!",
    });

    // const response = await fetch('example.api.com', {
    //   method: 'POST',
    //   headers: {'Content-Type' : 'application/json'},
    //   body: JSON.stringify({
    //     data: data
    //   })
    // })
    // if(response.ok) {
    //   Swal.fire({
    //     icon: "success",
    //     title: "Sucesso",
    //     text: "Cadastro realizado com sucesso!",
    //   });
    // }
    // else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: response.statusText
    //   });
    // }
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div>
        <h1 className="text-4xl flex justify-center mt-12 text-bold">
          Formulário de cadastro
        </h1>
        {renderPage()}

        <div className="flex justify-between mt-8">
          {page > 1 && <BackButton onClick={handleBack} />}
          {page < 3 && <NextButton onClick={handleNext} />}
        </div>
      </div>
    </form>
  );
};

export default Form;
