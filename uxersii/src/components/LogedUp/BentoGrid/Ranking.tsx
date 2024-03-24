/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { generateUrl } from '../../../apis/PruebasSignUp.api';

const url = generateUrl();

function Ranking() {
  const [nomb1, setNomb1] = useState("");
  const [nomb2, setNomb2] = useState("");
  const [nomb3, setNomb3] = useState("");

  const [fotoP1, setFotoP1] = useState("");
  const [fotoP2, setFotoP2] = useState("");
  const [fotoP3, setFotoP3] = useState("");

  const [numD1, setNumD1] = useState("");
  const [numD2, setNumD2] = useState("");
  const [numD3, setNumD3] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${url}ranking/`,

          {
            // Puedes incluir parámetros de consulta aquí si es necesario
          }
        );

        console.log(response.data);
        // Maneja la respuesta según tus necesidades
        const usuarios = response.data.usuarios;
        console.log(usuarios);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const datosUsuarios = usuarios.map(
          (usuario: {
            nombreUser: unknown;
            correoUser: unknown;
            fotoPerfil: unknown;
            numDonaciones: unknown;
          }) => {
            return {
              nombre: usuario.nombreUser,
              correo: usuario.correoUser,
              fotoPerfil: usuario.fotoPerfil,
              numDona: usuario.numDonaciones, // Ajusta al nombre correcto del campo
            };
          }
        );

        const primero = usuarios[0];
        const segundo = usuarios[1];
        const tercero = usuarios[2];
        console.log(primero.nombreUser);
        setNomb1(primero.nombreUser);

        if (primero.fotoPerfil !== null) {
          setFotoP1(primero.fotoPerfil);
        } else {
          setFotoP1("/src/assets/profile-pics/default-img.jpg");
        }
        setNumD1(primero.numDonaciones);

        setNomb2(segundo.nombreUser);
        if (segundo.fotoPerfil !== null) {
          setFotoP2(segundo.fotoPerfil);
        } else {
          setFotoP2("/src/assets/profile-pics/default-img.jpg");
        }
        setNumD2(segundo.numDonaciones);

        setNomb3(tercero.nombreUser);
        if (tercero.fotoPerfil !== null) {
          setFotoP3(tercero.fotoPerfil);
        } else {
          setFotoP3("/src/assets/profile-pics/default-img.jpg");
        }
        setNumD3(tercero.numDonaciones);
      } catch (error) {
        // Manejo de errores
        console.error("Error al realizar la solicitud GET:", error);
      }
    }

    fetchData(); // Llama a la función al cargar el componente
  }, []);

  const data = [
    { name: nomb1, donaciones: numD1 },
    { name: nomb2, donaciones: numD2 },
    { name: nomb3, donaciones: numD3 },
  ];
  console.log("flhjhkjfhk");

  return (
    <>
      <div className="hidden lg:flex flex-col gap-7">
        <div className="p-6 flex flex-row items-center">
          <picture className="pr-8">
            <img src={fotoP1} className="w-24 h-24 rounded-full" />
          </picture>
          <div>
            <h2 className="text-3xl font-semibold">{nomb1}</h2>
            <p>{numD1} donations</p>
          </div>
        </div>
        <div className="p-6 flex flex-row items-center">
          <picture className="pr-8">
            <img src={fotoP2} className="w-24 h-24 rounded-full" />
          </picture>
          <div>
            <h2 className="text-2xl font-semibold">{nomb2}</h2>
            <p>{numD2} donations</p>
          </div>
        </div>
      </div>

      <div className="">
        <BarChart
          width={360}
          height={320}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="donaciones" stackId="a" fill="#A9DFE1" />
        </BarChart>
      </div>
    </>
  );
}

export default Ranking;
