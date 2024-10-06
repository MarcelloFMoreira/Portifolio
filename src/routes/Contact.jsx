import React, { useState } from "react";
import Input from "../components/Input";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numeroTelefone, setNumeroTelefone] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Número de Telefone:", numeroTelefone);
    console.log("Assunto:", assunto);
    console.log("Mensagem:", mensagem);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2">
      <div className="ml-16">
        <Input name="Seu nome" onChange={(e) => setNome(e.target.value)} />
        <Input name="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          name="Número de Telefone"
          onChange={(e) => setNumeroTelefone(e.target.value)}
        />
        <Input name="Assunto" onChange={(e) => setAssunto(e.target.value)} />
      </div>
      <div className="flex flex-col items-center h-full ax-w-xl mt-10">
        <input
          onChange={(e) => setMensagem(e.target.value)}
          type="text"
          placeholder="Sua mensagem"
          className="border-2 border-neutral-500 rounded-2xl focus:outline-none focus:border-blue-500 text-neutral-500 w-96 h-96 text-center"
        />
        <input
          type="submit"
          value="Enviar"
          className="bg-vermelho_primary text-white w-44 h-12 rounded-2xl mt-3 flex justify-center items-center"
        />
      </div>
    </form>
  );
};

export default Contact;
