//function for add data to array
export const addNilai = ( item, idx, e ) =>{
  item[idx] = parseInt(e.target.value)
  }

//function for convert data to object
export const result = (aspek1, aspek2, aspek3, aspek4) =>{
  let hasil = {
    aspek_penilaian_1 : {
      mahasiwa_1 : aspek1[0],
      mahasiwa_2: aspek1[1],
      mahasiwa_3: aspek1[2],
      mahasiwa_4 : aspek1[3],
      mahasiwa_5 : aspek1[4],
      mahasiwa_6 : aspek1[5],
      mahasiwa_7 : aspek1[6],
      mahasiwa_8 : aspek1[7],
      mahasiwa_9 : aspek1[8],
      mahasiwa_10 : aspek1[9],
    },
    aspek_penilaian_2 : {
      mahasiwa_1 : aspek2[0],
      mahasiwa_2 : aspek2[1],
      mahasiwa_3 : aspek2[2],
      mahasiwa_4 : aspek2[3],
      mahasiwa_5 : aspek2[4],
      mahasiwa_6 : aspek2[5],
      mahasiwa_7 : aspek2[6],
      mahasiwa_8 : aspek2[7],
      mahasiwa_9: aspek2[8],
      mahasiwa_10 : aspek2[9],
   },
    aspek_penilaian_3 : {
      mahasiwa_1 : aspek3[0],
      mahasiwa_2 : aspek3[1],
      mahasiwa_3 : aspek3[2],
      mahasiwa_4 : aspek3[3],
      mahasiwa_5 : aspek3[4],
      mahasiwa_6 : aspek3[5],
      mahasiwa_7 : aspek3[6],
      mahasiwa_8 : aspek3[7],
      mahasiwa_9 : aspek3[8],
      mahasiwa_10 : aspek3[9],
   },
    aspek_penilaian_4 : {
      mahasiwa_1 : aspek4[0],
      mahasiwa_2 : aspek4[1],
      mahasiwa_3: aspek4[2],
      mahasiwa_4 : aspek4[3],
      mahasiwa_5 : aspek4[4],
      mahasiwa_6 : aspek4[5],
      mahasiwa_7 : aspek4[6],
      mahasiwa_8 : aspek4[7],
      mahasiwa_9 : aspek4[8],
      mahasiwa_10 : aspek4[9],
    },
  }
  return hasil
}