import React,{Component}from'react'
import  db from'../config';
import{Table,Button}from'reactstrap';
export default class menú extends Component{

    state={
        items:''
}

    componentDidMount(){
        db.collection("menú").get().then((snapShots)=>{
           this.setState({
               items:snapShots.docs.map(doc=>{
    
                   return {id:doc.id,
                           data:doc.data()}

               })
           },error=>{
               console.log(error)
           })      
        });
    }

    render(){
        const{items}=this.state;
        return(
            <div>
                <Table hover className='text-center'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items && items!==undefined?items.map((item,key)=>(
                              <tr key={key}>
                              <td>{item.data.item}</td>
                              <td><Button color='warning'>Editar</Button></td>
                              <td><Button color='danger'>Eliminar</Button></td>
                              </tr>
                        )):null}
                    </tbody>
                </Table>
            </div>
        )
    }
   }