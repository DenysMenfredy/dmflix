import React from 'react';
import './style.css';

function FormCategoria() {
    return (

        <form>
            <div className="formField">
                <label>
                    Nome
                </label>
                <input type="text"></input>
            </div>
            <div className="formField">
                <label>
                    Todos os vídeo da área de Front End juntarei nessa categoria para organizar os estudos que venho fazendo atualmente
                </label>
                <textarea></textarea>
            </div>
            <div className="formField">
                <label>
                    Cor
                </label>
                <input type="color"></input>
            </div>
            <div className="formField">
                <label>
                    Código de Segurança
                </label>
                    <input type="text"></input>
            </div>
          <button className="cad-button">Salvar</button>
          <button className="erase-button">Limpar</button>
        </form>

    );
}

export default FormCategoria;