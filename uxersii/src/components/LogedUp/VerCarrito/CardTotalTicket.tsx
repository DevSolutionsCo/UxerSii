import BotonLogin from "@/components/Signed out/login/BotonLogin";
import axios from "axios";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";
import React from "react";
import { generateUrl } from "../../../apis/PruebasSignUp.api";
import PayPalButton from "./PayPalButton";

const url = generateUrl();

interface Producto {
  imagen: string;
  fecha_cad: string;
  nomb_alim: string;
  cantidad: number;
  costo: number;
  id_alim: number;
  id_carrito: number;
}

interface CarritoNavProps {
  productosCarrito: Producto[];
}

function getCookie(name: string): string | null {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie.indexOf(cookieName) == 0) {
      return JSON.parse(cookie.substring(cookieName.length, cookie.length));
    }
  }

  return null;
}

const CardTotalTicket: React.FC<CarritoNavProps> = ({ productosCarrito }) => {
  const total = getCookie("totalCarrito");
  const datosUsuarioStringL = getCookie("usuarioL");
  let datosUsuario = null;
  if (datosUsuarioStringL !== null) {
    datosUsuario = JSON.parse(datosUsuarioStringL);
    console.log(datosUsuario);
    console.log(datosUsuario.correo_hog);
  }
  function generarFolio(): string {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let folio = "";
    for (let i = 0; i < 12; i++) {
      folio += caracteres[Math.floor(Math.random() * caracteres.length)];
      if (i === 3 || i === 7) folio += "-";
    }
    return folio;
  }

  const handleCreatePdf = async () => {
    const folio = generarFolio();
    console.log("Folio generado:", folio);

    // Generar QR
    const qrCodeDataUri = await QRCode.toDataURL(folio);

    // Crear PDF
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    const imgWidth = 100; // Ancho de la imagen
    const imgX = pageWidth / 2 - imgWidth / 2; // Calcula la posición X para centrar la imagen

    doc.text("Folio de Compra", 105, 20, { align: "center" });
    doc.addImage(qrCodeDataUri, "PNG", imgX, 30, imgWidth, 100);
    doc.text(`Folio: ${folio}`, 105, 140, { align: "center" });
    // Guardar PDF localmente
    const pdfPath = "ticket-de-compra.pdf";
    doc.save(pdfPath);
    const pdfBase64 = doc.output("datauristring");

    try {
      const productosIds = productosCarrito.map(producto => producto.id_carrito);
      const cantidad = productosCarrito.map(producto => ({
        id_carrito: producto.id_carrito,
        cantidad: producto.cantidad
      }));
          console.log(cantidad)
      const response = await axios.post(`${url}postcompra/`, {
        productosIds,
        folio,
        estatus: false,
        pdf: pdfBase64,
        to: datosUsuario.correo_hog,
        cantidad: cantidad
      });
    
      console.log(response.data);
      console.log("Sí lo hice");
      location.reload();
    } catch (error) {
      window.alert("Error al crear la orden");
      console.error("Error al crear la orden:", error);
    }
    
  };
  const alertaCompraInit = async () => {
    
    window.alert("Esta es la alerta mi compa..."); }

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

      <BotonLogin
          onClick={() => {
            handleCreatePdf(); // Primera función existente
            alertaCompraInit(); // Segunda función que deseas agregar
          }}
        className="mt-2 bg-[#F63E4F] border-2 px-4 py-2 rounded-md font-bold text-black w-full my-4"
      >
        Crear Ticket de Compra
      </BotonLogin>

      <PayPalButton />
    </section>
  );
};

export default CardTotalTicket;
