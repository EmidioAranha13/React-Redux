import React from 'react';

// function App() {
class App extends React.Component{

  state = {
    nameAtv: "",
    selectType: "",
    descriptionAtv: "",
    taskList: []
  }

  data_insert = (event) =>{

    const value_input = event.target.value
    const  namecase = event.target.name
    
    this.setState({[namecase]: value_input})
  }

  createCardTask = () => {

    let typeCard = "";
    const task = this.state.taskList;

    for(let indice=0; indice<task.length; indice++){
      console.log(task[indice])
      if(task[indice].selectType==="Trabalho"){
        typeCard  = "card text-white bg-primary mb-3";
      }else if(task[indice].selectType==="Tarefa"){
        typeCard  = "card text-white bg-success mb-3";
      }else if(task[indice].selectType==="Aviso"){
        typeCard  = "card text-white bg-info mb-3";
      }else if(task[indice].selectType==="Advertência"){
        typeCard  = "card text-white bg-warning mb-3";
      }

      return (
        <div className= {typeCard}  style={{maxWidth: '20rem'}}>
          <div className="card-header">{task[indice].selectType}</div>
          <div className="card-body">
            <h4 className="card-title">{task[indice].nameAtv}</h4>
            <p className="card-text">{task[indice].descriptionAtv}</p>
          </div>
        </div>
      )
    }
  }

  onSubmit = () => {
    
    console.log(this.state);

    const task = {
      nameAtv: this.state.nameAtv,
      selectType: this.state.selectType,
      descriptionAtv: this.state.descriptionAtv
    }
    this.state.taskList.push(task)
  }

  render(){
    return (
      <div>
        <header>
          <div className="jumbotron">
            <div className="row">
              <div className="col-sm-12">
              <h1 className="display-3">React com Redux + Redux thunk!</h1>
              </div>
            </div>
            <p className="lead" style={{ textAlign: 'center'}} >Adicione os seus dados para criar um bloco de informações.</p>
            <hr className="my-4"/>
            <div className="row">
              {/* <div className="col-sm-3"></div> */}
              <div className="col-sm-4" style={{margin: '6px auto'}}>
                <input id="nameAtv" 
                      name="nameAtv" 
                      className="form-control mr-sm-2" 
                      type="text" 
                      placeholder="Nome da atividade" 
                      value={this.state.nameAtv}  
                      onChange={this.data_insert}
                      >
                 </input>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4" style={{margin: '6px auto'}}>
                {/* <input className="form-control mr-sm-2" type="text" placeholder="Selecionar Tipo"></input> */}
                <select multiple="" 
                        className="form-control" 
                        id="selectType"
                        name="selectType"
                        onChange={this.data_insert}>
                  <option disabled selected hidden>Selecione um tipo</option>
                  <option value = "Trabalho">Trabalho</option>
                  <option value = "Tarefa">Tarefa</option>
                  <option value = "Aviso">Aviso</option>
                  <option value = "Advertência">Advertência</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4" style={{margin: '6px auto'}}>
                <textarea className="form-control" 
                          id="descriptionAtv" 
                          rows="3" 
                          name="descriptionAtv"
                          placeholder="Descrição da Atividade"
                          value={this.state.descriptionAtv}  
                          onChange={this.data_insert}
                          >
                </textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-4" style={{margin: '6px 0px'}}>
                <div style={{margin: '0px 165px'}}>
                  <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Salvar</button>
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        </header>
        <div className="row">
          <div className="col-sm-6" style={{margin: '6px 50px'}}>
            {    
              (this.state.taskList.length !== 0 
                ? this.createCardTask()
                : (<div>
                    <p>Lista de tarefas vazia!</p>
                  
                  </div>)
              )
            }
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
