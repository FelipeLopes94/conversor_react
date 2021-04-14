import React, { Component } from 'react'
import './conversor.css'
export default class Conversor extends Component {
    
    constructor(props){
        super(props);

        this.state ={
            moedaA_valor: "",
            moedaB_valor: 0,

        }
        this.converter = this.converter.bind(this);
    }

    converter(){

        // Variavel que vai conter a moeda a converter
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;

        // Definicao da URL da api na variavel 
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=3fc4e0a04489ffb076cd`

        // Fetch dos dados da API passando a variavel
        fetch(url)
            .then(res=>{

                // Transfor resposta em JSON
                const jsonCotacao = res.json()

                // Retorna a variavel ja em Json
            return jsonCotacao

        }).then(jsonCotacao=>{
            // usar a variavel para pegar o dado da API
            
                //variavel com o valor 
                let cotacao = jsonCotacao[de_para] 

                // variavel com o valor da conversao em NUMERO e fixado a 2 casas depois da virgula
                let moedaB_valor = (parseFloat( this.state.moedaA_valor * cotacao).toFixed(2))

                // Passando o valor para o controle de estado
                this.setState({moedaB_valor})
            })
    }

    render() {
        return (
            <div className="conversor">

                    <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                    <input type="text"  onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}/>
                    <input type="button" value="converter" onClick={this.converter}/>
                    <h2>{this.state.moedaB_valor}</h2>

            </div>
        )
    }
}
