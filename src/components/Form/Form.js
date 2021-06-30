import { useState } from "react";
import {useForm} from 'react-hook-form';
import Modal from '../../components/Modal/Modal'
import api from '../../services/api'
import './Form.css'
export default function Form(){
         
    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [company, setCompany] = useState('');
    const [classification, setClassification] = useState('');
    const onSubmit = async function(){
            const data = {
                nome,
                cpf,
                email,
                password,
                company,
                classification
            }

                try{

                    if(password != rePassword){
                        alert("Passwords não são iguais")
                        return;
                    }
                    const response = await api.post(`/costumer`, data)

                    if(response.status === 201){
                       console.log(response.status)
                       setIsOpen(true)
                    }else{
                        alert("Erro ao cadastrar usuário!")
                        
                    }

                }catch(err){
                   
                    setIsOpen(true)
                }


                console.log(data)
    }
    
    function onClickClose(){
        setIsOpen(false)
        window.location.href="/Login"

    }


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-name">
            <label htmlFor="name">Nome</label>
            <input 
            {...register("name", { required: true })}
            type="text"
            id="name"
            name="name" 
            placeholder="Nome" 
            value={nome} 
            onChange={text => setNome(text.target.value)} />
             {errors.name && <span>Campo obrigatório</span>}
        </div>
        <div className="secondary-inputs">
           <div className="secondary-inputs_one">
            <label htmlFor="cpf">CPF</label>
                <input 
                {...register("cpf",{required: true, pattern: /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/i })}
                id="cpf"
                name="cpf"
                type="text" 
                placeholder="CPF" 
                value={cpf} 
                onChange={text => setCpf(text.target.value)}/>
                {errors.cpf && <span>Digite um CPF válido</span>}

           </div>
           <div className="secondary-inputs_two">
            <label htmlFor="name">E-mail</label>
                <input 
                {...register("email", { required: true })}
                id="email"
                name="email"
                type="text" 
                placeholder="E-mail" 
                value={email} 
                onChange={text => setEmail(text.target.value)}/>  
                {errors.email && <span>Campo obrigatório</span>}
           </div>
        </div>
        <div className="secondary-inputs">
           <div className="secondary-inputs_one">
            <label htmlFor="password">Senha</label>
                <input 
                {...register("password", { required: true })}
                id="password"
                name="password"
                type="password" 
                placeholder="Digite sua senha" 
                value={password} 
                onChange={text => setPassword(text.target.value)} />
                {errors.password && <span>Campo obrigatório</span>}

           </div>
           <div className="secondary-inputs_two">
            <label htmlFor="password">Senha</label>
                <input 
                {...register("rePassword", { required: true })}
                id="rePassword"
                name="rePassword"
                type="password" 
                placeholder="Confirme sua senha" 
                value={rePassword} 
                onChange={text => setRePassword(text.target.value)} />
                {errors.rePassword && <span>Campo obrigatório</span>}  
           </div>
        </div>
        <div className="secondary-inputs">
           <div className="secondary-inputs_one">
            <label htmlFor="company">Empresa</label>
                <input 
                {...register("company", { required: true })}
                id="company"
                name="company"
                type="company" 
                placeholder="Empresa" 
                value={company} 
                onChange={text => setCompany(text.target.value)}/>
                {errors.company && <span>Campo obrigatório</span>}
           </div>
           <div className="secondary-inputs_two optgroup">
            <label htmlFor="classification">Classificação</label>
            <select 
            {...register("classification", { required: true })}
            id="classification"
            name="classification"
             value={classification} 
             onChange={text => setClassification(text.target.value)}>
                <option value="">Escolha sua categoria</option>
                <option value={`gerente`}>Gerente</option>
                <option value={`revendedor`}>Revendedor</option>
                <option value={`distribuidor`}>Distribuidor</option>
            </select>
            {errors.classification && <span>Campo obrigatório</span>}
           </div>
        </div>
        <div className="btn-sections">
                <button className="btnLink" type="submit">Enviar</button>
        </div>
        <Modal isOpen={isOpen} onClickClose={onClickClose}>
            Cadastrado com sucesso!
        </Modal>
        </form>
    )
}