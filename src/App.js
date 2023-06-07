/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import {FaUserCircle} from 'react-icons/fa';

import Mahasiswa from './components/Mahasiswa/Mahasiswa';
import './App.css';
import { result } from './function';


function App() {
  const [output,setOutput] = useState(null);
  let aspek1 = [1,1,1,1,1,1,1,1,1,1];
  let aspek2 = [1,1,1,1,1,1,1,1,1,1];
  let aspek3 = [1,1,1,1,1,1,1,1,1,1];
  let aspek4 = [1,1,1,1,1,1,1,1,1,1];
  let aspekPenilaian = {};

  return (
    <div className='main-container'>
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <div className='nilai-container'>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className='title-table'><p>Aspek <br/>Penilaian 1</p></th>
              <th className='title-table'><p>Aspek <br/>Penilaian 2</p></th>
              <th className='title-table'><p>Aspek <br/>Penilaian 3</p></th>
              <th className='title-table'><p>Aspek <br/>Penilaian 4</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span><FaUserCircle className='icon-user'/> Mahasiswa 1</span></td>
              <td><Mahasiswa item={aspek1} idx={0}/></td>
              <td><Mahasiswa item={aspek2} idx={0}/></td>
              <td><Mahasiswa item={aspek3} idx={0}/></td>
              <td><Mahasiswa item={aspek4} idx={0}/></td>
            </tr>
            <tr>
               <td><span><FaUserCircle className='icon-user'/> Mahasiswa 2</span></td>
              <td><Mahasiswa item={aspek1} idx={1}/></td>
              <td><Mahasiswa item={aspek2} idx={1}/></td>
              <td><Mahasiswa item={aspek3} idx={1}/></td>
              <td><Mahasiswa item={aspek4} idx={1}/></td>
            </tr>
            <tr>
             <td><span><FaUserCircle className='icon-user'/> Mahasiswa 3</span></td>
              <td><Mahasiswa item={aspek1} idx={2}/></td>
              <td><Mahasiswa item={aspek2} idx={2}/></td>
              <td><Mahasiswa item={aspek3} idx={2}/></td>
              <td><Mahasiswa item={aspek4} idx={2}/></td>
            </tr>
            <tr>
             <td><span><FaUserCircle className='icon-user'/> Mahasiswa 4</span></td>
              <td><Mahasiswa item={aspek1} idx={3}/></td>
              <td><Mahasiswa item={aspek2} idx={3}/></td>
              <td><Mahasiswa item={aspek3} idx={3}/></td>
              <td><Mahasiswa item={aspek4} idx={3}/></td>
            </tr>
            <tr>
             <td><span><FaUserCircle className='icon-user'/> Mahasiswa 5</span></td>
              <td><Mahasiswa item={aspek1} idx={4}/></td>
              <td><Mahasiswa item={aspek2} idx={4}/></td>
              <td><Mahasiswa item={aspek3} idx={4}/></td>
              <td><Mahasiswa item={aspek4} idx={4}/></td>
            </tr>
            <tr>
               <td><span><FaUserCircle className='icon-user'/> Mahasiswa 6</span></td>
              <td><Mahasiswa item={aspek1} idx={5}/></td>
              <td><Mahasiswa item={aspek2} idx={5}/></td>
              <td><Mahasiswa item={aspek3} idx={5}/></td>
              <td><Mahasiswa item={aspek4} idx={5}/></td>
            </tr>
            <tr>
            <td><span><FaUserCircle className='icon-user'/> Mahasiswa 7</span></td>
              <td><Mahasiswa item={aspek1} idx={6}/></td>
              <td><Mahasiswa item={aspek2} idx={6}/></td>
              <td><Mahasiswa item={aspek3} idx={6}/></td>
              <td><Mahasiswa item={aspek4} idx={6}/></td>
            </tr>
            <tr>
                <td><span><FaUserCircle className='icon-user'/> Mahasiswa 8</span></td>
              <td><Mahasiswa item={aspek1} idx={7}/></td>
              <td><Mahasiswa item={aspek2} idx={7}/></td>
              <td><Mahasiswa item={aspek3} idx={7}/></td>
              <td><Mahasiswa item={aspek4} idx={7}/></td>
            </tr>
            <tr>
               <td><span><FaUserCircle className='icon-user'/> Mahasiswa 9</span></td>
              <td><Mahasiswa item={aspek1} idx={8}/></td>
              <td><Mahasiswa item={aspek2} idx={8}/></td>
              <td><Mahasiswa item={aspek3} idx={8}/></td>
              <td><Mahasiswa item={aspek4} idx={8}/></td>
            </tr>
            <tr>
              <td><span><FaUserCircle className='icon-user'/> Mahasiswa 10</span></td>
              <td><Mahasiswa item={aspek1} idx={9}/></td>
              <td><Mahasiswa item={aspek2} idx={9}/></td>
              <td><Mahasiswa item={aspek3} idx={9}/></td>
              <td><Mahasiswa item={aspek4} idx={9}/></td>
            </tr>
          </tbody>
        </table>
        <div className='button-cont'>
          <button
            onClick={() =>{
              setOutput(result(aspek1,aspek2,aspek3,aspek4))
              console.log(result(aspek1,aspek2,aspek3,aspek4))
            }}
          >Simpan</button>
        </div>
      </div>
      {
        output === null ? null:
        <div className='result'>
          <h2>Hasil Penilaian</h2>
          <p>{JSON.stringify(output)}</p>
        </div> 
      }
    </div>
  );
}

export default App;