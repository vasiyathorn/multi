import './Components.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Counter from './counter/counter'
import Timer from './Timer/Timer'
import Add from './Add/Add'
import Temperatures from './Temperatures/Temperatures'
function Components() {
    return (
        <div className='app-container'>
  
          <h1>Hello React</h1>
  
          <div className='app-components'>
            <div className='app-ct'>
              <Counter name= {"Jane"} value= {20}/>
              <Timer />
            </div>
  
            <div className='app-add'>
              <Add aValue = {10} bValue = {20} />
            </div>
  
          </div>
  
          <Temperatures />
  
          <h1 className = 'title'>นางสาววาศิยาธร กางกั้น 66079501</h1>
        
        </div>
    )
  }

export default Components