import React from 'react';
import QRCode from 'qrcode';
import { jsPDF } from 'jspdf';
import BotonLogin from "@/components/Signed out/login/BotonLogin";

interface Props {
  // Puedes definir aquí otras props si las necesitas
}

const CardTotalTicket: React.FC<Props> = () => {
  const total = getCookie("totalCarrito");

  function generarFolio(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let folio = '';
    for (let i = 0; i < 12; i++) {
      folio += caracteres[Math.floor(Math.random() * caracteres.length)];
      if (i === 3 || i === 7) folio += "-";
    }
    return folio;
  }



  const handleCreatePdf = async () => {
    const folio = generarFolio();
    console.log('Folio generado:', folio);

    // Generar QR
    const qrCodeDataUri = await QRCode.toDataURL(folio);

    // Crear PDF
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    const imgWidth = 100; // Ancho de la imagen
    const imgX = (pageWidth / 2) - (imgWidth / 2); // Calcula la posición X para centrar la imagen

    doc.text('Folio de Compra', 105, 20, { align: 'center' });
    doc.addImage(qrCodeDataUri, 'PNG', imgX, 30, imgWidth, 100);
    doc.text(`Folio: ${folio}`, 105, 140, { align: 'center' });
    doc.save('ticket-de-compra.pdf');

    
  };

  

  

  return (
    <section className="my-4 mx-2 sm:mx-12 p-2 border shadow-black/50 shadow-sm rounded-md flex flex-col h-full bg-white">
      <div className="my-5 mx-2">
        <span className="font-bold">Revisión de compra</span>
      </div>
      <hr />
      <div className="my-5 mx-2">
        <p className="text-lg">
          Subtotal (x Productos): <span className="font-bold">${total}</span>
        </p>
      </div>
      <BotonLogin onClick={handleCreatePdf} className="mt-2 bg-[#C3DDFF] border-2 px-4 py-2 rounded-md font-bold text-black w-full">
        Crear Ticket de Compra
      </BotonLogin>
    </section>
  );
};

export default CardTotalTicket;

// Helper function: getCookie
function getCookie(name: string): string | null {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cookieName) === 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
  return null;
}