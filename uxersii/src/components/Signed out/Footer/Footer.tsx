



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
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">PUNTOS MOVILES</h3>
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
                <div className="mb-6 md:mb-0">
                  <strong>Amsterdam</strong><br />
                  Van Diemenstraat 38<br />
                  1013NH Amsterdam,<br />
                  Países Bajos
                </div>
                <div className="mb-6 md:mb-0">
                  <strong>OSLO</strong><br />
                  Trondheimsveien 135<br />
                  0570 Oslo<br />
                  Noruega
                </div>
                <div>
                  <strong>LONDRES 23</strong><br />
                  Englefield Rd<br />
                  London N1 4JX<br />
                  Reino Unido
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
