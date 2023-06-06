import React, {useState} from 'react';
import {FaUserCircle} from 'react-icons/fa';
import './App.css';
import Mahasiswa from './components/Mahasiswa/Mahasiswa';

function App() {
  const [nilai1, setNilai1] = useState([0,0,0,0,0,0,0,0,0,0]);
  const [nilai2, setNilai2] = useState([0,0,0,0,0,0,0,0,0,0]);
  const [nilai3, setNilai3] = useState([0,0,0,0,0,0,0,0,0,0]);
  const [nilai4, setNilai4] = useState([0,0,0,0,0,0,0,0,0,0]);

  return (
    <div className='main-container'>
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <div className='nilai-container'>
        <table>
          <thead>
            <th></th>
            <th className='title-table'><p>Aspek <br/>Penilaian 1</p></th>
            <th className='title-table'><p>Aspek <br/>Penilaian 2</p></th>
            <th className='title-table'><p>Aspek <br/>Penilaian 3</p></th>
            <th className='title-table'><p>Aspek <br/>Penilaian 4</p></th>
          </thead>
          <tbody>
            <tr>
              <td><span><FaUserCircle className='icon-user'/> Mahasiswa 1</span></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
            </tr>
            <tr>
               <td><span><FaUserCircle className='icon-user'/> Mahasiswa 2</span></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
            </tr>
            <tr>
             <td><span><FaUserCircle className='icon-user'/> Mahasiswa 3</span></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
            </tr>
            <tr>
             <td><span><FaUserCircle className='icon-user'/> Mahasiswa 4</span></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
            </tr>
            <tr>
             <td><span><FaUserCircle className='icon-user'/> Mahasiswa 5</span></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
            </tr>
            <tr>
               <td><span><FaUserCircle className='icon-user'/> Mahasiswa 6</span></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
            </tr>
            <tr>
            <td><span><FaUserCircle className='icon-user'/> Mahasiswa 7</span></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
            </tr>
            <tr>
                <td><span><FaUserCircle className='icon-user'/> Mahasiswa 8</span></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
            </tr>
            <tr>
               <td><span><FaUserCircle className='icon-user'/> Mahasiswa 9</span></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
            </tr>
            <tr>
              <td><span><FaUserCircle className='icon-user'/> Mahasiswa 10</span></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
              <td><Mahasiswa/></td>
            </tr>
          </tbody>
        </table>
        <div className='button-cont'>
          <button>Simpan</button>
        </div>
      </div>
    </div>
  );
}

export default App;
