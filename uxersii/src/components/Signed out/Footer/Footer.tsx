



export default function Footer (){


    return(
<>

<footer className="bg-[#F63E4F] text-white p-8 mt-32">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <h2 className="font-bold text-2xl">Uxersii</h2>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold">CONTACTA CON NOSOTROS</h3>
              <ul>
                <a href="https://www.instagram.com/uxersiii?igsh=NW9uMDczeHFkMHRo" target="_blank">Instagram</a>
                <li>Twitter</li>
                <li>Facebook</li>

              </ul>
            </div>
            <div>
              <h3 className="font-semibold">UBICACIÓN DE PUNTOS MOVILES</h3>
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
                <div className="mb-6 md:mb-0">
                  <strong>Ciudad de México</strong><br />
                  Centro Historico-Zócalo<br />
                  UNAM<br/>
                  Iztapalapa
                </div>
                <div className="mb-6 md:mb-0">
                  <br />
                  Ecatepec <br />
                  Santa Fé<br />
                  Parque de los Venados
                </div>
                <div>
                  <br />
                  Plaza Universidad<br />
                  San Ángel<br />
                  Bosque de Chapultepec
                </div>
                <div>
                  <br />
                  Plaza Tres Culturas<br />
                  Reforma<br />
                  Parque Lincón-Polanco
                </div>
                <div>
                  <br />
                  Coyoacán<br />
                  Condesa<br />
                  Colonia Roma
                </div>
                <div>
                  <br />
                  Xochimilco<br />
                  Azcapotzalco<br />
                  Tlalpan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

</>


    );
}
